import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 mr-3 overflow-hidden">
                <img 
                  src="/images/Dark%20theme%20logo.png"
                  onError={(e) => {
                    // Try different paths if the first one fails
                    e.target.onerror = null;
                    if (e.target.src.includes('/images/')) {
                      e.target.src = "./images/Dark%20theme%20logo.png";
                    } else {
                      // Final fallback
                      e.target.src = "../public/images/Dark%20theme%20logo.png";
                    }
                  }}
                  alt="Shiva Transport Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">Shiva Transport</h3>
            </div>
            <p className="mb-6 text-gray-300 max-w-xs">Maharashtra's most trusted transport partner since 2004.</p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="bg-gray-800 hover:bg-pink-600 transition-colors p-2 rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="bg-gray-800 hover:bg-blue-400 transition-colors p-2 rounded-full"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="bg-gray-800 hover:bg-blue-700 transition-colors p-2 rounded-full"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-yellow-500 inline-block mr-3"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "House Shifting", link: "#services" },
                { name: "Industrial Goods Transport", link: "#services" },
                { name: "All-Purpose Shifting", link: "#services" },
                { name: "Warehousing", link: "#services" }
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="flex items-center group text-gray-300 hover:text-yellow-400 transition-colors py-1"
                  >
                    <ArrowRight className="mr-2 h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-yellow-500 inline-block mr-3"></span>
              Contact Us
            </h3>
            <address className="not-italic space-y-4 text-gray-300">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-yellow-500 flex-shrink-0" size={18} />
                <span>123 Transport Nagar, Andheri East, Mumbai, Maharashtra 400069</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-yellow-500 flex-shrink-0" size={18} />
                <a href="tel:+911234567890" className="hover:text-yellow-400 transition-colors">+91 1234 567 890</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-yellow-500 flex-shrink-0" size={18} />
                <a href="mailto:info@shivatransport.com" className="hover:text-yellow-400 transition-colors">info@shivatransport.com</a>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 text-yellow-500 flex-shrink-0" size={18} />
                <span>24/7 Availability</span>
              </div>
            </address>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-yellow-500 inline-block mr-3"></span>
              Newsletter
            </h3>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                required
              />
              <button 
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {currentYear} Shiva Transport. All rights reserved.</p>
            <div className="mt-4 md:mt-0 pb-6 md:pb-4 w-full md:w-auto">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-end pr-20">
                <li><Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/sitemap" className="hover:text-yellow-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 