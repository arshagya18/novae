
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 shadow-md backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo with new gradient style */}
          <Link 
            to="/" 
            className={`text-2xl font-bold flex items-center transition-all duration-500 ${
              isScrolled ? 'transform scale-90' : ''
            }`}
          >
            {isScrolled ? (
              <span className="bg-clip-text text-transparent bg-main-gradient font-display tracking-tight text-3xl">
                n
              </span>
            ) : (
              <span className="bg-clip-text text-transparent bg-main-gradient font-display tracking-tight text-3xl">
                novae
                <span className="text-novae-blue">.</span>
              </span>
            )}
          </Link>

          {/* Desktop Navigation - always visible */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`link-underline font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-novae-blue'
                    : 'text-novae-purple hover:text-novae-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2 bg-gradient-to-r from-novae-purple to-novae-teal text-white rounded-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-novae-purple focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'bg-novae-purple/10 text-novae-purple'
                    : 'text-novae-purple hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="py-2 px-4 bg-gradient-to-r from-novae-purple to-novae-teal text-white rounded-md text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
