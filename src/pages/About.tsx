
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Clock, Globe, ChevronRight, Award, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what's possible in outdoor advertising.'
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Precision',
      description: 'Our GPS technology ensures your ads reach the right audience at the right time.'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients based on trust and results.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Data-Driven',
      description: 'Every decision and recommendation is backed by comprehensive analytics.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-novae-blue">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">
                About Novae Ads
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing Outdoor Advertising Through Technology
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                We're on a mission to transform how brands connect with their audience through 
                intelligent, data-driven, and location-aware advertising solutions.
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
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
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-novae-teal/10 text-novae-teal text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-novae-blue mb-6">
                  From Idea to Innovation: The Novae Journey
                </h2>
                <div className="space-y-4 text-novae-gray">
                  <p>
                    Founded in 2023, Novae Ads began with a simple observation: traditional outdoor advertising 
                    lacked the precision, flexibility, and measurability of digital channels.
                  </p>
                  <p>
                    Our team of advertising and technology experts came together to bridge this gap, developing 
                    a network of GPS-enabled LED displays that could deliver the right message to the right 
                    audience at exactly the right moment.
                  </p>
                  <p>
                    Today, Novae Ads is at the forefront of out-of-home advertising innovation, helping brands 
                    create meaningful connections with their audiences through intelligent, data-driven 
                    advertising solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-novae-teal mr-2" />
                      <h4 className="font-bold text-novae-blue">Founded</h4>
                    </div>
                    <p className="text-novae-gray">2023</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-novae-teal mr-2" />
                      <h4 className="font-bold text-novae-blue">Global Reach</h4>
                    </div>
                    <p className="text-novae-gray">10+ Cities</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-novae-blue to-novae-teal/70 p-1">
                    <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                      {/* This would be an image in production */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
                        <div className="text-center p-6">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-novae-teal/20 grid place-items-center">
                            <Award className="h-10 w-10 text-novae-teal" />
                          </div>
                          <h3 className="text-xl font-bold text-novae-blue">Our Mission</h3>
                          <p className="mt-2 text-novae-gray">
                            To revolutionize outdoor advertising by combining cutting-edge technology with 
                            data-driven insights, creating measurable and impactful campaigns for our clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-novae-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Our Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-white/80 text-lg">
                Our values shape every decision we make and guide how we interact with our clients, 
                partners, and the communities we serve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-colors"
                >
                  <div className="bg-gradient-to-br from-novae-teal to-novae-teal/70 p-3 rounded-lg inline-block mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-novae-blue px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Join Our Journey <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
