
import { Card, CardContent } from '@/components/ui/card';
import { Award, Check } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-8 md:py-12 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover-card card-gradient animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold">Salesforce</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Certified AI Associate</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover-card card-gradient animate-fade-in" style={{ animationDelay: '150ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold">Security Blue Team</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Introduction to Network Analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover-card card-gradient animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold">Networkzsystem</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Diploma in Network Administration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover-card card-gradient animate-fade-in" style={{ animationDelay: '450ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold">Cisco Networking Academy</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Networking Basics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover-card card-gradient animate-fade-in" style={{ animationDelay: '600ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold">University of Michigan</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Applied Machine Learning in Python (Coursera)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
