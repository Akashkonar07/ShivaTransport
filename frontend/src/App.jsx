import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import useSound from 'use-sound';
import { MessageCircle, ArrowUp, PhoneCall } from 'lucide-react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ParticlesBackground } from './components/ParticlesBackground';
import { PageTransition } from './components/PageTransition';
import { SEO } from './components/SEO';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import './styles/App.css';

// Lazy loading pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Ensure the sound file exists or provide a fallback
const hornSoundUrl = 'sounds/horn.mp3';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./components/HeroSection'));
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  // Use a dummy function if the sound file is not available
  const [playHorn] = useSound(hornSoundUrl, { volume: 0.5 });

  useEffect(() => {
    // Show loading state for a short time to ensure components load properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Save dark mode preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Easter egg keyboard listener
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 's') {
        try {
          playHorn();
          
          // Animate a truck emoji across the screen
          const truck = document.createElement('div');
          truck.textContent = '🚚';
          truck.style.cssText = `
            position: fixed;
            top: 50%;
            left: -50px;
            font-size: 2rem;
            z-index: 9999;
            transition: transform 2s linear;
          `;
          document.body.appendChild(truck);
          
          requestAnimationFrame(() => {
            truck.style.transform = `translateX(${window.innerWidth + 50}px)`;
          });
          
          setTimeout(() => truck.remove(), 2000);
        } catch (error) {
          console.error('Error playing horn sound:', error);
        }
      }
    };
    
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [darkMode, playHorn]);

  useEffect(() => {
    // Show scroll-to-top button when scrolling down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  const handleQuickQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ParallaxProvider>
      <Router>
        <SEO />
        <PageTransition>
          <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <ParticlesBackground />
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            {/* Sticky CTA */}
            <div 
              className="fixed bottom-4 right-4 z-30 flex flex-col gap-2"
            >
              <button 
                onClick={handleQuickQuote}
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:shadow-yellow-500/50 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Get Quick Quote"
              >
                <PhoneCall className="w-6 h-6" />
              </button>
              
              <button 
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://wa.me/911234567890', '_blank')}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              
              {showScrollTop && (
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-6 h-6" />
                </button>
              )}
            </div>
            
            <Routes>
              <Route path="/" element={
                <>
                  <Suspense fallback={<LoadingSpinner inline={true} />}>
                    <HeroSection />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner inline={true} />}>
                    <Stats />
                  </Suspense>
                  <Suspense fallback={<LoadingSpinner inline={true} />}>
                    <Services />
                  </Suspense>
                  <AboutUs />
                  <ContactForm />
                  <Footer />
                </>
              } />
              
              <Route path="/privacy" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <PrivacyPolicy darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </Suspense>
              } />
              
              <Route path="/terms" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <TermsOfService darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </Suspense>
              } />
              
              <Route path="/sitemap" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Sitemap darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </Suspense>
              } />
            </Routes>
          </div>
        </PageTransition>
      </Router>
    </ParallaxProvider>
  );
};

export default App; 