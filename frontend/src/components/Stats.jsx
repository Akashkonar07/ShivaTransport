import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Truck, Clock, Globe, Users, CheckCircle } from 'lucide-react';
import ApiService from '../services/api';

const Stats = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [stats, setStats] = useState({
    deliveries: 0,
    cities: 0,
    onTimeRate: 0,
    customers: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getStats();
        setStats({
          deliveries: data.deliveries || 5000,
          onTimeRate: data.onTimeRate || 95,
          customers: data.customers || 1200
        });
        setError(null);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError('Failed to load stats. Using default values.');
        // Fallback to default values
        setStats({
          deliveries: 5000,
          onTimeRate: 95,
          customers: 1200
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);
  
  // CountUp animation for numbers
  const [count, setCount] = useState({
    deliveries: 0,
    onTimeRate: 0,
    customers: 0
  });
  
  useEffect(() => {
    if (statsInView && !loading) {
      const duration = 2500; // 2.5 seconds for a smoother effect
      const interval = 16; // approximately 60fps
      const steps = duration / interval;
      
      let currentStep = 0;
      
      const easeOutCubic = t => 1 - Math.pow(1 - t, 3); // Easing function for smoother animation
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = easeOutCubic(currentStep / steps);
        
        setCount({
          deliveries: Math.floor(progress * stats.deliveries),
          onTimeRate: Math.floor(progress * stats.onTimeRate),
          customers: Math.floor(progress * stats.customers)
        });
        
        if (currentStep >= steps) {
          setCount(stats);
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [statsInView, stats, loading]);

  const statItems = [
    { 
      icon: <Truck className="w-14 h-14 text-yellow-300" />, 
      stat: `${count.deliveries.toLocaleString()}+`, 
      label: 'Successful Deliveries',
      color: 'from-yellow-500 to-yellow-400',
      shadowColor: 'yellow-400/30',
      description: 'Goods delivered securely across Maharashtra'
    },
    { 
      icon: <Clock className="w-14 h-14 text-yellow-300" />, 
      stat: `${count.onTimeRate}%`, 
      label: 'On-Time Delivery Rate',
      color: 'from-yellow-500 to-yellow-400',
      shadowColor: 'yellow-400/30',
      description: 'Our commitment to punctuality'
    },
    { 
      icon: <Users className="w-14 h-14 text-yellow-300" />, 
      stat: `${count.customers}+`, 
      label: 'Happy Customers',
      color: 'from-yellow-500 to-yellow-400',
      shadowColor: 'yellow-400/30',
      description: 'Businesses and families trust us'
    }
  ];

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      } 
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1 + 0.3,
        duration: 0.5
      } 
    })
  };

  return (
    <div 
      ref={statsRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative"
      id="stats"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={statsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 border border-yellow-500/20">Our Performance</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="inline-block">Numbers That <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400">Speak</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={statsInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-yellow-400 rounded-full"
              ></motion.span>
            </span></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Demonstrating our commitment to excellence through measurable results.</p>
        </motion.div>
        
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
          </div>
        )}
        
        {error && !loading && (
          <div className="text-center text-red-500 mb-8 bg-red-100/80 dark:bg-red-900/30 p-4 rounded-lg max-w-lg mx-auto">
            <p className="font-medium">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <div className={`bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg p-8 h-full border border-gray-100 dark:border-gray-700 flex flex-col items-center hover:shadow-2xl hover:shadow-${item.shadowColor} transition-all duration-500 transform hover:-translate-y-2`}>
                {/* Icon with circle background */}
                <motion.div 
                  className={`mb-6 relative bg-gradient-to-r ${item.color} p-6 rounded-full flex items-center justify-center`}
                  variants={circleVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                >
                  {item.icon}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-dashed border-yellow-300/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                {/* Stat number with animation for each digit */}
                <motion.div 
                  className="text-5xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white flex justify-center"
                  custom={index}
                  variants={numberVariants}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                >
                  {item.stat.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      className={char === '+' || char === '%' ? 'text-yellow-500' : ''}
                      initial={{ opacity: 0, y: 20 }}
                      animate={statsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        delay: index * 0.1 + i * 0.05 + 0.5, 
                        duration: 0.3,
                        type: "spring"
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{item.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{item.description}</p>
                
                {/* Yellow accent line */}
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mx-auto"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional performance highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4 bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-yellow-500/10 p-2 rounded-lg">
              <CheckCircle className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Lowest Damage Rate in Industry</h4>
              <p className="text-gray-600 dark:text-gray-400">Less than 0.5% of deliveries report any damage</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white/50 dark:bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-yellow-500/10 p-2 rounded-lg">
              <Truck className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Personal Touch</h4>
              <p className="text-gray-600 dark:text-gray-400">One truck, one driver, 100% dedication to your needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;