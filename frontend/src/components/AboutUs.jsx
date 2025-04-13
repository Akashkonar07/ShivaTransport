import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Award, Users, MapPin } from 'lucide-react';

const AboutUs = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={aboutRef} 
      id="about" 
      className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-yellow-300 rounded-full opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-sm font-medium tracking-wider uppercase mb-3">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Your Trusted Transport Partner</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Shiva Transport has been serving Maharashtra with dependable transportation since 2004.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Shiva Transport Fleet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm uppercase font-semibold">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Fleet</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Equipped with the powerful Eicher Pro 2049XP, ideal for urban and inter-city logistics.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Why Choose Us?</h3>
            <div className="space-y-4">
              {[
                "20+ years of experience",
                "Operate across all major cities in Maharashtra",
                "Professional, verified drivers",
                "24/7 service & support",
                "Real-time shipment updates"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-1 rounded-full mr-3 mt-1">
                    <Check className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center font-medium text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                Contact us to learn more
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Values section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To offer reliable and cost-effective transport solutions with a strong focus on safety, professionalism, and customer satisfaction.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our professional team is committed to providing the highest quality transport services with attention to detail and care.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Coverage</h3>
            <p className="text-gray-600 dark:text-gray-300">
              From Mumbai to Nagpur, Pune to Nashik, we cover all corners of Maharashtra with ease.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 