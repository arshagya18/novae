
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest('.mobile-menu') && 
          !(e.target as Element).closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'py-4 backdrop-blur-xl bg-black/80 border-b border-white/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="/lovable-uploads/78bc4279-7644-409c-a546-9f0eec85df5f.png" 
              alt="Novae Logo" 
              className="h-8 md:h-10" 
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className={`hamburger z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="mobile-menu w-full max-w-lg stagger-fade-in">
            <div className="text-center mb-12">
              <p className="text-novae-coral uppercase tracking-widest text-sm mb-2">NAVIGATION</p>
              <div className="w-12 h-1 bg-coral-gradient mx-auto rounded-full"></div>
            </div>
            
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <Link 
                  to="/"
                  className="text-3xl font-bold hover:text-novae-coral transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-3xl font-bold hover:text-novae-coral transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions"
                  className="text-3xl font-bold hover:text-novae-coral transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SOLUTIONS
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="text-3xl font-bold hover:text-novae-coral transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-3xl font-bold hover:text-novae-coral transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            
            <div className="mt-16">
              <Link 
                to="/contact" 
                className="btn btn-primary inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
