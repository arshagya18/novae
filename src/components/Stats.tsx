
import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  duration?: number;
  delay?: number;
}

const StatItem = ({ value, label, duration = 2000, delay = 0 }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const startCounter = () => {
      const start = Date.now();
      startTimeRef.current = start;
      
      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - (startTimeRef.current || 0);
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        
        const currentValue = Math.floor(easedProgress * value);
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          counterRef.current = setTimeout(updateCounter, 16); // ~60fps
        }
      };
      
      updateCounter();
    };

    const timerDelay = setTimeout(startCounter, delay);
    
    return () => {
      if (counterRef.current) clearTimeout(counterRef.current);
      clearTimeout(timerDelay);
    };
  }, [value, duration, delay]);

  // Format numbers with commas
  const formattedValue = displayValue.toLocaleString();

  return (
    <div className="text-center px-4">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
        {formattedValue}
      </div>
      <div className="text-white/80 text-lg">{label}</div>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
      className="py-20 bg-gradient-to-r from-novae-blue to-novae-blue/90 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-novae-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-novae-teal/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {isVisible && (
            <>
              <StatItem value={100} label="Total Clients" delay={200} />
              <StatItem value={277389025} label="Total Adplays" delay={400} />
              <StatItem value={770099} label="Total Display Hours" delay={600} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
