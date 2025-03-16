
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'LED Display Network', path: '/solutions#display' },
        { label: 'GPS Targeting', path: '/solutions#gps' },
        { label: 'Analytics Dashboard', path: '/solutions#analytics' },
        { label: 'Case Studies', path: '/solutions#cases' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQs', path: '/faqs' },
        { label: 'Support Center', path: '/support' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
      ],
    },
  ];

  return (
    <footer className="bg-novae-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold flex items-center">
                <span className="text-novae-teal mr-1">N</span>ovae
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Revolutionizing outdoor advertising with GPS-enabled LED taxi-top displays. 
              Targeted, dynamic, and measurable advertising that reaches your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-novae-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-novae-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-white/70 hover:text-novae-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/70 text-sm">
            © {currentYear} Novae Ads. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <Mail size={16} />
              <span>contact@novaeads.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
