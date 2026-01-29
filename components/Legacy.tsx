import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-32 bg-charcoal relative overflow-hidden border-t border-white/5">
       
       {/* Background Ambience */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          {/* Subtle Radial Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
       </div>

       <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 mb-10 shadow-lg"
          >
              <Award size={14} className="text-neon-purple" />
              <span className="text-xs font-mono font-bold text-slate-300 tracking-widest uppercase">Operational Zero Trust Pioneers</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight"
          >
            Protecting the World <br/> Since <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600">2012</span>.
          </motion.h2>

          {/* Divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-neon-purple rounded-full mb-10"
          />

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-4xl mx-auto"
          >
             Long before the industry talked about Zero Trust, we were building it. <strong className="text-white font-medium">TripleDefence</strong> is the evolution of a decade-long doctrine: <span className="italic text-slate-300">protect the system, not the symptoms.</span> We provide visibility and control that doesn't blink.
          </motion.p>

          {/* Optional: Subtle signature/icon at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-slate-600"
          >
            <ShieldCheck size={32} strokeWidth={1} />
          </motion.div>
       </div>
    </section>
  );
};

export default Legacy;