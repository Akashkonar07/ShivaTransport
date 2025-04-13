import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

const TermsOfService = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <SEO title="Terms of Service - Shiva Transport" description="Terms of Service for Shiva Transport" />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-28 pb-16 px-4 md:px-8 lg:container lg:mx-auto min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
          
          <div className="prose max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the Shiva Transport website, mobile application, and services 
              (collectively, the "Services") operated by Shiva Transport ("we," "us," or "our"). By accessing or using our 
              Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
            </p>
            
            <h2>2. Use of Services</h2>
            <p>
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
            </p>
            <ul>
              <li>In any way that violates any applicable national, federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Shiva Transport, a Shiva Transport employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm Shiva Transport or users of the Services.</li>
            </ul>
            
            <h2>3. Transport Services and Liability</h2>
            <p>
              Shiva Transport provides logistics and transportation services. By engaging our services, you acknowledge and agree to the following:
            </p>
            <ul>
              <li>You will provide accurate information regarding the items to be transported.</li>
              <li>You will ensure all items are properly packed and labeled, unless packing services are specifically requested from us.</li>
              <li>You will not request transportation of illegal, hazardous, or prohibited items.</li>
              <li>Our liability for damage or loss is limited to the declared value of the items as stated in our service agreement.</li>
              <li>Claims for damages must be reported within 48 hours of delivery with appropriate documentation.</li>
            </ul>
            
            <h2>4. Payment and Cancellation</h2>
            <p>
              Payment terms and cancellation policies are as follows:
            </p>
            <ul>
              <li>Payments are due as specified in your service agreement or quote.</li>
              <li>Cancellations made less than 24 hours before scheduled service may incur a cancellation fee.</li>
              <li>Rescheduling is subject to availability and may incur additional charges.</li>
            </ul>
            
            <h2>5. Intellectual Property Rights</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of 
              Shiva Transport. Our trademarks and trade dress may not be used in connection with any product or service without 
              the prior written consent of Shiva Transport.
            </p>
            
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any 
              reason whatsoever, including, without limitation, if you breach the Terms.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Shiva Transport, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
              liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use the Services.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access 
              or use our Services after those revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <br/>
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

export default TermsOfService; 