
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-novae-dark overflow-hidden">
      {/* Background pattern & effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-dark opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-novae-purple/10 to-novae-green/10" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-novae-purple/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-novae-green/20 blur-[120px]" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block neo-glass border border-novae-purple/30 rounded-full px-4 py-1 text-white/80 text-sm font-medium">
              <span className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-novae-neon-purple glow-sm" />
                GPS-Enabled Taxi-Top Advertising
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Revolutionize Your <span className="gradient-text glow-sm">Brand Reach</span> with Smart Advertising
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Target your audience in real time with interactive taxi-top ads. Dynamic content that connects with customers when and where it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/solutions"
                className="px-6 py-3 bg-gradient-to-r from-novae-purple to-novae-green text-white rounded-md font-medium flex items-center justify-center hover:shadow-lg transition-all hover:scale-105 animate-glow"
              >
                Explore Solutions <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 neo-glass border border-white/10 text-white rounded-md font-medium flex items-center justify-center hover:bg-white/10 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Animated display */}
          <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] rounded-lg overflow-hidden neo-glass border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md">
                <img
                  src="/Taxi.gif"
                  alt="Animated taxi with LED advertising display in a city"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-novae-purple/30 via-transparent to-novae-green/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="neo-glass p-4 rounded-lg animate-float backdrop-blur-lg">
                  <h3 className="text-white text-xl font-bold gradient-text">Smart Screens, Smarter Data</h3>
                  <p className="text-white/70 mt-2">GPS-targeted advertising that reaches the right audience at the right place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-novae-charcoal to-transparent"></div>
    </div>
  );
};

export default Hero;
