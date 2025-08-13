
import { Brain, ChartBar, Database, Microchip, Network, Server, Cloud, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Binary code animation */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-primary/30 font-mono animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 0.8 + 0.5}rem`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute h-40 w-40 border-2 border-primary/20 rounded-full left-[10%] top-[20%] animate-spin-slow"></div>
        <div className="absolute h-60 w-60 border border-primary/10 rounded-full right-[5%] bottom-[10%] animate-reverse-spin-slow"></div>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed relative backdrop-blur-sm p-4 border border-border/50 rounded-lg bg-background/30 transform transition-all hover:scale-[1.01] hover:shadow-lg">
              I am a dedicated and passionate AI/ML enthusiast and aspiring Network Security Engineer currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at VIT Bhopal. My journey has been enriched with hands-on experience in building innovative software solutions.
              <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-teal-500"></span>
            </p>
            <p className="text-lg leading-relaxed relative backdrop-blur-sm p-4 border border-border/50 rounded-lg bg-background/30 transform transition-all hover:scale-[1.01] hover:shadow-lg">
              With internship experience in network security, I've developed solid foundational knowledge in TCP/IP, Snort, Wireshark, Nmap, and OpenVAS. I also explore creative technologies like OpenCV and prompt engineering to deliver impactful real-world solutions.
              <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-teal-500"></span>
            </p>
            <p className="text-lg leading-relaxed relative backdrop-blur-sm p-4 border border-border/50 rounded-lg bg-background/30 transform transition-all hover:scale-[1.01] hover:shadow-lg">
              My future goals revolve around merging AI/ML intelligence with network resilience to solve real-world cybersecurity problems. I'm currently a final year B.Tech student graduating in 2025.
              <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500"></span>
              <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-teal-500"></span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="hover-card card-gradient relative group overflow-hidden border border-indigo-200 dark:border-indigo-800/30 transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <Brain className="h-10 w-10 text-indigo-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">AI/ML</h3>
              </CardContent>
            </Card>
            
            <Card className="hover-card card-gradient relative group overflow-hidden border border-teal-200 dark:border-teal-800/30 transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <Network className="h-10 w-10 text-teal-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Network Security</h3>
              </CardContent>
            </Card>
            
            <Card className="hover-card card-gradient relative group overflow-hidden border border-teal-200 dark:border-teal-800/30 transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <Code className="h-10 w-10 text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">System Automation</h3>
              </CardContent>
            </Card>
            
            <Card className="hover-card card-gradient relative group overflow-hidden border border-indigo-200 dark:border-indigo-800/30 transform transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <Microchip className="h-10 w-10 text-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Prompt Engineering</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
