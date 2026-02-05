import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import StrategicPositioning from './components/StrategicPositioning';
import TripleDDoctrine from './components/TripleDDoctrine';
import HallOfVulnerabilities from './components/HallOfVulnerabilities';
import CriticalSectors from './components/CriticalSectors';
import CountdownBar from './components/CountdownBar';
import ComplianceTimeline from './components/ComplianceTimeline';
import BlogPage from './components/BlogPage';
import Legacy from './components/Legacy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConstructionToast from './components/ConstructionToast';
import { AnimatePresence, motion } from 'framer-motion';

type ViewState = 'home' | 'insights';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const mainRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleNavigate = (e: CustomEvent) => {
      const target = e.detail;
      
      if (target === 'insights') {
        setCurrentView('insights');
      } else if (target === 'home') {
        setCurrentView('home');
      } else {
        // Handle section navigation (e.g. #solutions)
        setCurrentView('home');
        
        // Use a timeout to allow the view to switch/render before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
             const headerOffset = 100;
             const elementPosition = element.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('navigate', handleNavigate as EventListener);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  // Helper to trigger navigation
  const onNavigate = (view: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: view }));
  };

  return (
    <div className="relative min-h-screen bg-charcoal selection:bg-neon-purple/30 text-slate-200 overflow-x-hidden">
      <ConstructionToast />
      <Navigation currentView={currentView} onNavigate={onNavigate} />
      
      {/* Global Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 40%)`
        }}
      />

      {/* Main Content Wrapper */}
      <main ref={mainRef} className="relative z-10 bg-charcoal shadow-2xl shadow-black mb-0 lg:mb-[400px]">
            <AnimatePresence mode="wait">
              {currentView === 'home' ? (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* 1. Hero (Unexploitable by Design) */}
                  <Hero mousePosition={mousePosition} />

                  {/* 2. Philosophy (Doctrine) */}
                  <Philosophy />

                  {/* 3. HallOfVulnerabilities (Battle-Ready Intelligence) */}
                  <HallOfVulnerabilities />

                  {/* 4. Strategic Positioning (The Bottom Line) */}
                  <StrategicPositioning />

                  {/* 5. TripleD Doctrine (The Circle) */}
                  <TripleDDoctrine />
                  
                  {/* 6. Critical Sectors (Sovereign Scope) */}
                  <CriticalSectors />
                  
                  {/* 7. The Deadline (Countdown + Timeline) */}
                  <div className="relative pt-24 pb-0 bg-charcoal border-t border-white/5">
                    <CountdownBar />
                    <ComplianceTimeline />
                  </div>

                  {/* 8. Legacy (2012) */}
                  <Legacy />

                  {/* Executive Summary Highlight */}
                  <section className="py-20 bg-[#050505] border-t border-white/5 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                          Stop reacting. Start protecting. <br className="hidden md:block" />
                          <span className="text-neon-purple">Stay in control.</span>
                        </h2>
                        <div className="flex justify-center mb-8">
                          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
                        </div>
                        <p className="font-display text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed italic">
                          "CRA reporting becomes routine, not a crisis."
                        </p>
                      </motion.div>
                    </div>
                  </section>
                  
                  {/* 9. ContactForm */}
                  <ContactForm />
                </motion.div>
              ) : (
                <motion.div 
                  key="insights"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BlogPage />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spacer to push content up so the footer reveal feels natural */}
            <div className="h-12 bg-charcoal" />
      </main>

      {/* Footer - Fixed at bottom on Desktop, Relative on Mobile */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default App;