import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, RefreshCw, Shield, Zap } from 'lucide-react';

const MuppEngine: React.FC = () => {
  return (
    <section id="mupp" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Label */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold tracking-widest uppercase mb-8"
        >
          The Solution: CRA-3D
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-indigo-400">MUPP</span> Engine
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The <strong>Multi-Use Protection Platform (MUPP)</strong> is a revolutionary approach to endpoint protection. It provides an unhackable layer that guarantees <span className="text-white font-medium">SL4 protection levels</span> while automating 90% of CRA compliance tasks.
            </p>

            <div className="space-y-6">
              {[
                { 
                  title: "Real-time Monitoring", 
                  desc: "Deep packet inspection and behavioral analysis at the edge to mitigate vulnerability abuse instantly." 
                },
                { 
                  title: "SBOM Generation", 
                  desc: "Automated, accurate Software Bill of Materials for full visibility into every digital component." 
                },
                { 
                  title: "ENISA Reporting", 
                  desc: "One-click automated reporting for exploited vulnerabilities, meeting the 24h deadline." 
                },
                { 
                  title: "Reset-to-Safe-State", 
                  desc: "Instant recovery to last known compliant configuration upon threat detection." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                     <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CRA-3D Highlight Box */}
            <div id="cra3d" className="mt-12 p-6 bg-slate-900/50 border-l-4 border-neon-purple rounded-r-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                    <RefreshCw className="w-5 h-5 text-neon-purple animate-spin-slow" />
                    <h3 className="text-white font-bold">CRA-3D Compliance</h3>
                </div>
                <p className="text-slate-400 text-sm">
                    Updates must be delivered securely, free of charge, and available for at least <strong>5 years</strong>. 
                    CRA-3D turns this requirement into a disciplined, predictable process.
                </p>
            </div>
          </motion.div>

          {/* Right Column: Visual (The Clock/Scanner Concept) */}
          <div className="relative h-[500px] w-full">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative h-full w-full bg-black rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group"
            >
                {/* Background Image / Texture */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity"></div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                {/* The "Clock" / Scanner Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                         {/* Rings */}
                         <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
                         <div className="absolute inset-4 border border-neon-purple/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute inset-8 border border-white/5 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                         
                         {/* Center Core */}
                         <div className="absolute inset-0 m-auto w-32 h-32 bg-neon-purple/10 rounded-full blur-xl animate-pulse"></div>
                         <div className="absolute inset-0 m-auto flex flex-col items-center justify-center text-center z-10">
                            <span className="text-4xl font-display font-bold text-white">SL4</span>
                            <span className="text-[10px] tracking-widest text-neon-purple uppercase">Protection</span>
                         </div>
                         
                         {/* Scanning Line */}
                         <div className="absolute inset-0 m-auto w-full h-[2px] bg-neon-purple/50 shadow-[0_0_15px_rgba(139,92,246,0.8)] animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

                {/* Floating Status Badge */}
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-md border border-green-500/30 px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-green-400 font-bold text-sm tracking-wide">COMPLIANT</div>
                    <div className="text-slate-500 text-[10px] uppercase">Protection Level: SL4</div>
                </div>

                {/* Bottom Console Text */}
                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur border border-white/10 rounded-full px-4 py-2 flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-white tracking-wider">ANALYZING TRAFFIC...</span>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MuppEngine;