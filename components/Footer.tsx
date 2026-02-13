import React from 'react';
import { Twitter, Linkedin, Github, Shield, Command } from 'lucide-react';

const CustomLogo: React.FC = () => {
  return (
    <img
      src="/logo.png"
      alt="TripleDefence Logo"
      className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
    />
  );
};

interface FooterProps {
  onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleRestrictedToast = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: "This module is restricted to sovereign partners." } }));
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative lg:fixed bottom-0 left-0 w-full h-auto lg:h-[400px] bg-black flex flex-col justify-between py-12 lg:py-12 z-0 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-between">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand & Badge */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <CustomLogo />
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Triple<span className="text-slate-400">Defence</span>
              </span>
            </div>

            <div className="inline-flex flex-col gap-2 items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-md">
                <Shield size={12} className="text-slate-300" />
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
                  Sovereign-Grade Protection
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 mt-2 uppercase tracking-tight">
                Independent by Design: Open Protocols Only.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" onClick={handleRestrictedToast} className="text-slate-400 hover:text-neon-purple transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" onClick={handleRestrictedToast} className="text-slate-400 hover:text-neon-purple transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" onClick={handleRestrictedToast} className="text-slate-400 hover:text-neon-purple transition-colors">
                <Github size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Doctrine Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Doctrine</h4>
            <ul className="space-y-3 text-slate-300 text-sm font-semibold">
              <li><a href="#" onClick={handleRestrictedToast} className="hover:text-neon-purple transition-colors">White Paper</a></li>
              <li><a href="#doctrine" onClick={(e) => handleNavClick(e, 'doctrine')} className="hover:text-neon-purple transition-colors">Triple-D Principles</a></li>
              <li><a href="#threats" onClick={(e) => handleNavClick(e, 'threats')} className="hover:text-neon-purple transition-colors">Threat Matrix</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Intelligence</h4>
            <ul className="space-y-3 text-slate-300 text-sm font-semibold">
              <li><a href="#sectors" onClick={(e) => handleNavClick(e, 'sectors')} className="hover:text-neon-purple transition-colors">Critical Sectors</a></li>
              <li><a href="#roadmap" onClick={(e) => handleNavClick(e, 'roadmap')} className="hover:text-neon-purple transition-colors">Compliance Timeline</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'insights')} className="hover:text-neon-purple transition-colors text-neon-purple">Insights & Blog</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Legal</h4>
            <ul className="space-y-3 text-slate-300 text-sm font-semibold">
              <li><a href="#" onClick={handleRestrictedToast} className="hover:text-neon-purple transition-colors">Protocol</a></li>
              <li><a href="#" onClick={handleRestrictedToast} className="hover:text-neon-purple transition-colors">Terms</a></li>
              <li><a href="#" onClick={handleRestrictedToast} className="hover:text-neon-purple transition-colors">SLA</a></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="md:col-span-3">
            <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-2">Battle-Ready Resilience</h4>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed font-medium">
                Article 14 reporting readiness requires architectural integration. Zero proprietary lock-in.
              </p>
              <button
                onClick={handleRestrictedToast}
                className="w-full group flex items-center justify-between bg-white text-black px-4 py-3 text-xs font-bold tracking-widest uppercase hover:bg-neon-purple hover:text-white transition-all"
              >
                <span>CRA-3D Wizard Demo Available</span>
                <Command size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-mono uppercase tracking-wider font-bold">
          <p>&copy; 2024 TripleDefence Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Systems Operational // EU-West-1</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;