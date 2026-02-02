import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-24 bg-charcoal z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                The TripleDefence Doctrine
            </h2>
            <div className="h-1 w-24 bg-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* White Doctrine */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative p-10 bg-[#080808] border border-white/10 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/50 transition-all duration-500" />
                
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <EyeOff size={24} />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">WHITE</span>
                    <span className="block text-sm font-sans font-light text-slate-500 mt-1 tracking-wide uppercase">(The Clarity of Invisibility)</span>
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg font-light">
                    A unified architecture with no seams. Present nothing of value to the observer. You cannot fight what you cannot define.
                </p>
            </motion.div>

            {/* Purple Doctrine */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="group relative p-10 bg-[#080808] border border-white/10 rounded-2xl hover:bg-neon-purple/[0.02] transition-colors duration-500"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent group-hover:via-neon-purple/70 transition-all duration-500" />

                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neon-purple/10 border border-neon-purple/30 text-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <Zap size={24} />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                    <span className="text-neon-purple drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">PURPLE</span>
                    <span className="block text-sm font-sans font-light text-slate-500 mt-1 tracking-wide uppercase">(The Power of Pre-emption)</span>
                </h3>

                <p className="text-slate-400 leading-relaxed text-lg font-light">
                    Shift from reactive brute force to proactive design. Predict and negate threats before they manifest. Protection by Design.
                </p>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;