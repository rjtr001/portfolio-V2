
import { Book, Plane, Music, Puzzle, Sprout, Dumbbell } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hobbies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('hobbies-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const hobbiesData = [
    {
      name: "Reading",
      icon: <Book className="w-8 h-8" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      name: "Travelling",
      icon: <Plane className="w-8 h-8" />,
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    },
    {
      name: "Music",
      icon: <Music className="w-8 h-8" />,
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
    },
    {
      name: "Trekking",
      icon: <Sprout className="w-8 h-8" />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      name: "Gym and Fitness",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      name: "Problem Solving",
      icon: <Puzzle className="w-8 h-8" />,
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
    }
  ];

  return (
    <section id="hobbies" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-particles"></div>
        <div className="grid-lines opacity-10"></div>
        
        {/* Animated hobby symbols */}
        <div className="hobby-symbol" style={{ top: '15%', left: '5%', animationDuration: '15s' }}>
          <Book className="h-12 w-12 text-primary/10" />
        </div>
        <div className="hobby-symbol" style={{ top: '60%', left: '8%', animationDuration: '18s' }}>
          <Plane className="h-10 w-10 text-primary/10" />
        </div>
        <div className="hobby-symbol" style={{ top: '25%', right: '7%', animationDuration: '20s' }}>
          <Music className="h-14 w-14 text-primary/10" />
        </div>
        <div className="hobby-symbol" style={{ top: '75%', right: '10%', animationDuration: '17s' }}>
          <Puzzle className="h-8 w-8 text-primary/10" />
        </div>
      </div>
      
      <div className="section-container relative z-10" id="hobbies-section">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {hobbiesData.map((hobby, index) => (
            <div 
              key={hobby.name} 
              className={`hobby-card ${isVisible ? 'animate-fade-in' : 'opacity-0'} rounded-2xl p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${hobby.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse"></div>
                <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-3 border border-border/50">
                  {hobby.icon}
                </div>
              </div>
              <h3 className="font-medium text-lg">{hobby.name}</h3>
              <div className="hobby-animation mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
