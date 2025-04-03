
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Map, Clock } from 'lucide-react';

const solutions = [
  {
    icon: <Target className="h-10 w-10" />,
    title: 'LOCATION-BASED TARGETING',
    description: 'Display your ads exactly where your audience is, triggered by precise GPS coordinates to maximize engagement and relevance.',
    image: 'https://images.unsplash.com/photo-1492598669556-587935e51c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/solutions#location'
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'DYNAMIC CONTENT DELIVERY',
    description: 'Automatically adjust your messaging based on time of day, location, events, or other contextual triggers for maximum impact.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/solutions#dynamic'
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: 'COMPREHENSIVE ANALYTICS',
    description: 'Measure impressions, engagement, and campaign effectiveness with detailed metrics and reporting tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/solutions#analytics'
  },
  {
    icon: <Map className="h-10 w-10" />,
    title: 'CITY-WIDE COVERAGE',
    description: 'Leverage our extensive network of taxi-top displays to blanket targeted urban areas with your messaging.',
    image: 'https://images.unsplash.com/photo-1515923697633-5156bcfc0114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    link: '/solutions#coverage'
  }
];

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Check if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
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
    <section ref={sectionRef} className="section bg-black relative overflow-hidden py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-title">
          <div className="inline-block bg-novae-coral/10 text-novae-coral text-sm font-medium px-4 py-1 rounded-full mb-4">
            OUR SOLUTIONS
          </div>
          <h2 className="text-white mb-4">
            WHAT NOVAE OFFERS
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Our advanced LED displays, powered by GPS technology, create relevant, 
            engaging, and measurable advertising experiences for your audience.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-coral-gradient text-white">
                    {solution.icon}
                  </div>
                  <h3 className="font-bold text-white text-xl md:text-2xl">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-white/70 mb-6">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-novae-coral mr-2">•</span>
                    <span className="text-white/70">Real-time campaign adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-novae-coral mr-2">•</span>
                    <span className="text-white/70">Advanced audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-novae-coral mr-2">•</span>
                    <span className="text-white/70">Comprehensive performance metrics</span>
                  </li>
                </ul>
                
                <Link 
                  to={solution.link} 
                  className="inline-flex items-center text-novae-coral hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Image */}
              <div 
                className={`rounded-xl overflow-hidden shadow-2xl ${isInView ? 'animate-fade-in' : 'opacity-0'}`} 
                style={{ animationDelay: `${(index * 100) + 200}ms` }}
              >
                <div className="relative">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-novae-coral/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-novae-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default SolutionSection;
