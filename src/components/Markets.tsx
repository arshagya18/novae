
import { useRef, useState, useEffect } from 'react';

const markets = [
  'New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Miami',
  'Seattle', 'Boston', 'Washington DC', 'Dallas', 'Houston',
  'Atlanta', 'Denver', 'Las Vegas', 'Philadelphia', 'Phoenix'
];

const Markets = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section bg-gradient-to-br from-black to-novae-purple/30 relative overflow-hidden py-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-novae-coral/10 text-novae-coral text-sm font-medium px-4 py-1 rounded-full mb-4">
            COVERAGE
          </div>
          <h2 className="text-white mb-8">
            NOVAE MARKETS
          </h2>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 ${isVisible ? 'stagger-fade-in' : 'opacity-0'}`}>
            {markets.map((market, index) => (
              <div 
                key={index} 
                className="py-3 px-4 glass text-white/90 rounded-lg hover:bg-white/10 transition-colors"
              >
                {market}
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <p className="text-white/70 inline-block">
              And rapidly expanding to more cities across North America
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
