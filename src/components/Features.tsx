
import { useState, useEffect, useRef } from 'react';
import { MapPin, BarChart3, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'GPS Precision',
    description: 'Location-based triggering for maximum relevance'
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Real-Time Analytics',
    description: 'Measure impressions and effectiveness instantly'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Dynamic Content',
    description: 'Update ads based on time, location, or events'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Integration',
    description: 'Connect with audiences across platforms'
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
    <section ref={sectionRef} className="section bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-novae-coral/10 text-novae-coral text-sm font-medium px-4 py-1 rounded-full mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-black mb-4">
            WHY NOVAE
          </h2>
          <p className="text-black/70">
            Our cutting-edge taxi-top displays combine precision targeting with dynamic content delivery, 
            creating a powerful advertising medium that reaches audiences where they are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center 
                ${visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-coral-gradient p-5 rounded-full inline-flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-novae-coral/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-novae-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;
