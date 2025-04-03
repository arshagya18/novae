
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollValue = window.scrollY;
      const opacity = Math.max(1 - scrollValue / 700, 0);
      const translateY = scrollValue * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="/Taxi.gif" 
          alt="City background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full border border-novae-coral/20 opacity-60 floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full border border-novae-purple/30 opacity-40 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full border border-novae-peach/20 opacity-50 floating" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-novae-coral/30 opacity-80 floating" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-6 h-6 rounded-full bg-novae-peach/30 opacity-70 floating" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 rounded-full bg-novae-purple/30 opacity-90 floating" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Content container */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-10 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-6 ${isVisible ? 'stagger-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight uppercase tracking-wide">
              NOVAE ON THE GO
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              GPS-enabled taxi-top displays that deliver targeted advertising exactly when and where it matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Link
                to="/solutions"
                className="btn btn-primary"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Hero;
