
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Solutions from '@/components/Solutions';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Stats />
        <Solutions />
        
        {/* Contact section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="bg-novae-teal/10 text-novae-teal text-sm font-medium px-4 py-1 rounded-full inline-block mb-4">
                Get Started
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-novae-blue mb-4">
                Ready to Transform Your Advertising?
              </h2>
              <p className="text-novae-gray text-lg">
                Contact us today to discuss how our GPS-enabled LED taxi-top advertising 
                can help your brand reach its target audience effectively.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-novae-teal/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-novae-blue/5 rounded-full blur-3xl -z-10"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
