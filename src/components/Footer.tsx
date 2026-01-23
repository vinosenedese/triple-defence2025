import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

import logo from '../assets/logo.png';

const CustomLogo: React.FC = () => (
  <img
    src={logo}
    alt="TripleDefence Logo"
    className="w-8 h-8 object-contain filter drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]"
  />
);

const Footer: React.FC = () => {
  const handleToast = (msg: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: msg } }));
  };

  const preventDefaultAndToast = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    handleToast(msg);
  };

  const smoothScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 100;
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition - headerOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Consistent with Navigation
    let startTime: number | null = null;

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };
    requestAnimationFrame(animation);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[500px] lg:h-[400px] bg-slate-950 flex flex-col justify-between py-12 z-0 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-between">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <CustomLogo />
              <span className="font-display font-bold text-xl text-white">
                Triple<span className="text-slate-500">Defence</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Securing the European digital ecosystem. We provide the infrastructure for manufacturers to meet the Cyber Resilience Act standards effortlessly.
            </p>
            <div className="flex gap-4">
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "LinkedIn integration coming soon.")} className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-slate-400">
                <Linkedin size={18} />
              </a>
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "Twitter feed unavailable.")} className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-slate-400">
                <Twitter size={18} />
              </a>
              <a href="#" onClick={(e) => preventDefaultAndToast(e, "GitHub repository is private.")} className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-slate-400">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#risk" onClick={(e) => smoothScrollTo(e, 'risk')} className="hover:text-neon-purple transition-colors">Risk Assessment</a></li>
              <li><a href="#mupp" onClick={(e) => smoothScrollTo(e, 'mupp')} className="hover:text-neon-purple transition-colors">MUPP Engine</a></li>
              <li><a href="#cra3d" onClick={(e) => smoothScrollTo(e, 'cra3d')} className="hover:text-neon-purple transition-colors">CRA-3D</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#sectors" onClick={(e) => smoothScrollTo(e, 'sectors')} className="hover:text-neon-purple transition-colors">Sectors</a></li>
              <li><a href="#" onClick={(e) => preventDefaultAndToast(e, "Legal docs are being updated.")} className="hover:text-neon-purple transition-colors">Legal</a></li>
              <li><a href="#contact" onClick={(e) => smoothScrollTo(e, 'contact')} className="hover:text-neon-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Stay compliant</h4>
            <p className="text-slate-500 text-xs mb-4">Receive critical CRA regulatory updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="work@email.com"
                className="bg-white/5 border border-white/10 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-neon-purple/50"
              />
              <button
                onClick={() => handleToast("Subscription successful (Demo Mode).")}
                className="bg-neon-purple hover:bg-neon-purple/80 text-white px-4 py-2 text-sm font-medium transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-mono">
          <p>&copy; 2024 TripleDefence Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 cursor-pointer">
            <span onClick={() => handleToast("Privacy Protocol v1.2")}>PRIVACY POLICY</span>
            <span onClick={() => handleToast("Terms of Service v2.0")}>TERMS OF SERVICE</span>
            <span onClick={() => handleToast("SLA Dashboard unavailable")}>SLA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;