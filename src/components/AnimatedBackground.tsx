
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    canvas.width = width;
    canvas.height = height;
    
    // Create gradient waves
    let gradientWaves: GradientWave[] = [];
    const waveCount = 3;
    
    for (let i = 0; i < waveCount; i++) {
      gradientWaves.push({
        y: height * (0.5 + i * 0.2),
        amplitude: 15 + i * 5,
        frequency: 0.02 - i * 0.005,
        phase: 0,
        speed: 0.02 + i * 0.01,
        color: theme === 'dark' 
          ? `rgba(99, 102, 241, ${0.03 + i * 0.02})`
          : `rgba(99, 102, 241, ${0.04 + i * 0.03})`
      });
    }
    
    // Create floating orbs
    const orbCount = 15; // Increased orb count
    const orbs: FloatingOrb[] = [];
    
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 15 + Math.random() * 40, // Varied sizes
        xSpeed: (Math.random() - 0.5) * 0.4, // Faster movement
        ySpeed: (Math.random() - 0.5) * 0.4,
        color: i % 3 === 0 
          ? `rgba(139, 92, 246, ${0.03 + Math.random() * 0.07})`
          : i % 3 === 1
            ? `rgba(20, 184, 166, ${0.03 + Math.random() * 0.07})`
            : `rgba(79, 70, 229, ${0.03 + Math.random() * 0.07})`
      });
    }

    // Create code elements (enhanced with AI symbols)
    const codeElements: CodeElement[] = [];
    const codeCount = 40; // More code elements
    const aiSymbols = ['0', '1', 'AI', '{}', '<>', '[]', '()', 'ML'];
    
    for (let i = 0; i < codeCount; i++) {
      codeElements.push({
        x: Math.random() * width,
        y: Math.random() * height,
        value: aiSymbols[Math.floor(Math.random() * aiSymbols.length)],
        size: 10 + Math.random() * 16,
        opacity: 0.05 + Math.random() * 0.15,
        speed: 0.2 + Math.random() * 0.6,
        color: theme === 'dark' 
          ? 'rgba(156, 163, 175, 0.3)' 
          : 'rgba(55, 65, 81, 0.2)'
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw waves
      gradientWaves.forEach(wave => {
        ctx.fillStyle = wave.color;
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let x = 0; x < width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
        
        wave.phase += wave.speed;
      });
      
      // Draw floating orbs
      orbs.forEach(orb => {
        // Create gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move orb
        orb.x += orb.xSpeed;
        orb.y += orb.ySpeed;
        
        // Bounce off edges
        if (orb.x < 0 || orb.x > width) orb.xSpeed *= -1;
        if (orb.y < 0 || orb.y > height) orb.ySpeed *= -1;
      });

      // Draw code elements
      codeElements.forEach(element => {
        ctx.font = `${element.size}px monospace`;
        ctx.fillStyle = element.color;
        ctx.globalAlpha = element.opacity;
        ctx.fillText(element.value, element.x, element.y);
        ctx.globalAlpha = 1;
        
        // Move down
        element.y += element.speed;
        
        // Reset if off screen
        if (element.y > height) {
          element.y = -element.size;
          element.x = Math.random() * width;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Adjust waves
      gradientWaves.forEach((wave, i) => {
        wave.y = height * (0.5 + i * 0.2);
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
      />
      
      {/* Floating geometric shapes with improved animations */}
      <div className="hidden lg:block">
        <motion.div 
          className="absolute w-32 h-32 rounded-full border-2 border-primary/10"
          style={{ top: '15%', left: '10%' }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 25, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-24 h-24 rounded-lg border-2 border-secondary/10"
          style={{ bottom: '20%', right: '15%' }}
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5"
          style={{ top: '40%', right: '25%' }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Tech-specific floating icons with improved animations */}
        <motion.div
          className="absolute text-primary/10 text-6xl font-mono font-bold"
          style={{ top: '25%', right: '12%' }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
        >
          ML
        </motion.div>
        <motion.div
          className="absolute text-primary/10 text-4xl font-bold"
          style={{ bottom: '30%', left: '15%' }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.08, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut"
          }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          className="absolute text-primary/10 text-5xl font-mono font-bold"
          style={{ top: '45%', left: '22%' }}
          animate={{
            y: [0, 12, 0],
            opacity: [0.15, 0.45, 0.15],
            rotate: [0, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        >
          AI
        </motion.div>
      </div>
    </motion.div>
  );
};

// Types
interface GradientWave {
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  color: string;
}

interface FloatingOrb {
  x: number;
  y: number;
  radius: number;
  xSpeed: number;
  ySpeed: number;
  color: string;
}

interface CodeElement {
  x: number;
  y: number;
  value: string;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

export default AnimatedBackground;
