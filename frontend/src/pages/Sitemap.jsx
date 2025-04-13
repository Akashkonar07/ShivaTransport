import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Sitemap = ({ darkMode, toggleDarkMode }) => {
  const linkGroups = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/", external: false },
        { name: "Services", url: "/#services", external: false },
        { name: "About Us", url: "/#about", external: false },
        { name: "Contact", url: "/#contact", external: false }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "House Shifting", url: "/#services", external: false },
        { name: "Industrial Goods Transport", url: "/#services", external: false },
        { name: "All-Purpose Shifting", url: "/#services", external: false },
        { name: "Warehousing", url: "/#services", external: false }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy", external: false },
        { name: "Terms of Service", url: "/terms", external: false },
        { name: "Sitemap", url: "/sitemap", external: false }
      ]
    },
    {
      title: "Social Media",
      links: [
        { name: "Facebook", url: "https://facebook.com", external: true },
        { name: "Instagram", url: "https://instagram.com", external: true },
        { name: "Twitter", url: "https://twitter.com", external: true },
        { name: "LinkedIn", url: "https://linkedin.com", external: true }
      ]
    }
  ];

  const containerVariants = {
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
    <>
      <SEO title="Sitemap - Shiva Transport" description="Sitemap for Shiva Transport website" />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:container lg:mx-auto min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Sitemap</h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {linkGroups.map((group, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                  <span className="w-6 h-1 bg-yellow-500 inline-block mr-3"></span>
                  {group.title}
                </h2>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="pl-3 border-l-2 border-gray-200 dark:border-gray-700">
                      {link.external ? (
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center group text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        >
                          <ChevronRight className="mr-2 h-4 w-4 text-yellow-500" />
                          {link.name}
                          <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
                        </a>
                      ) : (
                        <Link 
                          to={link.url} 
                          className="flex items-center group text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                        >
                          <ChevronRight className="mr-2 h-4 w-4 text-yellow-500" />
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </>
  );
};

export default Sitemap; 