
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About - increased logo size */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/78bc4279-7644-409c-a546-9f0eec85df5f.png" 
                alt="Novae Logo" 
                className="h-12" 
              />
            </Link>
            <p className="text-white/70 mb-6">
              Revolutionizing outdoor advertising with GPS-enabled, dynamic content delivery through taxi-top displays.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-novae-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-coral transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-coral transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-novae-coral transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-novae-coral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/70 hover:text-novae-coral transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-novae-coral transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-novae-coral transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/case-studies" className="text-white/70 hover:text-novae-coral transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-white/70 hover:text-novae-coral transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources/drivers" className="text-white/70 hover:text-novae-coral transition-colors">
                  For Drivers
                </Link>
              </li>
              <li>
                <Link to="/resources/privacy" className="text-white/70 hover:text-novae-coral transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/resources/terms" className="text-white/70 hover:text-novae-coral transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 text-novae-coral" />
                <span className="text-white/70">info@novae.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 text-novae-coral" />
                <span className="text-white/70">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-novae-coral" />
                <span className="text-white/70">123 Innovation Drive, Suite 456, Silicon Valley, CA 94086</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Novae. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/legal/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="text-white/50 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal/cookies" className="text-white/50 text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
