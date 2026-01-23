import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CountdownBar from './components/CountdownBar';
import RiskBento from './components/RiskBento';
import MuppEngine from './components/MuppEngine';
import CriticalSectors from './components/CriticalSectors';
import ComplianceTimeline from './components/ComplianceTimeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ConstructionToast from './components/ConstructionToast';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-charcoal selection:bg-neon-purple/30 text-slate-200">
      <ConstructionToast />
      <Navigation />
      
      {/* Global Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 40%)`
        }}
      />

      {/* Main Content Wrapper - z-10 and bg-charcoal to cover the fixed footer */}
      <main ref={mainRef} className="relative z-10 bg-charcoal shadow-2xl shadow-black mb-[500px] lg:mb-[400px]">
        <Hero mousePosition={mousePosition} />
        <CountdownBar />
        <RiskBento />
        <MuppEngine />
        <CriticalSectors />
        <ComplianceTimeline />
        <ContactForm />
        {/* Spacer to push content up so the footer reveal feels natural */}
        <div className="h-12 bg-charcoal" />
      </main>

      {/* Footer - Fixed at bottom, z-0 */}
      <Footer />
    </div>
  );
};

export default App;