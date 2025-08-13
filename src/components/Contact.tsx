import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Send, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useState, useCallback, useRef } from 'react';

// Security constants
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_DELAY = 3000; // 3 seconds between submissions

// Input sanitization function
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, input === 'message' ? MAX_MESSAGE_LENGTH : input === 'email' ? MAX_EMAIL_LENGTH : MAX_NAME_LENGTH);
};

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Hidden field to catch bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmitTime = useRef<number>(0);
  const submitAttempts = useRef<number>(0);

  // Validate individual field
  const validateField = useCallback((name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length > MAX_NAME_LENGTH) return `Name must be less than ${MAX_NAME_LENGTH} characters`;
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name contains invalid characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (value.length > MAX_EMAIL_LENGTH) return `Email must be less than ${MAX_EMAIL_LENGTH} characters`;
        if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > MAX_MESSAGE_LENGTH) return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        return '';
      default:
        return '';
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Skip validation for honeypot field
    if (name === 'honeypot') {
      setFormData(prev => ({ ...prev, [name]: value }));
      return;
    }
    
    // Sanitize input
    const sanitizedValue = sanitizeInput(value);
    
    // Update form data
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Clear error if field becomes valid
    const error = validateField(name, sanitizedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for honeypot (bot detection)
    if (formData.honeypot) {
      console.warn('Bot detected via honeypot field');
      return;
    }
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_DELAY) {
      toast({
        title: "Please wait",
        description: `Please wait ${Math.ceil((RATE_LIMIT_DELAY - (now - lastSubmitTime.current)) / 1000)} seconds before submitting again.`,
        variant: "destructive"
      });
      return;
    }
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.message = validateField('message', formData.message);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      setErrors(newErrors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    submitAttempts.current += 1;
    lastSubmitTime.current = now;
    
    try {
      // Additional security check for rapid submissions
      if (submitAttempts.current > 5) {
        toast({
          title: "Too many attempts",
          description: "Please refresh the page and try again later.",
          variant: "destructive"
        });
        return;
      }
      
      // Create form data for Google Sheets with sanitized data
      const formDataToSend = new FormData();
      formDataToSend.append('Name', sanitizeInput(formData.name));
      formDataToSend.append('Email', sanitizeInput(formData.email));
      formDataToSend.append('Message', sanitizeInput(formData.message));
      formDataToSend.append('Timestamp', new Date().toISOString());
      formDataToSend.append('UserAgent', navigator.userAgent.slice(0, 200)); // Limited user agent for analytics
      
      // Submit to Google Sheets with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('https://script.google.com/macros/s/1VDItACGmAdyr-4Eed3T5RT2e5V47us6GO7b3kHEPZrA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Log successful submission for monitoring
      console.log('Form submitted successfully at:', new Date().toISOString());
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. Your message has been recorded and I'll get back to you soon.",
      });
      
      // Reset form and errors
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setErrors({});
      
    } catch (error) {
      // Log error for monitoring
      console.error('Form submission error:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        formData: {
          nameLength: formData.name.length,
          emailLength: formData.email.length,
          messageLength: formData.message.length
        }
      });
      
      // Show user-friendly error message
      if (error instanceof Error && error.name === 'AbortError') {
        toast({
          title: "Request timeout",
          description: "The request took too long. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Submission Error",
          description: "There was an issue submitting your message. Please try again or contact me directly.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              I'm always open to discussing new projects, opportunities in AI/ML and Network Security, or potential collaborations.
              Feel free to reach out through the contact form or via the contact methods listed.
            </p>
            
            <div className="space-y-4">
              <Card className="hover-card card-gradient">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:rjthanaraman64@gmail.com" className="font-medium hover:text-primary">
                      rjthanaraman64@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-card card-gradient">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+919345281935" className="font-medium hover:text-primary">
                      +91 9345281935
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-card card-gradient">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Resume</p>
                    <a 
                      href="https://drive.google.com/file/d/1RclsFQdZh9V9CQ5ddlJntt_2xV_s3iQI/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      View CV / Resume
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://github.com/rjtr001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://linkedin.com/in/rjthanaraman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="mailto:rjthanaraman64@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href="https://drive.google.com/file/d/1RclsFQdZh9V9CQ5ddlJntt_2xV_s3iQI/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="CV">
                    <FileText className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <Card className="card-gradient animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                 {/* Honeypot field - hidden from users, catches bots */}
                 <input
                   type="text"
                   name="honeypot"
                   value={formData.honeypot}
                   onChange={handleChange}
                   style={{ display: 'none' }}
                   tabIndex={-1}
                   autoComplete="off"
                 />
                 
                 <div className="space-y-2">
                   <label htmlFor="name" className="text-sm font-medium">
                     Name *
                   </label>
                   <Input
                     id="name"
                     name="name"
                     placeholder="Your full name"
                     value={formData.name}
                     onChange={handleChange}
                     maxLength={MAX_NAME_LENGTH}
                     required
                     aria-describedby={errors.name ? "name-error" : undefined}
                     className={errors.name ? "border-destructive" : ""}
                   />
                   {errors.name && (
                     <p id="name-error" className="text-sm text-destructive">
                       {errors.name}
                     </p>
                   )}
                 </div>
                
                 <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium">
                     Email *
                   </label>
                   <Input
                     id="email"
                     name="email"
                     placeholder="your.email@example.com"
                     type="email"
                     value={formData.email}
                     onChange={handleChange}
                     maxLength={MAX_EMAIL_LENGTH}
                     required
                     aria-describedby={errors.email ? "email-error" : undefined}
                     className={errors.email ? "border-destructive" : ""}
                   />
                   {errors.email && (
                     <p id="email-error" className="text-sm text-destructive">
                       {errors.email}
                     </p>
                   )}
                 </div>
                
                 <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium">
                     Message * (min 10 characters)
                   </label>
                   <Textarea
                     id="message"
                     name="message"
                     placeholder="Your message here... (minimum 10 characters)"
                     rows={5}
                     value={formData.message}
                     onChange={handleChange}
                     maxLength={MAX_MESSAGE_LENGTH}
                     minLength={10}
                     required
                     aria-describedby={errors.message ? "message-error" : "message-count"}
                     className={errors.message ? "border-destructive" : ""}
                   />
                   {errors.message && (
                     <p id="message-error" className="text-sm text-destructive">
                       {errors.message}
                     </p>
                   )}
                   <p id="message-count" className="text-xs text-muted-foreground text-right">
                     {formData.message.length}/{MAX_MESSAGE_LENGTH} characters
                   </p>
                 </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending<span className="ml-2 animate-pulse">...</span></>
                  ) : (
                    <>Send Message <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
               <p className="text-xs text-muted-foreground mt-2 text-center">
                 Your message will be sent securely. All fields marked with * are required.
               </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;