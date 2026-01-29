import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, AlertCircle } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const data = [
    {
      feature: "Strategic Focus",
      trad: "Post-infiltration detection",
      td: "Upfront resilience engineering",
    },
    {
      feature: "Response Time",
      trad: "Reacts after alert/breach",
      td: "Neutralizes before manifestation",
    },
    {
      feature: "Visibility",
      trad: "Blind spots in complex layers",
      td: "Chasm-free (No architectural gaps)",
    },
    {
      feature: "Philosophy",
      trad: "Security by Reaction",
      td: "Protection by Design",
    },
    {
      feature: "Compliance (CRA)",
      trad: "Manual/Reactive documentation",
      td: "Native & Automated Governance",
    },
    {
      feature: "Result",
      trad: "Damage Mitigation",
      td: "Preemption & Strategic Peace",
    },
  ];

  return (
    <section className="bg-charcoal pb-32 pt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                The Paradigm <span className="text-neon-purple">Shift</span>.
            </h2>
            <p className="text-slate-400 font-light">
                Moving from endless alerts to absolute architectural control.
            </p>
        </div>

        {/* Table Container */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#050505] shadow-2xl"
        >
          {/* Table Header - HIDDEN ON MOBILE */}
          <div className="hidden md:grid grid-cols-12 bg-white/5 border-b border-white/10 text-sm font-bold tracking-widest uppercase">
            <div className="col-span-4 md:col-span-4 p-6 text-slate-400 flex items-center gap-2">
                Resource / Approach
            </div>
            <div className="col-span-4 md:col-span-4 p-6 text-slate-500 border-l border-white/5 flex items-center gap-2">
                <AlertCircle size={14} /> Traditional NDR
            </div>
            <div className="col-span-4 md:col-span-4 p-6 text-white bg-neon-purple/10 border-l border-neon-purple/20 flex items-center gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-purple shadow-[0_0_10px_#8b5cf6]" />
                <Shield size={14} className="text-neon-purple" /> TripleDefence
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {data.map((row, index) => (
              <div 
                key={index} 
                className="flex flex-col md:grid md:grid-cols-12 group hover:bg-white/[0.01] transition-colors"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 p-6 text-slate-200 font-medium text-lg md:text-base flex items-center bg-white/[0.02] md:bg-transparent">
                  {row.feature}
                </div>

                {/* Traditional Side */}
                <div className="md:col-span-4 p-6 text-slate-500 border-t md:border-t-0 md:border-l border-white/5 text-sm md:text-base flex flex-col justify-center relative">
                    {/* Mobile Only Label */}
                    <span className="md:hidden text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-slate-600">
                         <AlertCircle size={10} /> Traditional
                    </span>
                    <div className="flex items-start gap-3">
                         <X size={16} className="text-slate-700 mt-1 shrink-0" />
                         <span>{row.trad}</span>
                    </div>
                </div>

                {/* TripleDefence Side */}
                <div className="md:col-span-4 p-6 text-white border-t md:border-t-0 md:border-l border-neon-purple/20 bg-neon-purple/[0.03] text-sm md:text-base flex flex-col justify-center relative">
                    {/* Mobile Only Label */}
                    <span className="md:hidden text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2 text-neon-purple">
                         <Shield size={10} /> TripleDefence
                    </span>
                    <div className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-1 rounded-full shrink-0 mt-0.5">
                            <Check size={12} className="text-green-500" />
                        </div>
                        <span className="font-semibold text-slate-100">{row.td}</span>
                    </div>
                    
                    {/* Subtle Glow inside cell on hover */}
                    <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact Quote */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 text-center"
        >
            <p className="text-xl md:text-2xl font-display font-light text-slate-300">
                "Security promises safety. <span className="text-white font-medium">Protection proves it.</span> Don't wait for the damage to be done."
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonTable;