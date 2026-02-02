import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import StrategicPositioning from './components/StrategicPositioning';
import TripleDDoctrine from './components/TripleDDoctrine';
import AttentionBlocks from './components/AttentionBlocks';
import ComparisonTable from './components/ComparisonTable';
import MIPJourney from './components/MIPJourney';
import Solutions from './components/Solutions';
import CriticalSectors from './components/CriticalSectors';
import RiskBento from './components/RiskBento';
import CountdownBar from './components/CountdownBar';
import ComplianceTimeline from './components/ComplianceTimeline';
import DoctrineFeed from './components/DoctrineFeed';
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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true
    });

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  // Scroll to top whenever the view changes
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }
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
    <div className="relative min-h-screen selection:bg-neon-purple/30 text-slate-200 overflow-x-hidden">
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
      <main ref={mainRef} className="relative z-10 w-full">
        <div id="smooth-wrapper">
          <div id="smooth-content" className="w-full relative z-20 flex flex-col">
            <AnimatePresence mode="wait">
              {currentView === 'home' ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-charcoal relative z-30"
                >
                  {/* 1. Hero */}
                  <Hero mousePosition={mousePosition} />

                  {/* 1.5. CountdownBar */}
                  <CountdownBar />

                  {/* 2. Philosophy (Doctrine) */}
                  <Philosophy />

                  {/* 2.5 Strategic Positioning */}
                  <StrategicPositioning />

                  {/* 2.6 TripleD Doctrine */}
                  <TripleDDoctrine />

                  {/* 3. AttentionBlocks */}
                  <AttentionBlocks />

                  {/* 4. ComparisonTable */}
                  <ComparisonTable />

                  {/* 5. MIPJourney */}
                  <MIPJourney />

                  {/* 6. Solutions */}
                  <Solutions />

                  {/* 7. CriticalSectors */}
                  <CriticalSectors />

                  {/* 8. RiskBento */}
                  <RiskBento />

                  {/* 9. ComplianceTimeline */}
                  <div className="relative pt-24 pb-0 bg-charcoal">
                    <ComplianceTimeline />
                  </div>

                  {/* 9.5 Doctrine Feed */}
                  <DoctrineFeed />

                  {/* 10. Legacy */}
                  <Legacy />

                  {/* 11. ContactForm */}
                  <ContactForm />
                </motion.div>
              ) : (
                <motion.div
                  key="insights"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-charcoal relative z-30"
                >
                  <BlogPage />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spacer to push content up so the footer reveal feels natural */}
            {/* Spacer to push content up to reveal Footer */}
            {/* Height matches Footer height (h-auto lg:h-[400px]) */}
            {/* The transparent spacer allows the fixed footer (z-0) to be seen when scrolling past content */}
            <div className="w-full h-[400px] pointer-events-none hidden lg:block" />
            <div className="h-12 lg:hidden bg-charcoal" />
          </div>
        </div>
      </main>

      {/* Footer - Fixed at bottom on Desktop, Relative on Mobile */}
      <div className="relative z-0 lg:fixed lg:bottom-0 lg:left-0 lg:w-full lg:z-[1]">
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default App;