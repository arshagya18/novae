
import { useRef, useEffect, useState } from 'react';

const Welcome = () => {
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
      id="welcome-section"
      ref={sectionRef} 
      className="section bg-white text-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block bg-novae-coral/10 text-novae-coral text-sm font-medium px-4 py-1 rounded-full mb-4">
              WELCOME TO NOVAE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 normal-case">
              Revolutionizing Outdoor Advertising
            </h2>
            <p className="text-black/80 mb-6">
              Novae combines cutting-edge technology with strategic location-based targeting to transform the way brands connect with audiences. Our GPS-enabled taxi-top displays deliver dynamic, contextually relevant content that reaches the right people at the right time and place.
            </p>
            <p className="text-black/80">
              With real-time analytics and flexible campaign management, we're redefining what's possible in outdoor advertising—creating memorable, measurable brand experiences that drive real results.
            </p>
          </div>
          
          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Taxi with advertising display" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-novae-coral/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
