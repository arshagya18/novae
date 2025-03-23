
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Lightbulb, BarChart3 } from 'lucide-react';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-novae-purple" />,
      name: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in outdoor advertising technology."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-novae-blue" />,
      name: "Accountability",
      description: "We're committed to delivering measurable results for our clients and partners."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-novae-teal" />,
      name: "Quality",
      description: "We maintain the highest standards in our displays, technology, and service."
    },
    {
      icon: <Users className="h-6 w-6 text-novae-green" />,
      name: "Sustainability",
      description: "We're building eco-friendly advertising solutions for a greener future."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-novae-purple to-novae-green text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Novae</h1>
              <p className="text-xl text-white/80">
                Revolutionizing outdoor advertising with location-based,
                data-driven digital displays on the move.
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-full h-full bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-novae-purple mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Novae began with a simple observation: traditional outdoor advertising lacked the
                  precision, flexibility, and measurability that modern marketers demand.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, we set out to transform the industry by developing GPS-enabled
                  LED displays for taxis that could deliver the right message, to the right audience,
                  at the right time and place.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be at the forefront of dynamic outdoor advertising,
                  helping brands connect with their audiences in meaningful, measurable ways.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-novae-blue mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To empower brands with innovative, location-intelligent advertising solutions
                    that create meaningful connections with audiences on the move.
                  </p>
                  <h3 className="text-2xl font-bold text-novae-teal mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the global leader in smart, sustainable outdoor advertising that
                    enhances urban environments while delivering exceptional results for advertisers.
                  </p>
                </div>
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-r from-novae-purple/20 to-novae-teal/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-novae-purple mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do at Novae, from product development
                to customer relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{value.name}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-novae-purple mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the talented individuals driving innovation and excellence at Novae.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gradient-to-r from-novae-purple/20 to-novae-teal/20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-2xl font-bold text-novae-purple group-hover:scale-110 transition-transform">JD</div>
                </div>
                <h3 className="text-xl font-bold text-novae-purple">Devi Katiyar</h3>
                <p className="text-novae-blue mb-2">CEO & Founder</p>

              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gradient-to-r from-novae-purple/20 to-novae-teal/20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-2xl font-bold text-novae-blue group-hover:scale-110 transition-transform">JS</div>
                </div>
                <h3 className="text-xl font-bold text-novae-purple">Devi Katiyar</h3>
                <p className="text-novae-blue mb-2">CTO</p>

              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center group hover:shadow-md transition-all">
                <div className="w-24 h-24 bg-gradient-to-r from-novae-purple/20 to-novae-teal/20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-2xl font-bold text-novae-teal group-hover:scale-110 transition-transform">DW</div>
                </div>
                <h3 className="text-xl font-bold text-novae-purple">Devi Katiyar</h3>
                <p className="text-novae-blue mb-2">Head of Partnerships</p>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
