
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      name: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in outdoor advertising technology."
    },
    {
      name: "Accountability",
      description: "We're committed to delivering measurable results for our clients and partners."
    },
    {
      name: "Quality",
      description: "We maintain the highest standards in our displays, technology, and service."
    },
    {
      name: "Sustainability",
      description: "We're building eco-friendly advertising solutions for a greener future."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-novae-blue mb-6">About Novae</h1>
              <p className="text-xl text-novae-gray">
                Revolutionizing outdoor advertising with location-based, 
                data-driven digital displays on the move.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-novae-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-novae-blue mb-6">Our Story</h2>
                <p className="text-novae-gray mb-4">
                  Novae began with a simple observation: traditional outdoor advertising lacked the
                  precision, flexibility, and measurability that modern marketers demand.
                </p>
                <p className="text-novae-gray mb-4">
                  Founded in 2023, we set out to transform the industry by developing GPS-enabled 
                  LED displays for taxis that could deliver the right message, to the right audience, 
                  at the right time and place.
                </p>
                <p className="text-novae-gray">
                  Today, we're proud to be at the forefront of dynamic outdoor advertising, 
                  helping brands connect with their audiences in meaningful, measurable ways.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-novae-blue mb-4">Our Mission</h3>
                  <p className="text-novae-gray mb-6">
                    To empower brands with innovative, location-intelligent advertising solutions 
                    that create meaningful connections with audiences on the move.
                  </p>
                  <h3 className="text-2xl font-bold text-novae-blue mb-4">Our Vision</h3>
                  <p className="text-novae-gray">
                    To become the global leader in smart, sustainable outdoor advertising that 
                    enhances urban environments while delivering exceptional results for advertisers.
                  </p>
                </div>
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-novae-teal/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-novae-blue mb-4">Our Values</h2>
              <p className="text-novae-gray max-w-2xl mx-auto">
                These core principles guide everything we do at Novae, from product development 
                to customer relationships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.name} className="bg-novae-light p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-novae-blue mb-3">{value.name}</h3>
                  <p className="text-novae-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-novae-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-novae-blue mb-4">Our Team</h2>
              <p className="text-novae-gray max-w-2xl mx-auto">
                Meet the talented individuals driving innovation and excellence at Novae.
              </p>
            </div>

            {/* Team grid would go here */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for team members */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-novae-teal/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-novae-blue">John Doe</h3>
                <p className="text-novae-teal mb-2">CEO & Founder</p>
                <p className="text-novae-gray">Visionary leader with 15+ years in advertising technology.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-novae-teal/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-novae-blue">Jane Smith</h3>
                <p className="text-novae-teal mb-2">CTO</p>
                <p className="text-novae-gray">Engineering expert specializing in GPS and LED technologies.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-novae-teal/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-novae-blue">David Wilson</h3>
                <p className="text-novae-teal mb-2">Head of Partnerships</p>
                <p className="text-novae-gray">Building strategic relationships with transportation companies.</p>
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
