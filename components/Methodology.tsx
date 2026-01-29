import React from 'react';
import { motion } from 'framer-motion';
import { Map, Grid, Rocket, Crown } from 'lucide-react';

const Step: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  isLast?: boolean; 
  delay: number;
}> = ({ number, title, desc, icon, isLast, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="relative flex flex-col flex-1 group"
  >
    {/* Connecting Line (Desktop) */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-[50%] right-[-50%] h-[1px] bg-slate-800 z-0">
        <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: "100%" }}
           transition={{ duration: 1, delay: delay + 0.5 }}
           className="h-full bg-neon-purple/30"
        />
      </div>
    )}

    {/* Connecting Line (Mobile) */}
    {!isLast && (
      <div className="lg:hidden absolute left-6 top-[3rem] bottom-[-2rem] w-[1px] bg-slate-800 z-0" />
    )}

    <div className="relative z-10 flex flex-row lg:flex-col items-start gap-6 lg:gap-0">
        {/* Number & Icon Container */}
        <div className="flex-shrink-0">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-charcoal border border-slate-800 rounded-full group-hover:border-neon-purple/50 transition-colors duration-500 mb-6 lg:mx-auto">
                <div className="text-slate-400 group-hover:text-neon-purple transition-colors duration-300">
                    {icon}
                </div>
                {/* Ping Effect for Govern */}
                {title === "GOVERN" && (
                    <div className="absolute inset-0 rounded-full border border-neon-purple/30 animate-ping opacity-20" />
                )}
            </div>
        </div>

        {/* Content */}
        <div className="lg:text-center pt-2 lg:pt-0 pb-8 lg:pb-0">
            <div className="flex items-center lg:justify-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-slate-600 tracking-widest">{number}</span>
                <div className="h-[1px] w-8 bg-slate-800 lg:hidden" />
            </div>
            
            <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight group-hover:text-neon-purple transition-colors duration-300">
                {title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs lg:mx-auto">
                {desc}
            </p>
        </div>
    </div>
  </motion.div>
);

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-charcoal border-t border-white/5 relative overflow-hidden">
        
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter"
          >
            From Idea to <span className="text-neon-purple">Strategic Peace</span>.
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light">
            A disciplined lifecycle approach to cyberprotection.
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between">
            
            <Step 
                number="01"
                title="DEFINE"
                icon={<Map size={24} />}
                desc="Mapping your digital footprint and conceptualizing the vision."
                delay={0.1}
            />

            <Step 
                number="02"
                title="DEVELOP"
                icon={<Grid size={24} />}
                desc="Designing the unified architecture and proactive strategy."
                delay={0.2}
            />

            <Step 
                number="03"
                title="DEPLOY"
                icon={<Rocket size={24} />}
                desc="Implementing the unseen shield and eliminating architectural chasms."
                delay={0.3}
            />

            <Step 
                number="04"
                title="GOVERN"
                icon={<Crown size={24} />}
                desc="Sustaining leadership through vPAC consultancy and continuous assurance."
                isLast={true}
                delay={0.4}
            />

        </div>
      </div>
    </section>
  );
};

export default Methodology;