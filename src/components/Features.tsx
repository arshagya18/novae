
import { useState, useEffect, useRef } from 'react';
import { MapPin, BarChart3, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8 text-novae-teal" />,
    title: 'GPS Precision Targeting',
    description: 'Display your ads exactly where your audience is, with location-based triggering for maximum relevance.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-novae-teal" />,
    title: 'Real-Time Analytics',
    description: 'Measure impressions, engagement, and effectiveness with comprehensive reporting tools.'
  },
  {
    icon: <Zap className="h-8 w-8 text-novae-teal" />,
    title: 'Dynamic Content',
    description: 'Update your advertisements in real-time based on time, location, weather, or current events.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-novae-teal" />,
    title: 'Interactive Experience',
    description: 'Create engaging, interactive campaigns that connect with your audience on a deeper level.'
  }
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start revealing items with a delay between each
          const reveal = () => {
            setVisibleItems((current) => {
              const nextIndex = current.length;
              if (nextIndex < features.length) {
                return [...current, nextIndex];
              }
              return current;
            });
          };

          // Reveal the first item immediately
          reveal();
          
          // Reveal subsequent items with delays
          for (let i = 1; i < features.length; i++) {
            setTimeout(reveal, i * 200);
          }
          
          // Stop observing once we've started the animation
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-novae-teal/10 text-novae-teal text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
            Why Choose Novae
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-novae-blue mb-4">
            Smart Technology for Smarter Advertising
          </h2>
          <p className="text-novae-gray text-lg">
            Our cutting-edge LED taxi-top displays combine precision targeting with dynamic content delivery, 
            creating a powerful advertising medium that reaches audiences where they are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 
                ${visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-novae-teal/10 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-novae-blue mb-2">{feature.title}</h3>
              <p className="text-novae-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-novae-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-novae-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;
