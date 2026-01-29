import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';

const CustomLogo: React.FC = () => {
  return (
    <img
      src="/logo.png"
      alt="TripleDefence Logo"
      className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
    />
  );
};

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', id: 'solutions' },
    { name: 'Methodology', id: 'mip' },
    { name: 'Sectors', id: 'sectors' },
    { name: 'Fines & Risk', id: 'risk' },
  ];

  // Custom Smooth Scroll Function
  const smoothScrollTo = (e: React.MouseEvent, targetId: string, duration: number = 1200) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    // Close mobile menu if open
    setMobileOpen(false);

    const headerOffset = 100;
    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition - headerOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Easing function: easeInOutCubic
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

  const handleToast = (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message } }));
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${isScrolled
        ? 'bg-charcoal/95 backdrop-blur-xl border-white/5 py-4'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <CustomLogo />
          <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
            Triple<span className="text-slate-500 group-hover:text-slate-300">Defence</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => smoothScrollTo(e, link.id)}
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 py-1 group tracking-wide cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-purple transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            </a>
          ))}

          {/* Portal Button (Trigger Toast) */}
          <button
            onClick={() => handleToast("Portal access restricted. Please contact sales.")}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
          >
            <Lock size={14} className="group-hover:text-neon-purple transition-colors" />
            Portal
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={(e) => smoothScrollTo(e, 'contact', 1500)}
            className="px-5 py-2 text-xs font-bold tracking-widest text-charcoal bg-white hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            BOOK AUDIT
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className="text-slate-300 text-xl font-medium"
                  onClick={(e) => smoothScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => handleToast("Portal access restricted.")}
                className="text-slate-300 text-xl font-medium text-left flex items-center gap-3"
              >
                <Lock size={20} />
                Portal
              </button>
              <button
                onClick={(e) => smoothScrollTo(e, 'contact', 1500)}
                className="mt-4 w-full py-4 text-sm font-bold text-charcoal bg-white rounded-sm"
              >
                BOOK AUDIT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;