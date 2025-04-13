import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, Phone } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', current: true },
    { name: 'Services', href: '#services', current: false },
    { name: 'About Us', href: '#about', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleQuoteClick = () => {
    setIsOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-12 w-12 mr-3 overflow-hidden bg-white/30 dark:bg-transparent rounded-full">
                <img 
                  src={darkMode ? "/images/Dark%20theme%20logo.png" : "/images/Shiva%20Transport.png?v=1"}
                  onError={(e) => {
                    // Try different paths if the first one fails
                    e.target.onerror = null;
                    if (e.target.src.includes('/images/')) {
                      e.target.src = darkMode ? "./images/Dark%20theme%20logo.png" : "./images/Shiva%20Transport.png?v=1";
                    } else {
                      // Final fallback
                      e.target.src = darkMode ? "../public/images/Dark%20theme%20logo.png" : "../public/images/Shiva%20Transport.png?v=1";
                    }
                  }}
                  alt="Shiva Transport Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className={`font-bold text-xl ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                  Shiva Transport
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-medium hover:text-yellow-500 transition-colors ${
                  scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Quick Quote Button */}
            <motion.button
              onClick={handleQuoteClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-2 px-5 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Quick Quote</span>
            </motion.button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${scrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-800 dark:bg-gray-700'} shadow-md border border-gray-300 dark:border-gray-600`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            {/* Quick Quote Button (Mobile) */}
            <motion.button
              onClick={handleQuoteClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-1.5 px-3 rounded-lg shadow-lg hover:shadow-yellow-500/50 mr-2 text-sm"
            >
              <span>Quote</span>
            </motion.button>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-2 ${scrolled ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-800 dark:bg-gray-700'} shadow-md border border-gray-300 dark:border-gray-600`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-gray-900 dark:text-white font-medium py-2 hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Quick Quote (Full Width) */}
              <motion.button
                onClick={handleQuoteClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 px-4 rounded-lg shadow-lg w-full mt-2 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Get a Quick Quote</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 