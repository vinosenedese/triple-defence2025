import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock, BookOpen } from 'lucide-react';

const CustomLogo: React.FC = () => {
  return (
    <img
      src="/logo.png"
      alt="TripleDefence Logo"
      className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
    />
  );
};
interface NavigationProps {
  currentView: 'home' | 'insights';
  onNavigate: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Navigation Structure
  const navLinks = [
    { name: 'Doctrine', id: 'doctrine' },
    { name: 'Threats', id: 'threats' },
    { name: 'Sovereignty', id: 'sectors' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(id);
  };

  const handleInsightsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate('insights');
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    onNavigate('home');
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
          onClick={handleLogoClick}
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
              onClick={(e) => handleLinkClick(e, link.id)}
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 py-1 group tracking-wide cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-purple transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            </a>
          ))}

          {/* Insights (Blog) Link */}
          <button
            onClick={handleInsightsClick}
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 py-1 group tracking-wide ${currentView === 'insights' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <BookOpen size={14} className={currentView === 'insights' ? 'text-neon-purple' : ''} />
            Insights
            {currentView === 'insights' && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-neon-purple box-shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            )}
          </button>

          {/* Portal Button */}
          <button
            onClick={() => handleToast("Biometric authentication required. Access restricted.")}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
          >
            <Lock size={14} className="group-hover:text-neon-purple transition-colors" />
            Portal
          </button>
        </div>

        {/* CTA (Audit) */}
        <div className="hidden md:block">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2 text-xs font-bold tracking-widest text-charcoal bg-white hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            START REQUEST DEMO
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
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleInsightsClick}
                className="text-slate-300 text-xl font-medium text-left flex items-center gap-3"
              >
                <BookOpen size={20} />
                Insights
              </button>
              <button
                onClick={() => handleToast("Biometric authentication required. Access restricted.")}
                className="text-slate-300 text-xl font-medium text-left flex items-center gap-3"
              >
                <Lock size={20} />
                Portal
              </button>
              <button
                onClick={() => { setMobileOpen(false); onNavigate('contact'); }}
                className="mt-4 w-full py-4 text-sm font-bold text-charcoal bg-white rounded-sm"
              >
                START REQUEST DEMO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;