import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = ({ inline = false }) => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const dotVariants = {
    initial: { y: 0, opacity: 0.2 },
    animate: {
      y: [0, -15, 0],
      opacity: [0.2, 1, 0.2],
      transition: {
        repeat: Infinity,
        duration: 1
      }
    }
  };

  const dotColors = ['bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

  if (inline) {
    return (
      <div className="flex items-center justify-center py-4">
        <motion.div 
          className="flex space-x-2" 
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${dotColors[index]}`}
              variants={dotVariants}
              custom={index}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-yellow-500 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-yellow-500 text-xl font-bold">S</span>
        </div>
      </div>

      <motion.div 
        className="flex space-x-3 mt-8" 
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${dotColors[index]}`}
            variants={dotVariants}
            custom={index}
          />
        ))}
      </motion.div>
      
      <motion.p 
        className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}; 