
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-novae-purple to-novae-green overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block bg-novae-teal/10 border border-novae-teal/20 backdrop-blur-sm rounded-full px-4 py-1 text-white text-sm font-medium">
              GPS-Enabled Taxi-Top Advertising
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Revolutionize Your <span className="text-white">Brand Reach</span> with Smart Advertising
            </h1>
            <p className="text-lg md:text-xl text-white max-w-xl">
              Target your audience in real time with interactive taxi-top ads. Dynamic content that connects with customers when and where it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/solutions" 
                className="px-6 py-3 bg-novae-teal text-white rounded-md font-medium flex items-center justify-center hover:shadow-lg transition-all hover:scale-105"
              >
                Explore Solutions <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-md font-medium border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Image replaced with animated GIF */}
          <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
                <img 
                  src="/taxi-ad-animation.gif" 
                  alt="Animated taxi with LED advertising display in a city" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-novae-purple/80 via-transparent to-novae-green/40"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg animate-float">
                  <h3 className="text-white text-xl font-bold">Smart Screens, Smarter Data</h3>
                  <p className="text-white/80 mt-2">GPS-targeted advertising that reaches the right audience at the right place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          className="w-full h-24 text-white fill-current" 
          viewBox="0 0 1440 74" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1440,42.7L1440,74L0,74Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
