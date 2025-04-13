import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, TruckIcon, ShieldCheckIcon, ClockIcon, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleGetQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      role="banner"
      id="home"
    >
      {/* Video Background with Enhanced Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="https://player.vimeo.com/external/545261591.hd.mp4?s=c9f4d44b62e6f5b6f2b3f5a9d5a8b7b6&profile_id=174" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90"></div>
      </div>

      {/* Animated Overlay Pattern with improved opacity */}
      <div className="absolute inset-0 z-[1] opacity-15">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.22"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Hero Content with enhanced spacing and styling */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className="bg-yellow-500/20 text-yellow-400 py-1 px-4 rounded-full text-sm font-medium backdrop-blur-sm border border-yellow-500/30">
              #1 Transport Service in Maharashtra
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl"
          >
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">Delivering</span> <span className="text-white">with Trust</span>
            </span>
            <span className="block text-white">Across Maharashtra</span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm py-3 px-5 rounded-lg mb-8 border border-white/20 shadow-lg"
          >
            <TypeAnimation
              sequence={[
                'Serving Maharashtra Since 2004',
                2000,
                'House Shifting & Industrial Goods',
                2000,
                'Reliable & Insured Transport',
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-gray-200"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <motion.button 
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetQuote}
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              className="border-2 border-white/30 hover:border-white/70 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg text-lg transition-all hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewServices}
            >
              View Services
            </motion.button>
          </motion.div>
          
          {/* Trust indicators with enhanced design */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center md:justify-start"
          >
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <TruckIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-200">House Shifting & Industrial Goods</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <ShieldCheckIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-200">Reliable & Insured Transport</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <ClockIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-200">24/7 Service</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-yellow-400" />
      </motion.div>
    </div>
  );
};

export default HeroSection; 