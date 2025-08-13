import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import AnimatedBackground from './AnimatedBackground';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FileText } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Progress bar at the top */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 z-50"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: '0% center'
        }}
      />
      
      {/* Professional university background for the entire website */}
      <div className="fixed inset-0 -z-30">
        <div 
          className="w-full h-full bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3')`
          }}
        />
      </div>

      {/* Animated Background */}
      <AnimatedBackground />
      
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a 
            href="#home" 
            className="font-bold text-lg md:text-xl relative group"
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Thanaraman RJ
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          
          <div className="flex items-center gap-4">
            {/* Theme toggle - visible on all screen sizes */}
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-muted/50 py-8 border-t relative z-10">
        <div className="container text-center">
          <div className="max-w-md mx-auto">
            <motion.div 
              className="flex justify-center space-x-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:rjthanaraman64@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </motion.a>
              <motion.a 
                href="tel:+919345281935" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Phone</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </motion.a>
              <motion.a 
                href="https://github.com/rjtr001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M15 22v-4a4.8 4.8 0 0 1-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/rjthanaraman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </motion.a>
              <motion.a 
                href="https://drive.google.com/file/d/1RclsFQdZh9V9CQ5ddlJntt_2xV_s3iQI/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">CV</span>
                <FileText className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Thanaraman RJ. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              AI/ML Engineer & Network Security Intern - Building intelligent solutions for tomorrow
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
