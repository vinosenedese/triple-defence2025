import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Users, ArrowRight, Hexagon, Command } from 'lucide-react';

const SolutionCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  desc: string; 
  icon: React.ReactNode; 
  delay: number;
  action?: React.ReactNode;
}> = ({ title, subtitle, desc, icon, delay, action }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="group relative flex flex-col h-full bg-[#050505] border border-white/10 hover:border-white/20 transition-colors duration-500 overflow-hidden"
  >
    {/* Subtle Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 group-hover:opacity-40 transition-opacity" />
    
    {/* Top Accent Line */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-neon-purple/50 transition-all duration-500" />

    <div className="relative z-10 p-8 flex flex-col h-full">
      {/* Icon Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white/5 border border-white/5 text-slate-300 group-hover:text-white group-hover:border-white/20 transition-all rounded-none">
          {icon}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-neon-purple">
            <Hexagon size={16} className="animate-spin-slow" />
        </div>
      </div>

      {/* Typography */}
      <h3 className="font-display text-2xl font-bold text-white mb-1 tracking-tight">
        {title}
      </h3>
      <span className="text-xs font-mono text-neon-purple uppercase tracking-widest mb-6 block opacity-80">
        {subtitle}
      </span>

      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {desc}
      </p>

      {/* Action Area */}
      <div className="mt-auto pt-6 border-t border-white/5">
        {action ? (
          action
        ) : (
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
            <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-neon-purple transition-colors" />
            Integration Ready
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Solutions: React.FC = () => {
  const handleDemoRequest = () => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: "Wizard Demo requested. Sales team will contact you." } }));
  };

  return (
    <section id="solutions" className="py-32 bg-charcoal relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 md:flex md:items-end md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              Total <span className="text-neon-purple">Sovereignty</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Three pillars of the TripleDefence ecosystem. Designed for absolute architectural control and automated compliance.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="hidden md:block text-right"
          >
             <div className="font-mono text-xs text-slate-600 mb-2">SYSTEM STATUS</div>
             <div className="flex items-center gap-2 text-green-500 font-mono text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                OPERATIONAL
             </div>
          </motion.div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          
          {/* CARD 1: MUPP */}
          <SolutionCard 
            title="MUPP"
            subtitle="(The Architecture)"
            icon={<Layers size={24} />}
            desc="The intelligent abstraction layer. Unifying your entire security ecosystem into a single, cohesive operational language. Transcendence, not just integration."
            delay={0.1}
          />

          {/* CARD 2: CRA-3D */}
          <SolutionCard 
            title="CRA-3D"
            subtitle="(The Wizard)"
            icon={<Database size={24} />}
            desc="The ultimate reporting and incident management assistant. A structured, audit-proof vault for inventories, risk assessments, and compliance evidence. Ready for Article 14."
            delay={0.2}
            action={
              <button 
                onClick={handleDemoRequest}
                className="group/btn w-full flex items-center justify-between px-4 py-3 bg-neon-purple/10 border border-neon-purple/30 hover:bg-neon-purple/20 hover:border-neon-purple/50 transition-all"
              >
                <span className="text-xs font-bold text-white tracking-widest uppercase">Request Wizard Demo</span>
                <Command size={14} className="text-neon-purple group-hover/btn:text-white transition-colors" />
              </button>
            }
          />

          {/* CARD 3: vPAC */}
          <SolutionCard 
            title="vPAC"
            subtitle="(The Consultancy)"
            icon={<Users size={24} />}
            desc="Virtual Protection Assurance Consultancy. Strategic guidance to implement the TripleDefence doctrine, ensuring technical sovereignty and measurable resilience."
            delay={0.3}
          />

        </div>
      </div>
    </section>
  );
};

export default Solutions;