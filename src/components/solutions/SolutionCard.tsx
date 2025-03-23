
import { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export interface SolutionCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  isReversed?: boolean;
}

const SolutionCard = ({ id, icon, title, description, features, color, isReversed = false }: SolutionCardProps) => {
  return (
    <div id={id} className="scroll-mt-20">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isReversed ? 'lg:grid-flow-dense' : ''
      }`}>
        <div className={isReversed ? 'lg:col-start-2' : ''}>
          <div className={`inline-block bg-gradient-to-br ${color} p-3 rounded-lg mb-6`}>
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-novae-purple mb-4">
            {title}
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            {description}
          </p>
          <ul className="space-y-3">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-novae-teal flex-shrink-0 mr-3 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={isReversed ? 'lg:col-start-1' : ''}>
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <div className={`aspect-video bg-gradient-to-br ${color} p-1`}>
              <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                {/* This would be an image in production */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold text-novae-purple mb-3">{title}</h3>
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${color} rounded-full grid place-items-center`}>
                      {icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
