import React from 'react';
import { motion } from 'framer-motion';

const StrategicPositioning: React.FC = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Background Subtle elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-slate-500 uppercase">
            The TripleDefence Advantage
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto p-12 md:p-20 border border-white/10 rounded-sm bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_0_50px_rgba(0,0,0,1)]"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

          <div className="flex flex-col gap-10">
            <h3 className="font-display text-2xl md:text-4xl text-slate-300 font-light leading-tight">
              TripleDefence transforms CRA compliance from:
            </h3>
            
            <div className="space-y-4">
              <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold italic text-slate-600 line-through decoration-neon-red/40 decoration-2">
                "Detect and report exploitation under <span className="text-slate-500 line-through decoration-neon-red/60">uncertainty</span>"
              </p>
              
              <div className="flex items-center justify-center py-4">
                <div className="h-[1px] w-12 bg-neon-purple/50" />
                <span className="px-4 font-mono text-xs text-neon-purple font-bold tracking-widest">INTO</span>
                <div className="h-[1px] w-12 bg-neon-purple/50" />
              </div>

              <p className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-none">
                "Reducing threat abuse by <br />
                <span className="text-neon-purple drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  pulverizing threat access
                </span>"
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            This is the strongest regulatory position any manufacturer can take. We move you from reactive reporting to <span className="text-white font-medium">architectural sovereignty</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicPositioning;