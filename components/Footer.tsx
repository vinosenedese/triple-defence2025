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
  const handleToast = (msg: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: msg } }));
  };

  const preventDefaultAndToast = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    handleToast(msg);
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

        {/* Adjusted Grid for V4 Layout (Brand: 3, Doctrine: 2, Product: 2, Legal: 2, CTA: 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand & Badge */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <CustomLogo />
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Triple<span className="text-slate-600">Defence</span>
              </span>
            </div>

            {/* Sovereign Badge */}
            <div className="inline-flex flex-col gap-2 items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 rounded-md">
                <Shield size={12} className="text-slate-400" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Sovereign-Grade Protection
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-600 mt-2 uppercase tracking-tight">
                Independent by Design: Open Protocols Only.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "TripleDefence official channels are currently private.")} className="text-slate-600 hover:text-white transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "TripleDefence official channels are currently private.")} className="text-slate-600 hover:text-white transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "TripleDefence official channels are currently private.")} className="text-slate-600 hover:text-white transition-colors">
                <Github size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Doctrine Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Doctrine</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" onClick={(e) => preventDefaultAndToast(e, "White Paper download requested.")} className="hover:text-white transition-colors">White Paper</a></li>
              <li><a href="#doctrine" onClick={(e) => handleNavClick(e, 'doctrine')} className="hover:text-white transition-colors">Triple-D Principles</a></li>
              <li><a href="#risk" onClick={(e) => handleNavClick(e, 'risk')} className="hover:text-white transition-colors">CRA Alignment</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Solutions</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')} className="hover:text-white transition-colors">MUPP Platform</a></li>
              <li><a href="#mip" onClick={(e) => handleNavClick(e, 'mip')} className="hover:text-white transition-colors">Pathway (MIP)</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'insights')} className="hover:text-white transition-colors text-neon-purple/80">Insights & Blog</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 text-opacity-80">Legal</h4>
            <ul className="space-y-3 text-slate-500 text-sm font-medium">
              <li><a href="#" onClick={(e) => preventDefaultAndToast(e, "Legal document v4.0 is under final review.")} className="hover:text-white transition-colors">Protocol</a></li>
              <li><a href="#" onClick={(e) => preventDefaultAndToast(e, "Legal document v4.0 is under final review.")} className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" onClick={(e) => preventDefaultAndToast(e, "Legal document v4.0 is under final review.")} className="hover:text-white transition-colors">SLA</a></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="md:col-span-3">
            <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-2">Automated Compliance</h4>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                Article 14 reporting readiness requires architectural integration. Zero proprietary lock-in.
              </p>
              <button
                onClick={() => handleToast("Wizard Demo Requested")}
                className="w-full group flex items-center justify-between bg-white text-black px-4 py-3 text-xs font-bold tracking-widest uppercase hover:bg-slate-200 transition-colors"
              >
                <span>CRA-3D Wizard Demo Available</span>
                <Command size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-700 font-mono uppercase tracking-wider">
          <p>&copy; 2024 TripleDefence Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Systems Operational // EU-West-1</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;