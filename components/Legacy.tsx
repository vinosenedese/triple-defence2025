import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database, Unlock } from 'lucide-react';

const Legacy: React.FC = () => {
  return (
    <section id="legacy" className="py-32 bg-black relative overflow-hidden border-t border-white/10">
       
       {/* Background Ambience */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-white/10 to-transparent" />
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[100px]" />
       </div>

       <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-12"
          >
              <ShieldCheck size={14} className="text-slate-400" />
              <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">Est. 2012</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter leading-tight"
          >
            OPERATIONAL ZERO TRUST <br/> PIONEERS SINCE 2012.
          </motion.h2>

          {/* Divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-neon-purple rounded-full mb-12"
          />

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-20"
          >
             Long before the industry talked about Zero Trust, we were building it. <strong className="text-white font-medium">TripleDefence</strong> is the evolution of a decade-long doctrine: <span className="italic text-slate-300">protect the system, not the symptoms.</span>
          </motion.p>

          {/* Independent by Design Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left"
          >
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-neon-purple/30 transition-all duration-500">
               <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-neon-purple">
                  <Unlock size={20} />
               </div>
               <h4 className="text-white font-bold text-lg mb-3 tracking-tight">Independent by Design</h4>
               <p className="text-slate-500 text-sm leading-relaxed">
                  We offer real exit options. No proprietary traps. Migrate using open protocols like WebDAV at any time. Our commitment to your sovereignty is absolute.
               </p>
            </div>

            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-neon-purple/30 transition-all duration-500">
               <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-neon-purple">
                  <Database size={20} />
               </div>
               <h4 className="text-white font-bold text-lg mb-3 tracking-tight">Data Sovereignty</h4>
               <p className="text-slate-500 text-sm leading-relaxed">
                  Your data remains yours. Accessible via open APIs and standard databases (MySQL/PostgreSQL). Built on modular frameworks to ensure zero vendor lock-in.
               </p>
            </div>
          </motion.div>
       </div>
    </section>
  );
};

export default Legacy;