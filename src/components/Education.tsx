
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, School, BookOpen, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const Education = () => {
  const educationData = [
    {
      institution: "Vellore Institute of Technology, Bhopal",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      period: "2021-Present",
      description: "Currently pursuing final year with focus on AI/ML and Network Security. CGPA: 7.57",
      location: "Bhopal, Madhya Pradesh",
      icon: <GraduationCap className="h-8 w-8" />,
      current: true
    },
    {
      institution: "Vidyaa Vikas",
      degree: "Class XII",
      period: "2021",
      description: "Completed higher secondary education with 72.6% marks.",
      location: "Tamil Nadu",
      icon: <School className="h-8 w-8" />,
      current: false
    },
    {
      institution: "Vidyaa Vikas",
      degree: "Class X",
      period: "2019",
      description: "Completed secondary education with 64.2% marks.",
      location: "Tamil Nadu",
      icon: <BookOpen className="h-8 w-8" />,
      current: false
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 relative bg-gradient-to-b from-muted/30 to-background">
      {/* Tech pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Math/science pattern background */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-primary/30 font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 1.5 + 0.8}rem`,
                opacity: Math.random() * 0.7 + 0.3,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              {['∑', '∫', '∂', 'π', '√', '∞', 'f(x)', 'Δ', 'λ', 'θ', 'α', 'β', '÷', '±', '×'][Math.floor(Math.random() * 15)]}
            </div>
          ))}
        </div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-16 text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">Education Journey</h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <Card className={`overflow-hidden border-l-4 ${item.current ? 'border-l-primary' : 'border-l-muted-foreground/30'} hover:shadow-xl transition-all duration-500 hover:shadow-primary/10`}>
                <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-indigo-500/40"></div>
                <CardContent className="p-6 relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className={`p-4 rounded-full ${item.current ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'} transition-all duration-300`}>
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300">{item.institution}</h3>
                        <div className="text-muted-foreground font-medium">{item.period}</div>
                      </div>
                      
                      <div className="mt-2">
                        <div className="font-medium text-lg">{item.degree}</div>
                        {item.current && (
                          <div className="mt-2">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              Current
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                      
                      <div className="mt-3 text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Connector Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-[24px] top-full h-8 w-0.5 bg-gradient-to-b from-indigo-500/40 to-purple-500/40 ml-3 hidden md:block"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
