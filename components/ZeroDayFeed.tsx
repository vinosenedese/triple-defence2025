import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronLeft, ChevronRight, Terminal, Activity, ShieldAlert } from 'lucide-react';

const ZeroDayFeed: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const exploits = [
    {
      title: "Microsoft Office Word 0-day Vulnerability (CVE-2026-21514)",
      desc: "Critical zero-day in OLE controls allowing attackers to bypass essential security decisions. Actively exploited in the wild.",
      severity: "CRITICAL",
      cve: "CVE-2026-21514"
    },
    {
      title: "CentOS 9: Critical Privilege Escalation",
      desc: "Privilege escalation bypass found in the wild. Exploitation trivial via unpatched kernel modules.",
      severity: "CRITICAL",
      cve: "CVE-2026-0042"
    },
    {
      title: "Ivanti Connect Secure",
      desc: "New auth bypass exploitation stacking up. Adversaries chaining bugs to bypass MFA completely.",
      severity: "HIGH",
      cve: "CVE-2026-1193"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % exploits.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + exploits.length) % exploits.length);
  };

  const handleAction = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
  };

  return (
    <section className="bg-[#000000] py-32 relative overflow-hidden border-y border-red-950/30">
      
      {/* Sovereign Intelligence Background (Minimalist) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-slate-500 border border-white/10 px-4 py-1.5 rounded-sm bg-white/5 mb-8"
          >
            <ShieldAlert size={14} className="text-red-900" />
            <span className="font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Sovereign Intelligence Feed</span>
          </motion.div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            ACTIVE EXPLOIT <span className="text-red-900">VECTORING</span>
          </h2>
          
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase">
            Surveillance Status: <span className="text-red-900 animate-pulse">Monitoring Live Vulnerabilities</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl group">
          
          {/* Navigation Controls */}
          <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={handlePrev}
              className="p-3 text-slate-600 hover:text-neon-purple transition-colors bg-black/50 border border-white/5 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={handleNext}
              className="p-3 text-slate-600 hover:text-neon-purple transition-colors bg-black/50 border border-white/5 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Slide */}
          <div className="min-h-[240px] relative overflow-hidden rounded-sm border border-red-900/20 bg-[#050505]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-8"
              >
                <div className="p-5 bg-red-950/10 border border-red-900/30 text-red-900 shrink-0">
                  <AlertTriangle size={32} />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <h3 className="text-white font-bold text-xl md:text-2xl font-display tracking-tight leading-tight max-w-xl">
                      {exploits[currentIndex].title}
                    </h3>
                    <span className="inline-block bg-red-900/20 text-red-500 text-[9px] font-bold px-3 py-1 border border-red-900/30 rounded-full uppercase tracking-widest whitespace-nowrap">
                      {exploits[currentIndex].severity}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-6 italic">
                    "{exploits[currentIndex].desc}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                       <Terminal size={12} />
                       <span>Reference: {exploits[currentIndex].cve}</span>
                    </div>
                    <div className="h-[1px] w-12 bg-white/10" />
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                       <Activity size={12} />
                       <span>Vector: Remote Execution</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {exploits.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-neon-purple w-6' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* The Action Button (STOP) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <button 
            onClick={handleAction}
            className="group relative px-10 py-5 bg-transparent border-[3px] border-white transition-all duration-300 hover:bg-red-950/10 hover:border-red-600"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] text-white uppercase group-hover:text-red-500 transition-colors">
              STOP EXPLOITATION — TIME TO ACT 🛑
            </span>
          </button>
        </motion.div>

        {/* Peacefully Firm Footer Text */}
        <p className="mt-12 text-[10px] font-mono text-slate-700 tracking-[0.5em] uppercase text-center max-w-md mx-auto leading-relaxed">
          Architectural Finality is the only defense against infinite vulnerability.
        </p>

      </div>
    </section>
  );
};

export default ZeroDayFeed;