import React from 'react';
import { motion } from 'framer-motion';
import { Share2, ShieldCheck, Zap, Cpu, Lock, Network, ArrowRight } from 'lucide-react';

const BlueprintLine = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bg-neon-purple/20 ${className}`} />
);

const SatoEngine: React.FC = () => {
  return (
    <section id="sato-engine" className="relative bg-[#020202] py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf60d_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf60d_1px,transparent_1px)] bg-[size:8px_8px]" />
      </div>

      <BlueprintLine className="top-0 left-1/4 w-[1px] h-full" />
      <BlueprintLine className="top-0 right-1/4 w-[1px] h-full" />
      <BlueprintLine className="top-1/3 left-0 w-full h-[1px]" />
      <BlueprintLine className="bottom-1/3 left-0 w-full h-[1px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-[500px] mx-auto lg:mx-0 shadow-2xl"
          >
            <div className="absolute inset-0 border border-neon-purple/30 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-dashed border-neon-purple/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4/5 h-4/5 border border-white/10 rounded-full bg-neon-purple/5 backdrop-blur-3xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 2, opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 1,
                        ease: "easeOut" 
                      }}
                      className="absolute w-32 h-32 border border-neon-purple/40 rounded-full"
                    />
                  ))}
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                  <div className="w-20 h-20 bg-black border border-neon-purple rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                    <Share2 className="text-neon-purple w-10 h-10" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-white font-display font-bold text-2xl tracking-tighter mb-2">F.D.C PROTOCOL</h4>
                  <p className="text-neon-purple/80 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">Unidirectional Integrity</p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-black/85 border border-white/10 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-white tracking-widest uppercase font-bold">Input: Blocked | Output: Enabled</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-sm border border-neon-purple/40 bg-neon-purple/10">
                <Cpu size={14} className="text-neon-purple" />
                <span className="text-[10px] font-mono font-bold text-neon-purple tracking-[0.3em] uppercase">SATO Architecture v4.2</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none drop-shadow-md">
                Sovereign Autonomous <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-purple-300 to-indigo-400">Technology Operations</span>
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed font-normal drop-shadow-sm">
                Redefining the perimeter through architectural finality. SATO is not a security tool—it is the operation of unexploitable infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-[#050505] border border-white/10 rounded-xl hover:border-neon-purple/50 transition-all duration-500 group shadow-md"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-neon-purple/10 border border-neon-purple/20 rounded-lg text-neon-purple group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                    <Network size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight">F.D.C: Flying Dutch Connector</h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4 italic border-l-2 border-neon-purple/30 pl-4 font-medium drop-shadow-sm">
                      "Unidirectional Protection: If nothing can reach the device, nothing can exploit it. Data flows OUT, never IN."
                    </p>
                    <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                      Enforced by hardware-validated diodes. Zero inbound pathing ensures Article 14 compliance by proving the absence of attack vectors.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-[#050505] border border-white/10 rounded-xl hover:border-neon-purple/50 transition-all duration-500 group shadow-md"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-neon-purple/10 border border-neon-purple/20 rounded-lg text-neon-purple group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight">P.Q.E: Post-Quantum Encryption</h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4 italic border-l-2 border-neon-purple/30 pl-4 font-medium drop-shadow-sm">
                      "Future-Proof Today: Neutralizing quantum-era threats before they arrive. Your long-term secrets stay sovereign."
                    </p>
                    <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider">
                      Lattice-based cryptography integrated into the F.D.C stack. Protection against harvest-now-decrypt-later tactics.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                className="group flex items-center gap-3 px-8 py-4 bg-neon-purple text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 transition-all"
              >
                Request Technical Blueprint
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatoEngine;