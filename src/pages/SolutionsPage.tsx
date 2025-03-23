
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, BarChart3, Zap, Smartphone, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      id: 'location',
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: 'Location-Based Targeting',
      description: 'Our GPS-enabled displays allow you to trigger ads based on precise location data, ensuring your message reaches the right audience at the right place.',
      features: [
        'Geo-fencing capabilities around specific neighborhoods or venues',
        'Proximity targeting near points of interest or competitor locations',
        'Route optimization for maximum visibility along high-traffic corridors',
        'Dynamic content adaptation based on location context'
      ],
      color: 'from-novae-purple to-novae-blue'
    },
    {
      id: 'dynamic',
      icon: <Zap className="h-10 w-10 text-white" />,
      title: 'Dynamic Content Delivery',
      description: 'Deliver different messages based on time of day, weather conditions, or current events to ensure maximum relevance and engagement.',
      features: [
        'Real-time content updates from a central dashboard',
        'Scheduled campaigns based on time of day or day of week',
        'Weather-triggered content variations',
        'Integration with live data feeds for contextual relevance'
      ],
      color: 'from-novae-blue to-novae-teal'
    },
    {
      id: 'mobile',
      icon: <Smartphone className="h-10 w-10 text-white" />,
      title: 'Mobile Integration',
      description: 'Connect your outdoor advertising with mobile experiences through QR codes, NFC, or other interactive elements that drive engagement.',
      features: [
        'Dynamic QR codes for trackable conversions',
        'Social media integration for amplified reach',
        'Mobile app deep linking capabilities',
        'Audience retargeting across digital channels'
      ],
      color: 'from-novae-teal to-novae-green'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: 'Performance Analytics',
      description: 'Comprehensive reporting and analytics to measure impressions, engagement, and campaign effectiveness with data-driven insights.',
      features: [
        'Real-time impression tracking and reporting',
        'Audience demographic analysis',
        'Conversion attribution modeling',
        'Competitive benchmark reporting'
      ],
      color: 'from-novae-purple to-novae-teal'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-novae-purple via-novae-blue to-novae-teal">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium mb-6">
                Our Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Advertising Technology for Maximum Impact
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Our suite of GPS-enabled LED display solutions combines cutting-edge technology with 
                data-driven insights to transform your outdoor advertising strategy.
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

        {/* Solutions Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="bg-novae-purple/10 text-novae-purple text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                Our Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-novae-purple mb-6">
                Comprehensive Advertising Solutions
              </h2>
              <p className="text-gray-600 text-lg">
                Our platform combines hardware, software, and analytics to deliver a complete
                solution for modern outdoor advertising campaigns.
              </p>
            </div>

            <div className="space-y-20">
              {solutions.map((solution, index) => (
                <div key={solution.id} id={solution.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className={`inline-block bg-gradient-to-br ${solution.color} p-3 rounded-lg mb-6`}>
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-novae-purple mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6">
                        {solution.description}
                      </p>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-novae-teal flex-shrink-0 mr-3 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <div className={`aspect-video bg-gradient-to-br ${solution.color} p-1`}>
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                            {/* This would be an image in production */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
                              <div className="text-center p-6">
                                <h3 className="text-xl font-bold text-novae-purple mb-3">{solution.title}</h3>
                                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${solution.color} rounded-full grid place-items-center`}>
                                  {solution.icon}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-novae-purple to-novae-teal rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12 text-white relative">
                <div className="max-w-3xl relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Advertising Strategy?
                  </h2>
                  <p className="text-white/80 text-lg mb-8">
                    Contact our team today to discover how our GPS-enabled LED taxi-top displays 
                    can help your brand connect with your audience more effectively.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-white text-novae-purple px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Get Started Today <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
