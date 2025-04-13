import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Truck, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ApiService from '../services/api';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const controls = useAnimation();
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const response = await ApiService.submitContactForm(formData);
      
      // Reset form on success
      if (response.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: 'General Inquiry'
        });
        
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        
        // Auto-reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: 'There was an error submitting your message. Please try again later.'
      });
    }
  };

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
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium tracking-wider uppercase mb-3">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Questions? Need a quote? We're here to help — anytime.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out through any of these channels. We're available 24/7.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Head Office</h4>
                    <p className="text-gray-600 dark:text-gray-300">123 Transport Nagar, Andheri East, Mumbai, Maharashtra 400069</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+911234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 1234 567 890</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">24/7 Availability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:info@shivatransport.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">info@shivatransport.com</a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond as quickly as possible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg flex-1 hidden lg:flex lg:flex-col">
              <div className="flex items-center mb-4">
                <Truck className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Quick Quote</h3>
              </div>
              <p className="mb-8">Need a price estimate? Call us for fast, no-obligation quotes.</p>
              <div className="space-y-4 mb-auto">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                  <span>Same-day quote</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                  <span>Special pricing for regular clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-300" />
                  <span>Personalized transport solutions</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <a href="tel:+911234567890" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Quote
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h3>
              
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-lg flex items-start"
                >
                  <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </motion.div>
              )}
              
              {status.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg flex items-start"
                >
                  <AlertTriangle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Submission Error</p>
                    <p className="text-sm">{status.error}</p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors appearance-none bg-no-repeat bg-right pr-10"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundSize: "20px 20px", backgroundPosition: "right 10px center" }}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-2 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  disabled={status.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.submitting ? (
                    <>
                      <div className="animate-spin mr-2 h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 