import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Activity, ShieldAlert, Cpu } from 'lucide-react';
import CountdownBar from './CountdownBar';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  isThreat: boolean;
  alpha: number;
}

const Hero: React.FC<HeroProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleToast = (msg: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: msg } }));
  };

  const handleNavigateToContact = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles: Particle[] = [];
    const PROTECTION_RADIUS = 300;
    const THREAT_COLOR = '239, 68, 68';
    const SAFE_COLOR = '139, 92, 246';
    const BASE_SPEED = 0.8;

    const createParticle = (): Particle => {
      const edge = Math.floor(Math.random() * 4);
      let x = 0, y = 0;
      
      switch(edge) {
        case 0: x = Math.random() * width; y = -10; break;
        case 1: x = width + 10; y = Math.random() * height; break;
        case 2: x = Math.random() * width; y = height + 10; break;
        case 3: x = -10; y = Math.random() * height; break;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const angle = Math.atan2(centerY - y, centerX - x);
      const speed = Math.random() * BASE_SPEED + 0.2;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 1.5 + 0.5,
        color: THREAT_COLOR,
        isThreat: true,
        alpha: Math.random() * 0.5 + 0.2
      };
    };

    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 100;
      
      for (let i = 0; i < height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
      
      for (let i = 0; i < width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (p.isThreat && dist < PROTECTION_RADIUS) {
          p.isThreat = false;
          p.color = SAFE_COLOR;
          p.vx *= 0.5;
          p.vy *= 0.5;
        }

        if (!p.isThreat) {
           p.alpha -= 0.005;
        }

        if (p.alpha <= 0 || p.x < -50 || p.x > width + 50 || p.y < -50 || p.y > height + 50) {
          particles[index] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
        
        if (p.isThreat) {
           ctx.shadowBlur = 4;
           ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        } else {
           ctx.shadowBlur = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#030303] py-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)] z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center text-center mt-20">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="text-white italic text-lg md:text-xl font-light tracking-tight">
            100% Cybersecurity doesn’t exist — But 100% <span className="text-neon-purple font-medium not-italic">Cyberprotection</span> does.
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative mb-6"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7.2rem] font-bold tracking-tighter text-white mb-6 leading-[0.95]">
            Proactive Cyberprotection & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-purple-400 to-indigo-400">
              Technology Operations (TO)
            </span>
          </h1>
        </motion.div>

        {/* Impact Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-300 max-w-5xl mx-auto font-light leading-relaxed mb-12 tracking-tight"
        >
          TripleDefence enhances your operations through <span className="text-neon-purple font-bold">Security Level 4 (SL4)</span> excellence—ensuring your infrastructure is <span className="text-neon-purple font-bold">Secure by Design</span> from the core to the edge.
        </motion.p>

        {/* SATO Interfaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <button 
            onClick={handleNavigateToContact}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300"
          >
            <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-3 text-sm font-bold tracking-widest text-white uppercase">
              MAKE AN APPOINTMENT CONSULTANT
              <Activity className="w-4 h-4 transition-transform group-hover:scale-110" />
            </span>
          </button>
          
          <button 
            onClick={() => handleToast("FDC Protocol Overview requested.")}
            className="group px-8 py-4 text-slate-500 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium tracking-wide"
          >
             <Cpu className="w-4 h-4" />
             <span className="border-b border-transparent group-hover:border-white transition-all">Explore FDC Technology</span>
          </button>
        </motion.div>

        {/* Countdown Integration */}
        <CountdownBar />

        {/* System Integrity Footer */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-12 flex justify-between w-full px-10 text-[10px] font-mono text-slate-700 pointer-events-none"
        >
           <div className="flex items-center gap-2">
             <Activity size={12} /> SATO ENGINE STATUS: NOMINAL
           </div>
           <div>
             APEX_SESSION_ID: 0xSATO_772
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;