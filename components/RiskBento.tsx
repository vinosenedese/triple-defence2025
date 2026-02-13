import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Ban, AlertOctagon, Zap } from 'lucide-react';

const Card: React.FC<{ children: React.ReactNode; className?: string; delay?: number; variant?: 'red' | 'default' }> = ({ children, className, delay = 0, variant = 'default' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative group p-8 overflow-hidden rounded-xl backdrop-blur-sm border transition-all duration-500 shadow-lg
        ${variant === 'red' 
          ? 'bg-gradient-to-br from-neon-red/10 to-transparent border-neon-red/30 shadow-[inset_0_0_30px_rgba(239,68,68,0.1)] hover:border-neon-red/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]' 
          : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/60'
        } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

const RiskBento: React.FC = () => {
  return (
    <section id="risk" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          <span className="text-neon-red drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">Non-Compliance</span> is Not an Option.
        </h2>
        <p className="text-slate-200 text-lg max-w-xl leading-relaxed font-medium drop-shadow-sm">
          The Cyber Resilience Act introduces penalties capable of bankrupting non-compliant manufacturers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
        
        {/* Card 1: Essential Components (High Risk) */}
        <Card className="md:col-span-2 md:row-span-2" delay={0.1} variant="red">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-neon-red/20 rounded-lg border border-neon-red/20 shadow-sm">
              <AlertTriangle className="w-6 h-6 text-neon-red" />
            </div>
            <span className="font-mono text-[10px] font-bold text-neon-red border border-neon-red/30 bg-neon-red/5 px-2 py-1 rounded tracking-widest uppercase">
              ESSENTIAL REQUIREMENTS
            </span>
          </div>
          <div className="mt-12">
            <h3 className="text-7xl md:text-8xl font-display font-bold text-white mb-4 tracking-tighter drop-shadow-md">
              €15M
            </h3>
            <p className="text-2xl text-slate-100 mb-6 font-bold">
              or <span className="text-neon-red">2.5%</span> of Global Turnover
            </p>
            <p className="text-base text-slate-200 leading-relaxed max-w-md border-l-2 border-neon-red/50 pl-4 font-medium drop-shadow-sm">
              Applied for failure to meet core cyberprotection requirements or conformity assessments. Targets manufacturers of products with digital elements.
            </p>
          </div>
          <div className="mt-auto w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
              className="h-full bg-gradient-to-r from-neon-red to-orange-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            />
          </div>
        </Card>

        {/* Card 2: Reporting Obligations */}
        <Card className="md:col-span-1 md:row-span-1" delay={0.2}>
           <div className="flex justify-between items-start">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm">
              <AlertOctagon className="w-6 h-6 text-white" />
            </div>
            <span className="font-mono text-[10px] text-slate-300 font-bold uppercase tracking-wider">VIOLATION OF OBLIGATIONS</span>
          </div>
          <div className="mt-auto">
             <h3 className="text-5xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-md">€10M</h3>
             <p className="text-sm text-slate-100 font-bold">or 2% of Turnover</p>
             <p className="mt-3 text-sm text-slate-200 leading-relaxed font-medium drop-shadow-sm">
               For breaches of other obligations, such as failure to report vulnerabilities or incidents to ENISA.
             </p>
          </div>
        </Card>

        {/* Card 3: Incorrect Information */}
        <Card className="md:col-span-1 md:row-span-1" delay={0.3}>
           <div className="flex justify-between items-start">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm">
              <Ban className="w-6 h-6 text-slate-200" />
            </div>
            <span className="font-mono text-[10px] text-slate-300 font-bold uppercase tracking-wider">MISREPRESENTATION</span>
          </div>
          <div className="mt-auto">
             <h3 className="text-5xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-md">€5M</h3>
             <p className="text-sm text-slate-100 font-bold">or 1% of Turnover</p>
             <p className="mt-3 text-sm text-slate-200 leading-relaxed font-medium drop-shadow-sm">
               Providing incorrect, incomplete, or misleading information to market surveillance authorities.
             </p>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 text-[10px] font-mono text-slate-400 tracking-widest font-bold uppercase">
        <span>SOURCE: REGULATION (EU) 2024/1183</span>
        <span className="flex items-center gap-2 text-neon-red">
            <Zap className="w-3 h-3 fill-current" />
            RISK ASSESSMENT: CRITICAL
        </span>
      </div>
    </section>
  );
};

export default RiskBento;