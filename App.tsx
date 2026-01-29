import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import AttentionBlocks from './components/AttentionBlocks';
import ComparisonTable from './components/ComparisonTable';
import MIPJourney from './components/MIPJourney';
import Solutions from './components/Solutions';
import CriticalSectors from './components/CriticalSectors';
import RiskBento from './components/RiskBento';
import CountdownBar from './components/CountdownBar';
import ComplianceTimeline from './components/ComplianceTimeline';
import Legacy from './components/Legacy';
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
    <div className="relative min-h-screen bg-charcoal selection:bg-neon-purple/30 text-slate-200 overflow-x-hidden">
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
      <main ref={mainRef} className="relative z-10 bg-charcoal shadow-2xl shadow-black mb-0 lg:mb-[400px]">
        
        {/* 1. Hero */}
        <Hero mousePosition={mousePosition} />
        
        {/* 2. Philosophy (Doctrine) */}
        <Philosophy />
        
        {/* 3. AttentionBlocks (Capabilities) */}
        <AttentionBlocks />
        
        {/* 4. ComparisonTable (Competição) */}
        <ComparisonTable />
        
        {/* 5. MIPJourney (O Método de 7 passos) */}
        <MIPJourney />
        
        {/* 6. Solutions (Os 3 Produtos: MUPP, CRA-3D, vPAC) */}
        <Solutions />
        
        {/* 7. CriticalSectors (Onde atuamos) */}
        <CriticalSectors />
        
        {/* 8. RiskBento (O perigo das multas) */}
        <RiskBento />
        
        {/* 9. CountdownBar + ComplianceTimeline (Urgência e Prazos) */}
        <div className="relative pt-24 pb-0 bg-charcoal">
          <CountdownBar />
          <ComplianceTimeline />
        </div>

        {/* 10. Legacy (Autoridade 2012) */}
        <Legacy />
        
        {/* 11. ContactForm (Fechamento) */}
        <ContactForm />

        {/* Spacer to push content up so the footer reveal feels natural */}
        <div className="h-12 bg-charcoal" />
      </main>

      {/* Footer - Fixed at bottom on Desktop, Relative on Mobile */}
      <Footer />
    </div>
  );
};

export default App;