import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, ArrowRight, Terminal, Flame, Activity } from 'lucide-react';

const ZeroDayFeed: React.FC = () => {
  const handleNeutralize = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
  };

  const exploits = [
    {
      title: "CentOS 9: Critical Privilege Escalation",
      desc: "Privilege escalation bypass found in the wild. Exploitation trivial via unpatched kernel modules.",
      severity: "CRITICAL",
      cve: "CVE-2026-0042"
    },
    {
      title: "Ivanti Connect Secure",
      desc: "New auth bypass exploitation stacking up. Adversaries chaining bugs to bypass MFA completely.",
      severity: "HIGH",
      cve: "CVE-2026-1193"
    }
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden border-y border-neon-red/20">
      
      {/* Background Red Pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_70%)] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440a_1px,transparent_1px),linear-gradient(to_bottom,#ef44440a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center mb-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-neon-red border border-neon-red/50 px-4 py-1 rounded bg-neon-red/10 mb-6 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.4)]"
            >
                <Flame size={14} className="fill-neon-red" />
                <span className="font-mono text-xs font-bold tracking-widest uppercase">Live Threat Intelligence</span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                CRITICAL EXPLOIT STACK - <span className="text-neon-red drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">[FEBRUARY 2026]</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4">
                 <Activity className="text-neon-red animate-bounce" size={24} />
                 <p className="font-mono text-xl md:text-2xl text-white tracking-tighter">
                    ZERO-DAYS DETECTED THIS MONTH: <span className="text-4xl md:text-5xl font-bold text-neon-red">12</span>
                </p>
            </div>
        </div>

        {/* The Formula */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-[#0f0505] border border-neon-red/30 p-6 rounded-xl shadow-[inset_0_0_30px_rgba(239,68,68,0.1)]"
        >
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 font-mono text-sm md:text-lg">
                <span className="text-white font-bold opacity-80">CyberRisk</span>
                <span className="text-slate-500">=</span>
                <span className="text-neon-red font-bold animate-pulse">Threat</span>
                <span className="text-slate-500">×</span>
                <span className="text-neon-red font-bold animate-pulse delay-75">Vulnerability</span>
                <span className="text-slate-500">×</span>
                <span className="text-neon-red font-bold animate-pulse delay-150">Impact</span>
            </div>
            <p className="text-center text-[10px] text-neon-red/60 uppercase tracking-widest mt-4">
                We eliminate the vulnerability variable -> Risk drops to zero
            </p>
        </motion.div>

        {/* The Stack */}
        <div className="relative w-full max-w-2xl min-h-[300px] flex flex-col items-center justify-start pt-10">
            {exploits.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: index * 40, opacity: 1 - (index * 0.15), scale: 1 - (index * 0.05) }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute top-0 w-full bg-[#0a0000] border border-neon-red shadow-[0_0_20px_rgba(239,68,68,0.15)] p-6 rounded-xl flex items-start gap-4"
                    style={{ zIndex: 10 - index }}
                >
                    <div className="p-3 bg-neon-red/10 rounded border border-neon-red/30 text-neon-red shrink-0">
                        <AlertTriangle size={24} />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-bold text-lg font-display tracking-tight">{item.title}</h3>
                            <span className="bg-neon-red text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest animate-pulse">
                                {item.severity}
                            </span>
                        </div>
                        <p className="text-neon-red/80 text-sm font-mono leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                             <Terminal size={12} />
                             <span>ID: {item.cve}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
             {/* Fake 3rd card for depth */}
             <div className="absolute top-0 translate-y-20 scale-90 w-[95%] h-24 bg-neon-red/5 border border-neon-red/20 rounded-xl -z-10" />
        </div>

        {/* CTA */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-28 md:mt-12"
        >
            <button 
                onClick={handleNeutralize}
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm transition-all duration-300"
            >
                <div className="absolute inset-0 border border-neon-red group-hover:bg-neon-red transition-all duration-300" />
                <div className="absolute inset-0 bg-neon-red/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <span className="relative z-10 flex items-center gap-3 text-sm font-bold tracking-widest text-white uppercase group-hover:text-black transition-colors">
                    <Zap size={16} className="fill-white group-hover:fill-black transition-colors" />
                    Neutralize these vectors
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
            </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ZeroDayFeed;