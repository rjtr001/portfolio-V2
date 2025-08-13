
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChartBar, Brain, Activity, ExternalLink, ChevronDown, ChevronUp, FileText, Shield, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "File Organizer Desktop Application",
      shortDescription: "A cross-platform Electron app for intelligent file categorization using AI.",
      period: "May 2025",
      description: [
        "Built a cross-platform desktop application using Electron framework for automated file organization.",
        "Implemented AI-powered file categorization system to intelligently sort files by type and content.",
        "Designed user-friendly interface with TypeScript and Node.js backend for seamless file management.",
        "Integrated automated workflow to help users maintain organized file systems efficiently."
      ],
      tags: ["Electron", "TypeScript", "Node.js", "AI"],
      icon: <FileText className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />,
      gradient: "from-indigo-600 to-blue-400",
      url: "https://github.com/rjtr001/FILE-ORGANIZER-DESKTOP-APPLICATION",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Sign Language Recognition System",
      shortDescription: "A gesture recognition tool using OpenCV to interpret sign language for accessible communication.",
      period: "Jul 2023 – Sep 2023",
      description: [
        "Developed computer vision system using OpenCV for real-time sign language gesture recognition.",
        "Implemented machine learning algorithms to accurately interpret hand gestures and convert to text.",
        "Created accessible communication tool to bridge communication gap for hearing-impaired individuals.",
        "Achieved high accuracy in gesture detection through advanced image processing techniques."
      ],
      tags: ["Python", "OpenCV", "Computer Vision", "Accessibility"],
      icon: <Brain className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
      gradient: "from-purple-600 to-indigo-400",
      url: "https://github.com/rjtr001/Sign-language-recognition",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "AI Data Extractor",
      shortDescription: "An intelligent extractor that parses and interprets structured data using AI prompts.",
      period: "2024",
      description: [
        "Built AI-powered data extraction tool using advanced prompt engineering techniques.",
        "Implemented intelligent parsing system to extract structured information from unstructured data sources.",
        "Designed flexible architecture to handle various data formats and extraction requirements.",
        "Achieved high accuracy in data interpretation through optimized AI prompt strategies."
      ],
      tags: ["Python", "Prompt Engineering", "AI", "Data Processing"],
      icon: <Search className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      gradient: "from-teal-600 to-green-400",
      url: "https://github.com/rjtr001/AI-DATA-EXTRACTOR",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Z-Band (Prototype)",
      shortDescription: "A wearable safety band with SOS and signal-less communication features.",
      period: "Jun 2024 – Jul 2024",
      description: [
        "Designed innovative wearable safety device with emergency SOS functionality.",
        "Implemented signal-less communication system for remote area emergency situations.",
        "Developed hardware prototype using nano-technology and embedded systems.",
        "Created compact, wearable design prioritizing user safety and emergency response capabilities."
      ],
      tags: ["Hardware", "Nano-tech", "Embedded Systems", "IoT"],
      icon: <Shield className="h-10 w-10 text-rose-600 dark:text-rose-400" />,
      gradient: "from-rose-600 to-amber-400",
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background design elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="section-container">
        <motion.h2 
          className="section-title bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card 
        className="h-full overflow-hidden relative group border-0 shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient border with animation */}
        <motion.div 
          className="absolute inset-0 p-0.5 rounded-lg bg-gradient-to-br from-transparent via-primary/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Card background with subtle gradient */}
        <div className="absolute inset-0.5 rounded-[calc(0.75rem-1px)] bg-gradient-to-br from-card/50 to-card" />
        
        {/* Project image - shown on hover with parallax effect */}
        {project.image && (
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
        
        <div className="relative rounded-lg z-10">
          <CardHeader className="pb-2 relative">
            <motion.div 
              className="mb-2 p-2 rounded-full bg-muted/50 w-16 h-16 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {project.icon}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r rounded-full"
                style={{ 
                  backgroundImage: `linear-gradient(90deg, var(${project.gradient.split(' ')[0].replace('from-', '--')}), var(${project.gradient.split(' ')[1].replace('to-', '--')}))`,
                  opacity: 0.2
                }}
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            <div className="space-y-1.5">
              <motion.div
                initial={{ backgroundSize: "100% 0%" }}
                animate={isHovered ? { backgroundSize: "100% 100%" } : { backgroundSize: "100% 0%" }}
                transition={{ duration: 0.6 }}
              >
                <CardTitle 
                  className="text-xl transition-all duration-300 bg-clip-text" 
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, var(${project.gradient.split(' ')[0].replace('from-', '--')}), var(${project.gradient.split(' ')[1].replace('to-', '--')}))`,
                    color: isHovered ? "transparent" : "inherit"
                  }}
                >
                  {project.title}
                </CardTitle>
              </motion.div>
              <CardDescription>{project.period}</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground mb-4">
              {project.shortDescription}
            </p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="mt-4 space-y-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {project.description.map((item: string, i: number) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
          
          <CardFooter className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-2 my-1">
              <AnimatePresence>
                {(showAllTags ? project.tags : project.tags.slice(0, 2)).map((tag: string, idx: number) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-accent/30 border-primary/20 hover:bg-accent transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {project.tags.length > 2 && !showAllTags && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Badge 
                    variant="outline" 
                    className="bg-accent/30 border-primary/20 hover:bg-accent transition-colors duration-300 cursor-pointer"
                    onClick={() => setShowAllTags(true)}
                  >
                    +{project.tags.length - 2}
                  </Badge>
                </motion.div>
              )}
              
              {showAllTags && project.tags.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="outline" 
                    className="bg-accent/30 border-primary/20 hover:bg-accent transition-colors duration-300 cursor-pointer"
                    onClick={() => setShowAllTags(false)}
                  >
                    Show less
                  </Badge>
                </motion.div>
              )}
            </div>
            
            <div className="flex gap-2 ml-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-xs flex items-center gap-1 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isExpanded ? (
                      <>Hide Details <ChevronUp className="h-3 w-3" /></>
                    ) : (
                      <>View Details <ChevronDown className="h-3 w-3" /></>
                    )}
                  </span>
                  
                  <motion.span 
                    className="absolute inset-0 bg-primary/10 rounded-md"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              
              {project.url && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-xs flex items-center gap-1 relative overflow-hidden group"
                  >
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10">GitHub <ExternalLink className="h-3 w-3" /></span>
                      
                      <motion.span 
                        className="absolute inset-0 bg-primary/10 rounded-md"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;
