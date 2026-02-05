import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, ArrowRight, Lock, Zap, Server, Activity, AlertTriangle, EyeOff, TrendingDown, Map, Cpu, Rocket } from 'lucide-react';

const PrincipleItem: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number }> = ({ title, desc, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
    className="flex items-start gap-4 mb-8 group"
  >
    <div className="p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/30 text-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:bg-neon-purple group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-neon-purple transition-colors uppercase tracking-widest">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ChallengeItem: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number }> = ({ title, desc, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
    className="flex flex-row-reverse md:flex-row items-start gap-4 mb-8 group text-right md:text-left"
  >
    <div className="md:order-1 flex-1">
      <h4 className="text-slate-300 font-bold text-lg mb-1 group-hover:text-neon-red transition-colors">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="md:order-[-1] p-3 rounded-lg bg-neon-red/5 border border-neon-red/10 text-neon-red/60 group-hover:text-neon-red group-hover:border-neon-red/40 transition-all duration-300">
      {icon}
    </div>
  </motion.div>
);

const TripleDDoctrine: React.FC = () => {
  return (
    <section id="doctrine" className="relative bg-[#020202] py-32 overflow-hidden">
      
      {/* Background Split */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-full md:w-1/2 h-full bg-gradient-to-r from-neon-purple/[0.03] to-transparent" />
        <div className="w-full md:w-1/2 h-full bg-gradient-to-l from-neon-red/[0.03] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Central Conflict Visual (Mobile: Top, Desktop: Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:flex items-center justify-center opacity-30">
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-[500px] h-[500px]"
            >
                {/* The Fire (Back) */}
                <div className="absolute inset-0 flex items-center justify-center translate-x-10">
                    <div className="w-64 h-64 bg-neon-red/20 rounded-full blur-[80px]" />
                    <Flame className="w-96 h-96 text-neon-red/10 animate-pulse" />
                </div>
                {/* The Shield (Front) */}
                <div className="absolute inset-0 flex items-center justify-center -translate-x-10">
                    <Shield className="w-96 h-96 text-neon-purple/20 fill-black/50 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
                </div>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 relative z-10">
            
            {/* LEFT SIDE: THE TRIPLE D MODEL (The Solution) */}
            <div className="relative">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-b border-neon-purple/30 pb-4 inline-block"
                >
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                        Become Sovereign: <span className="text-neon-purple">The Triple D Doctrine</span>
                    </h3>
                </motion.div>

                <div className="space-y-2">
                    <PrincipleItem 
                        index={0}
                        title="DEFINE"
                        desc="Build a complete truth map of your digital estate. No blind spots before the CRA finds them."
                        icon={<Map size={20} />}
                    />
                    <PrincipleItem 
                        index={1}
                        title="DEVELOP"
                        desc="Architectural protection via unidirectional connectivity. Zero-day immunity through strict directional control."
                        icon={<Cpu size={20} />}
                    />
                    <PrincipleItem 
                        index={2}
                        title="DEPLOY"
                        desc="Operationalize compliance with EU-only regimes and deterministic evidence. No more firefighting."
                        icon={<Rocket size={20} />}
                    />
                </div>
            </div>

            {/* RIGHT SIDE: CHALLENGES (The Problem) */}
            <div className="relative md:text-left">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-b border-neon-red/30 pb-4 inline-block md:ml-auto md:mr-0 w-full md:w-auto text-left md:text-right"
                >
                    <h3 className="font-display text-2xl font-bold text-slate-400 tracking-wide">
                        The Siege: <span className="text-neon-red">Legacy Vulnerabilities</span>
                    </h3>
                    <span className="text-xs font-mono text-neon-red/70 uppercase tracking-widest">The Regulatory Risk</span>
                </motion.div>

                <div className="space-y-2">
                    <ChallengeItem 
                        index={0}
                        title="The Assumption of Detection"
                        desc="A fragile model relying on catching the attacker *after* entry. In a CRA world, this is a liability."
                        icon={<EyeOff size={20} />}
                    />
                    <ChallengeItem 
                        index={1}
                        title="Collapsing SOC Costs"
                        desc="Traditional monitoring burns budget on false positives and forensic analysis of unpreventable breaches."
                        icon={<TrendingDown size={20} />}
                    />
                    <ChallengeItem 
                        index={2}
                        title="Pervasive Alert Fatigue"
                        desc="When everything is an alert, nothing is. TripleDefence removes the noise by removing the attack surface."
                        icon={<Activity size={20} />}
                    />
                    <ChallengeItem 
                        index={3}
                        title="Operationally Crippling Zero-Days"
                        desc="Patching panic cycles disrupt operations. We remove the urgency by neutralizing the vector."
                        icon={<AlertTriangle size={20} />}
                    />
                </div>
            </div>

        </div>

        {/* THE BOTTOM LINE */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-24 text-center relative z-20"
        >
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-neon-red/20 via-transparent to-neon-purple/20">
                <div className="bg-[#080808] border border-white/10 rounded-xl px-8 py-10 md:px-16">
                    <p className="font-display text-xl md:text-3xl font-light text-slate-300 leading-relaxed">
                        "While others triage the damage, we ensure <span className="text-white font-bold underline decoration-neon-purple decoration-2 underline-offset-4">the attack path never exists</span>."
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TripleDDoctrine;