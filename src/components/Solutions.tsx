
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Presentation, AreaChart } from 'lucide-react';

const solutions = [
  {
    icon: <Target className="h-10 w-10" />,
    title: 'Location-Based Targeting',
    description: 'Display your ads exactly where your audience is, triggered by precise GPS coordinates.',
    color: 'from-blue-500 to-indigo-600',
    link: '/solutions#location'
  },
  {
    icon: <Presentation className="h-10 w-10" />,
    title: 'Dynamic Content Delivery',
    description: 'Change your messaging based on time of day, location, events, or other triggers.',
    color: 'from-teal-500 to-green-500',
    link: '/solutions#dynamic'
  },
  {
    icon: <AreaChart className="h-10 w-10" />,
    title: 'Performance Analytics',
    description: 'Comprehensive metrics to measure impressions, engagement, and campaign effectiveness.',
    color: 'from-orange-500 to-red-500',
    link: '/solutions#analytics'
  }
];

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Change active solution every 5 seconds
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % solutions.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
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
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-novae-teal/10 text-novae-teal text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-novae-blue mb-4">
            Transforming Outdoor Advertising
          </h2>
          <p className="text-novae-gray text-lg">
            Our advanced LED displays, powered by GPS technology, create relevant, 
            engaging, and measurable advertising experiences for your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Solution tabs */}
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <button
                key={index}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex gap-4 items-start ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg border-l-4 border-novae-teal' 
                    : 'bg-white/50 hover:bg-white hover:shadow'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${solution.color} text-white`}>
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-novae-blue mb-1">{solution.title}</h3>
                  <p className={`transition-all duration-300 ${
                    activeIndex === index ? 'text-novae-gray h-auto opacity-100' : 'h-0 opacity-0 lg:h-auto lg:opacity-100'
                  }`}>
                    {solution.description}
                  </p>
                </div>
              </button>
            ))}

            <div className="pt-4">
              <Link 
                to="/solutions" 
                className="inline-flex items-center text-novae-teal font-medium hover:underline"
              >
                Explore all solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right side: Interactive display */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-t-xl p-2">
                <div className="bg-black h-full w-full rounded-lg flex items-center justify-center overflow-hidden relative">
                  {/* Map background */}
                  <div className="absolute inset-0 opacity-50 bg-gray-900">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-6">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-gray-800"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content based on active solution */}
                  <div className="relative z-10 p-6 text-center">
                    <div 
                      className={`transform transition-all duration-700 ${
                        activeIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'
                      }`}
                    >
                      <div className="inline-block bg-novae-teal/20 text-novae-teal text-sm rounded-full px-3 py-1 mb-4">
                        Location Intelligence
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Geo-Targeted Advertising</h3>
                      <div className="flex justify-center mt-4">
                        <div className="animate-pulse h-16 w-16 rounded-full bg-novae-teal/30 flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-novae-teal/60 flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full bg-novae-teal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`transform transition-all duration-700 ${
                        activeIndex === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'
                      }`}
                    >
                      <div className="inline-block bg-green-500/20 text-green-400 text-sm rounded-full px-3 py-1 mb-4">
                        Dynamic Content
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Time-Based Promotions</h3>
                      <div className="flex justify-center gap-4 mt-4">
                        <div className="h-16 w-24 bg-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">Morning</span>
                        </div>
                        <div className="h-16 w-24 bg-white/10 rounded-lg flex items-center justify-center border-2 border-green-400">
                          <span className="text-white font-bold">Afternoon</span>
                        </div>
                        <div className="h-16 w-24 bg-white/10 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">Evening</span>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`transform transition-all duration-700 ${
                        activeIndex === 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 absolute'
                      }`}
                    >
                      <div className="inline-block bg-orange-500/20 text-orange-400 text-sm rounded-full px-3 py-1 mb-4">
                        Analytics Dashboard
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Campaign Performance</h3>
                      <div className="flex justify-center mt-4">
                        <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                          {[65, 82, 45, 90, 35, 62].map((value, i) => (
                            <div key={i} className="bg-white/10 rounded-lg p-2 h-16 flex flex-col justify-between">
                              <div className="w-full bg-white/20 h-10 rounded-sm overflow-hidden">
                                <div 
                                  className="bg-orange-500 h-full transition-all duration-700" 
                                  style={{ width: `${value}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-white/70 text-right">{value}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-novae-blue">GPS-Enabled Display Network</h4>
                  <p className="text-sm text-novae-gray">Intelligent advertising screens</p>
                </div>
                <Link 
                  to="/solutions" 
                  className="px-4 py-2 bg-novae-blue text-white rounded-md text-sm font-medium hover:bg-novae-blue/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-novae-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-novae-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Solutions;
