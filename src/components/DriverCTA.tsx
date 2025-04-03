
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const DriverCTA = () => {
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
      className="section py-20 bg-black relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1577694521236-af7d3fb2e68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          alt="Taxi driver" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-novae-coral/20 to-novae-purple/20 opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full">
              PARTNER WITH US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide leading-tight">
              Drivers: Earn More with Novae
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Maximize your income with minimal effort. Our lightweight, aerodynamic displays automatically show the right ads at the right time, generating extra revenue during your regular drives.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center text-white">
                <span className="text-novae-coral mr-3">✓</span>
                <span>Quick installation, no technical knowledge required</span>
              </li>
              <li className="flex items-center text-white">
                <span className="text-novae-coral mr-3">✓</span>
                <span>Passive income - earn while doing your regular routes</span>
              </li>
              <li className="flex items-center text-white">
                <span className="text-novae-coral mr-3">✓</span>
                <span>Weekly payments directly to your account</span>
              </li>
              <li className="flex items-center text-white">
                <span className="text-novae-coral mr-3">✓</span>
                <span>Dedicated support team for drivers</span>
              </li>
            </ul>
            
            <div className="pt-6">
              <Link
                to="/contact"
                className="btn btn-primary inline-flex items-center"
              >
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverCTA;
