import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<HeroProps> = ({ mousePosition }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleToast = (msg: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: msg } }));
  };

  const smoothScrollToContact = () => {
    const targetId = 'contact';
    const duration = 1500;
    
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 100; 
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition - headerOffset;
    const distance = targetPosition - startPosition;
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
    <section className="relative h-screen min-h-[800px] w-full flex flex-col justify-center items-center overflow-hidden">
      
      {/* ---------------------------------------------------------------------------
          LAYER 1: BACKGROUND (Fixed, Absolute, No Layout Interference)
         --------------------------------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Blobs */}
        <motion.div 
          style={{ y: y1, x: -50 }}
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-neon-purple/15 rounded-full blur-[120px] mix-blend-screen animate-blob" 
        />
        <motion.div 
          style={{ y: y2, x: 50 }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-neon-red/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" 
        />
        <div className="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
        
        {/* Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      {/* ---------------------------------------------------------------------------
          LAYER 2: MAIN CONTENT (Centered Flex Column)
         --------------------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-7xl px-4 flex flex-col items-center justify-center text-center -mt-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)] mx-auto"
        >
          <div className="w-2 h-2 rounded-full bg-neon-red animate-pulse-fast shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <span className="text-xs font-medium tracking-wide text-slate-200">
            Enforcement: Dec 2027
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[1.1] md:leading-tight text-center mx-auto">
            <span className="block text-gradient-silver">UNHACKABLE</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-white to-neon-purple bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              RESILIENCE.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 tracking-tight text-center"
        >
          The complete platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-red font-medium">EU CRA Compliance</span>. 
          Automated SBOMs, Article 14 reporting, and SL4 security for critical infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <button 
            onClick={smoothScrollToContact}
            className="group relative w-full sm:w-auto px-8 py-4 bg-neon-purple/10 text-white font-semibold text-sm tracking-wide rounded-full overflow-hidden border border-neon-purple/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-indigo-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Assessment <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button 
            onClick={() => handleToast("Documentation hub is currently being updated.")}
            className="w-full sm:w-auto px-8 py-4 text-slate-400 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group rounded-full"
          >
             <ShieldCheck className="w-4 h-4 text-slate-600 group-hover:text-neon-red transition-colors" />
             View Documentation
          </button>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------------------
          LAYER 3: SOFT GRADIENT TRANSITION ONLY (No SVG Notch)
         --------------------------------------------------------------------------- */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="w-full h-40 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;