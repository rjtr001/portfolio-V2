
import { ArrowDown, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* University background with blur */}
      <div className="absolute inset-0 -z-20">
        <div 
          className="w-full h-full bg-cover bg-center opacity-10 blur-sm"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f8fafc" width="1200" height="800"/><path fill="%23e2e8f0" d="M100 300h200v200H100z"/><path fill="%23cbd5e1" d="M350 250h300v100H350z"/><path fill="%2394a3b8" d="M400 400h200v50H400z"/><text x="500" y="330" font-family="serif" font-size="24" fill="%23475569" text-anchor="middle">UNIVERSITY</text></svg>')`
          }}
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in relative z-10">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500">
                Thanaraman RJ
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}></div>
          </div>
          
          <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground">
            <span className="typed-text relative">
              AI/ML Engineer & Network Security Intern
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary/50"></span>
            </span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button size="lg" onClick={scrollToContact} className="gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
              Contact Me 
              <Mail className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-indigo-200 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-950/50 transition-all duration-300">
              <a href="https://github.com/rjtr001" target="_blank" rel="noopener noreferrer">
                GitHub
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-teal-200 hover:bg-teal-50 dark:border-teal-800 dark:hover:bg-teal-950/50 transition-all duration-300">
              <a href="https://linkedin.com/in/rjthanaraman" target="_blank" rel="noopener noreferrer">
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/50 transition-all duration-300">
              <a href="https://drive.google.com/file/d/1RclsFQdZh9V9CQ5ddlJntt_2xV_s3iQI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                Open CV
                <FileText className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Social links with hover effects */}
          <div className="flex gap-6 mt-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="mailto:rjthanaraman64@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 group" aria-label="Email">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="tel:+919345281935" className="text-muted-foreground hover:text-primary transition-colors duration-300 group" aria-label="Phone">
              <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/rjtr001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 group" aria-label="GitHub">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://linkedin.com/in/rjthanaraman" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 group" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://drive.google.com/file/d/1RclsFQdZh9V9CQ5ddlJntt_2xV_s3iQI/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 group" aria-label="CV">
              <FileText className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
          className="bg-background/80 backdrop-blur-sm border border-border hover:bg-muted/80 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;