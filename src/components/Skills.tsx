import { useState, useEffect } from 'react';
import { Terminal, Code, Database, Beaker, ChartLine, Cpu, Network, Brain, Cloud, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillChart from './SkillChart';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
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

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const technicalSkills = [
    { subject: 'Python', score: 70 },
    { subject: 'SQL', score: 80 },
    { subject: 'AI/ML', score: 65 },
    { subject: 'Network Security', score: 80 },
    { subject: 'TypeScript\nusing AI', score: 70 },
    { subject: 'OpenCV', score: 50 }
  ];

  const toolsSkills = [
    { subject: 'Wireshark', score: 85 },
    { subject: 'Nmap', score: 80 },
    { subject: 'OpenVAS', score: 75 },
    { subject: 'Git', score: 50 },
    { subject: 'Electron\nusing AI', score: 50 },
    { subject: 'TryHackMe', score: 75 }
  ];

  const softSkills = [
    { subject: 'Problem-Solving', score: 90 },
    { subject: 'Team Leadership', score: 85 },
    { subject: 'Event Management', score: 85 },
    { subject: 'Communication', score: 80 },
    { subject: 'Adaptability', score: 85 },
    { subject: 'Time Management', score: 80 }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-particles"></div>
        <div className="grid-lines"></div>
        
        {/* Animated tech symbols */}
        <div className="tech-symbol" style={{ top: '15%', left: '5%', animationDuration: '15s' }}>
          <Code className="h-12 w-12 text-primary/10" />
        </div>
        <div className="tech-symbol" style={{ top: '60%', left: '8%', animationDuration: '18s' }}>
          <Database className="h-10 w-10 text-primary/10" />
        </div>
        <div className="tech-symbol" style={{ top: '25%', right: '7%', animationDuration: '20s' }}>
          <Brain className="h-14 w-14 text-primary/10" />
        </div>
        <div className="tech-symbol" style={{ top: '75%', right: '10%', animationDuration: '17s' }}>
          <Network className="h-8 w-8 text-primary/10" />
        </div>
      </div>
      
      <div className="section-container relative z-10" id="skills-section">
        <h2 className="section-title">Skills</h2>
        
        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code className="h-4 w-4" /> Technical
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <ChartLine className="h-4 w-4" /> Tools
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Terminal className="h-4 w-4" /> Soft Skills
            </TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            <Card className={`card-gradient shadow-lg relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background rounded-lg backdrop-blur-[2px] -z-10"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {activeTab === 'technical' && <Code className="h-5 w-5" />}
                  {activeTab === 'tools' && <ChartLine className="h-5 w-5" />}
                  {activeTab === 'soft' && <Terminal className="h-5 w-5" />}
                  {activeTab === 'technical' && 'Programming & Frameworks'}
                  {activeTab === 'tools' && 'Security Tools & Technologies'}
                  {activeTab === 'soft' && 'Soft Skills'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TabsContent value="technical" className="mt-0">
                  <SkillChart data={technicalSkills} />
                </TabsContent>
                <TabsContent value="tools" className="mt-0">
                  <SkillChart data={toolsSkills} />
                </TabsContent>
                <TabsContent value="soft" className="mt-0">
                  <SkillChart data={softSkills} />
                </TabsContent>
              </CardContent>
            </Card>
            
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <TabsContent value="technical" className="mt-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="skill-card">
                    <Code className="h-8 w-8 text-indigo-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Programming</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-indigo-600 hover:bg-indigo-700">Python</Badge>
                      <Badge className="bg-indigo-600 hover:bg-indigo-700">SQL</Badge>
                      <Badge className="bg-indigo-600 hover:bg-indigo-700 text-center">
                        <span className="block">TypeScript</span>
                        <span className="block text-xs">using AI</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="skill-card">
                    <Database className="h-8 w-8 text-teal-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-teal-600 hover:bg-teal-700">OpenCV</Badge>
                      <Badge className="bg-teal-600 hover:bg-teal-700 text-center">
                        <span className="block">Electron</span>
                        <span className="block text-xs">using AI</span>
                      </Badge>
                      <Badge className="bg-teal-600 hover:bg-teal-700">Node.js</Badge>
                    </div>
                  </div>
                  
                  <div className="skill-card">
                    <Brain className="h-8 w-8 text-purple-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2">AI/ML</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-600 hover:bg-purple-700">AI/ML</Badge>
                      <Badge className="bg-purple-600 hover:bg-purple-700">Prompt Engineering</Badge>
                      <Badge className="bg-purple-600 hover:bg-purple-700">Data Analysis</Badge>
                    </div>
                  </div>
                  
                  <div className="skill-card">
                    <Network className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="text-lg font-semibold mb-2">Network Security</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700">TCP/IP</Badge>
                      <Badge className="bg-blue-600 hover:bg-blue-700">Security</Badge>
                      <Badge className="bg-blue-600 hover:bg-blue-700">Automation</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="industry-skill-card">
                    <div className="flex items-center gap-3 mb-2">
                      <Network className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold">Network Analysis Tools</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">Wireshark, Tcpdump, Nmap for network monitoring and analysis</p>
                    <div className="supply-chain-animation"></div>
                  </div>
                  
                  <div className="industry-skill-card">
                    <div className="flex items-center gap-3 mb-2">
                      <Server className="h-6 w-6 text-teal-600" />
                      <h3 className="text-lg font-semibold">Security Testing</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">OpenVAS, Snort for vulnerability assessment and intrusion detection</p>
                    <div className="manufacturing-animation"></div>
                  </div>
                  
                  <div className="industry-skill-card">
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu className="h-6 w-6 text-purple-600" />
                      <h3 className="text-lg font-semibold">Development Tools</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">Git, Replit for version control and development</p>
                    <div className="product-dev-animation"></div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="soft" className="mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="soft-skill-card">
                    <h3 className="text-xl font-semibold mb-1">Leadership & Event Management</h3>
                    <p className="text-muted-foreground">Led IoT Club as Event Management Lead with strong organizational skills</p>
                    <div className="team-animation"></div>
                  </div>
                  
                  <div className="soft-skill-card">
                    <h3 className="text-xl font-semibold mb-1">Problem-Solving</h3>
                    <p className="text-muted-foreground">Analytical approach to complex security and AI challenges</p>
                    <div className="problem-solving-animation"></div>
                  </div>
                  
                  <div className="soft-skill-card">
                    <h3 className="text-xl font-semibold mb-1">Adaptability</h3>
                    <p className="text-muted-foreground">Quick learner bridging AI/ML with cybersecurity domains</p>
                    <div className="adaptability-animation"></div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
