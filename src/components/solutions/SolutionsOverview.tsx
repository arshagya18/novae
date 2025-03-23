
import { MapPin, BarChart3, Zap, Smartphone } from 'lucide-react';
import SolutionCard from './SolutionCard';

const SolutionsOverview = () => {
  const solutions = [
    {
      id: 'location',
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: 'Location-Based Targeting',
      description: 'Our GPS-enabled displays allow you to trigger ads based on precise location data, ensuring your message reaches the right audience at the right place.',
      features: [
        'Geo-fencing capabilities around specific neighborhoods or venues',
        'Proximity targeting near points of interest or competitor locations',
        'Route optimization for maximum visibility along high-traffic corridors',
        'Dynamic content adaptation based on location context'
      ],
      color: 'from-novae-purple to-novae-blue'
    },
    {
      id: 'dynamic',
      icon: <Zap className="h-10 w-10 text-white" />,
      title: 'Dynamic Content Delivery',
      description: 'Deliver different messages based on time of day, weather conditions, or current events to ensure maximum relevance and engagement.',
      features: [
        'Real-time content updates from a central dashboard',
        'Scheduled campaigns based on time of day or day of week',
        'Weather-triggered content variations',
        'Integration with live data feeds for contextual relevance'
      ],
      color: 'from-novae-blue to-novae-teal'
    },
    {
      id: 'mobile',
      icon: <Smartphone className="h-10 w-10 text-white" />,
      title: 'Mobile Integration',
      description: 'Connect your outdoor advertising with mobile experiences through QR codes, NFC, or other interactive elements that drive engagement.',
      features: [
        'Dynamic QR codes for trackable conversions',
        'Social media integration for amplified reach',
        'Mobile app deep linking capabilities',
        'Audience retargeting across digital channels'
      ],
      color: 'from-novae-teal to-novae-green'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics to measure impressions, engagement, and campaign effectiveness with data-driven insights.',
      features: [
        'Real-time impression tracking and reporting',
        'Audience demographic analysis',
        'Conversion attribution modeling',
        'Competitive benchmark reporting'
      ],
      color: 'from-novae-purple to-novae-teal'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-novae-purple/10 text-novae-purple text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
            Our Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-novae-purple mb-6">
            Comprehensive Advertising Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform combines hardware, software, and analytics to deliver a complete
            solution for modern outdoor advertising campaigns.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id}
              {...solution}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
