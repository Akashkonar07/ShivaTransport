import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

const PrivacyPolicy = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <SEO title="Privacy Policy - Shiva Transport" description="Privacy Policy for Shiva Transport services" />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:container lg:mx-auto min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
          
          <div className="prose max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Shiva Transport. We respect your privacy and are committed to protecting your personal data. This 
              privacy policy will inform you about how we look after your personal data when you visit our website and tell 
              you about your privacy rights and how the law protects you.
            </p>
            
            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be 
              identified. We may collect, use, store and transfer different kinds of personal data about you which we have 
              grouped together as follows:
            </p>
            <ul>
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes billing address, delivery address, email address, and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system, and platform.</li>
              <li>Usage Data includes information about how you use our website, products, and services.</li>
            </ul>
            
            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
              in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected 
              it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            
            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
              including the right to request access, correction, erasure, restriction, transfer, to object to processing, 
              to portability of data and the right to withdraw consent.
            </p>
            
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
              Email: info@shivatransport.com<br/>
              Phone: +91 1234 567 890
            </p>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy; 