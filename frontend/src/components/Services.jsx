import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, ArrowRight, Home, Warehouse, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ApiService from '../services/api';

const Services = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [services, setServices] = useState([
    { 
      id: 1, 
      title: 'House Shifting', 
      description: 'Fast, safe, and efficient home relocation across Maharashtra.', 
      features: ['Packing & Shifting', 'Safe furniture handling', 'Experienced moving crew'] 
    },
    { 
      id: 2, 
      title: 'Industrial Goods Transport', 
      description: 'Specialized transport for heavy machinery and commercial cargo.', 
      features: ['Same-day pickup', 'Trained logistics team'] 
    },
    { 
      id: 3, 
      title: 'All-Purpose Shifting', 
      description: 'Versatile solutions for businesses and individuals.', 
      features: ['Flexible delivery options', 'Multi-city coverage'] 
    },
    { 
      id: 4, 
      title: 'Warehousing', 
      description: 'Secure storage solutions for your goods and inventory.', 
      features: ['24/7 security', 'Climate-controlled options'] 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Icon mapping
  const getIcon = (title) => {
    const iconMap = {
      'House Shifting': <Home className="w-14 h-14" />,
      'Industrial Goods Transport': <Truck className="w-14 h-14" />,
      'All-Purpose Shifting': <Package className="w-14 h-14" />,
      'Warehousing': <Warehouse className="w-14 h-14" />
    };
    
    return iconMap[title] || <Package className="w-14 h-14" />;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    }),
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Feature animation variants
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1 + 0.3, 
        duration: 0.3 
      }
    })
  };

  return (
    <div 
      ref={servicesRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="services"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-yellow-500/20">Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="inline-block">Transport <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400">Solutions</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={servicesInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
              ></motion.span>
            </span></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Complete transportation solutions — from personal moves to industrial logistics.</p>
        </motion.div>
        
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 mb-8 bg-red-100/80 dark:bg-red-900/30 p-4 rounded-lg">
            <p className="font-medium">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              custom={index}
              initial="hidden"
              animate={servicesInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full"
            >
              <div className="bg-white dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg h-full border border-gray-100 dark:border-gray-700 flex flex-col group relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-400 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
                
                <div className={`text-yellow-500 dark:text-yellow-400 mb-6 p-4 rounded-2xl inline-flex justify-center items-center bg-yellow-50 dark:bg-yellow-900/20 transition-all duration-500 ${hoveredCard === service.id ? 'scale-110 rotate-3' : ''}`}>
                  {getIcon(service.title)}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                
                {service.features && (
                  <ul className="mt-auto space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        custom={idx} 
                        variants={featureVariants}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-5 h-5" />
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                )}
                
                <motion.button 
                  className="mt-auto inline-flex items-center justify-center text-yellow-500 dark:text-yellow-400 font-medium hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors py-2"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 