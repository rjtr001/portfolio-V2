
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, FileText, Trophy, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-8 md:py-12 relative overflow-hidden">
      {/* Enhanced background elements with more dynamic animations */}
      <motion.div 
        className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
          times: [0, 0.5, 1]
        }}
      />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Extracurricular & Achievements
            <motion.span
              className="absolute -z-10 inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          <AchievementCard 
            title="5-Star SQL HackerRank Badge"
            period="2024"
            description="Recognized for exceptional proficiency in SQL programming and data handling, demonstrating advanced database querying and data manipulation skills."
            icon={<Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
            tags={["SQL", "Programming", "Database", "HackerRank"]}
            delay={0}
            gradient="from-purple-600 to-indigo-400"
          />
          
          <AchievementCard 
            title="IoT Club - Event Management Lead"
            period="2021-Present"
            description="Leading event management initiatives for IoT Club, organizing technical workshops, seminars, and inter-college competitions. Coordinating with industry professionals and managing event logistics."
            icon={<Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            tags={["Leadership", "Event Management", "IoT", "Team Coordination"]}
            delay={0.1}
            gradient="from-indigo-600 to-blue-400"
          />
          
          <AchievementCard 
            title="Karate Champion - National Level Medalist"
            period="Ongoing"
            description="Achieved national-level recognition in Karate competitions, demonstrating discipline, physical fitness, and competitive excellence in martial arts."
            icon={<Trophy className="h-8 w-8 text-teal-600 dark:text-teal-400" />}
            tags={["Sports", "National Level", "Karate", "Competition"]}
            delay={0.2}
            gradient="from-teal-600 to-green-400"
          />
          
          <AchievementCard 
            title="Handball Zonal Champions"
            period="2023"
            description="Part of the winning team in zonal handball championships, showcasing teamwork, athletic prowess, and competitive spirit in team sports."
            icon={<Target className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
            tags={["Team Sports", "Handball", "Championship", "Teamwork"]}
            delay={0.3}
            gradient="from-orange-600 to-red-400"
          />
        </div>
      </div>
    </section>
  );
};

interface AchievementCardProps {
  title: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  delay: number;
  gradient: string;
}

const AchievementCard = ({ title, period, description, icon, tags, delay, gradient }: AchievementCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Enhanced card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      <Card 
        className="overflow-hidden relative group border-0 shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced gradient border with animation */}
        <motion.div 
          className="absolute inset-0 p-0.5 rounded-lg bg-gradient-to-br from-transparent via-primary/20 to-transparent"
          initial={{ opacity: 0, backgroundPosition: "0% 0%" }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            backgroundPosition: isHovered ? "100% 100%" : "0% 0%"
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Enhanced card background with subtle gradient */}
        <motion.div 
          className="absolute inset-0.5 rounded-[calc(0.75rem-1px)] bg-gradient-to-br from-card/50 to-card"
          animate={{
            background: isHovered 
              ? `linear-gradient(135deg, var(${gradient.split(' ')[0].replace('from-', '--')}/10), var(${gradient.split(' ')[1].replace('to-', '--')}/5), var(--card))` 
              : "linear-gradient(135deg, var(--card), var(--card))"
          }}
          transition={{ duration: 0.6 }}
        />
        
        <CardContent className="relative z-10 p-6 flex flex-col md:flex-row items-start gap-4">
          <motion.div 
            className="p-3 rounded-full bg-muted/50 w-16 h-16 flex items-center justify-center overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {icon}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r rounded-full"
              style={{ 
                backgroundImage: `linear-gradient(90deg, var(${gradient.split(' ')[0].replace('from-', '--')}), var(${gradient.split(' ')[1].replace('to-', '--')}))`,
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
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <motion.div
                initial={{ backgroundSize: "100% 0%" }}
                animate={isHovered ? { backgroundSize: "100% 100%" } : { backgroundSize: "100% 0%" }}
                transition={{ duration: 0.6 }}
              >
                <h3 
                  className="text-xl font-semibold transition-all duration-300 bg-clip-text" 
                  style={{ 
                    backgroundImage: `linear-gradient(90deg, var(${gradient.split(' ')[0].replace('from-', '--')}), var(${gradient.split(' ')[1].replace('to-', '--')}))`,
                    color: isHovered ? "transparent" : "inherit"
                  }}
                >
                  {title}
                </h3>
              </motion.div>
              
              <span className="text-sm text-muted-foreground">
                {period}
              </span>
            </div>
            
            <motion.p 
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.4 }}
            >
              {description}
            </motion.p>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: idx * 0.05 + delay + 0.2,
                    type: "spring",
                    stiffness: 500,
                    damping: 25
                  }}
                >
                  <Badge 
                    variant="outline" 
                    className="bg-accent/30 border-primary/20 hover:bg-accent transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Extracurricular;