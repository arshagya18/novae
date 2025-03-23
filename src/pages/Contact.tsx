
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-novae-purple to-novae-green overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-white/80">
                Have questions or ready to get started? We're here to help you navigate
                the world of smart advertising.
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

        {/* Contact Information and Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-novae-purple mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-novae-purple/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-novae-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Innovation Street<br />
                        Tech District<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-novae-blue/10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-novae-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-novae-teal/10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-novae-teal" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@novae.com<br />
                        support@novae.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-novae-green/10 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-novae-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links would go here */}
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-novae-purple mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-novae-purple mb-4">Find Us</h2>
              <p className="text-gray-600">
                Visit our headquarters in the heart of the tech district
              </p>
            </div>
            
            {/* Map placeholder */}
            <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Interactive Map Would Be Embedded Here
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
