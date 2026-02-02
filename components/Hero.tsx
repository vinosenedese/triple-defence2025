import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Activity, ShieldAlert } from 'lucide-react';

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

  const smoothScrollToContact = () => {
    const target = document.getElementById('contact');
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
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
    <section className="relative h-screen min-h-[800px] w-full flex flex-col justify-center items-center overflow-hidden bg-[#030303]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)] z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center text-center -mt-10">
        
        {/* Framework Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center gap-3 px-4 py-1.5 border border-neon-purple/40 bg-neon-purple/5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.1)]"
        >
          <ShieldAlert className="w-3 h-3 text-neon-purple" />
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-neon-purple uppercase">
            TripleDefence Framework: Beyond Zero Trust
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            UNEXPLOITABLE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">
              BY DESIGN.
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-16 tracking-tight"
        >
          TripleDefence is the evolution of cyberprotection. We don't just secure; we make your infrastructure <span className="text-white font-normal underline decoration-neon-purple/50 underline-offset-4">unexploitable by architectural design</span>.
        </motion.p>

        {/* Precision Interfaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <button 
            onClick={smoothScrollToContact}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300"
          >
            <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-3 text-sm font-bold tracking-widest text-white uppercase">
              Check Compliance Role
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button 
            onClick={() => handleToast("Documentation hub access requires clearance.")}
            className="group px-8 py-4 text-slate-500 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium tracking-wide"
          >
             <FileText className="w-4 h-4" />
             <span className="border-b border-transparent group-hover:border-white transition-all">View Documentation</span>
          </button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-[-150px] md:bottom-[-200px] left-0 right-0 flex justify-between px-10 text-[10px] font-mono text-slate-700 pointer-events-none"
        >
           <div className="flex items-center gap-2">
             <Activity size={12} /> SYSTEM INTEGRITY: 100%
           </div>
           <div>
             SECURE_SESSION_ID: 0x84F2
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;