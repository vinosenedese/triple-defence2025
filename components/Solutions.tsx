import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Users, Hexagon, Command, CheckCircle2, Cpu } from 'lucide-react';

const SolutionCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  desc: React.ReactNode; 
  icon: React.ReactNode; 
  delay: number;
  action?: React.ReactNode;
  featured?: boolean;
  onClick?: () => void;
}> = ({ title, subtitle, desc, icon, delay, action, featured, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    onClick={onClick}
    className={`group relative flex flex-col h-full transition-all duration-500 rounded-xl
      ${featured 
        ? 'bg-[#080510] border border-neon-purple shadow-[0_0_30px_rgba(139,92,246,0.15)] z-10 scale-[1.03]' 
        : 'bg-[#050505] border border-white/10 hover:border-white/20'
      }
      ${onClick ? 'cursor-pointer' : ''}
    `}
  >
    {/* Background Effects Container (Masked) */}
    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 group-hover:opacity-40 transition-opacity" />
        
        {/* Top Accent Line */}
        <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-500 
          ${featured ? 'via-neon-purple opacity-100' : 'group-hover:via-white/20'}`} 
        />
    </div>

    {/* Featured Badge - Protruding (Unmasked) */}
    {featured && (
      <div className="absolute top-0 inset-x-0 flex justify-center -mt-3.5 z-30">
         <div className="bg-neon-purple text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)] flex items-center gap-1 uppercase ring-4 ring-[#080510]">
            <CheckCircle2 size={12} />
            Article 14 Ready
         </div>
      </div>
    )}

    <div className="relative z-10 p-8 flex flex-col h-full">
      {/* Icon Header */}
      <div className="flex justify-between items-start mb-6 pt-2">
        <div className={`p-3 border transition-all rounded-lg
            ${featured 
              ? 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.2)]' 
              : 'bg-white/5 border-white/5 text-slate-300 group-hover:text-white group-hover:border-white/20'
            }`}>
          {icon}
        </div>
        <div className={`transition-opacity duration-500 ${featured ? 'opacity-100 text-neon-purple' : 'opacity-0 group-hover:opacity-100 text-slate-500'}`}>
            <Hexagon size={16} className="animate-spin-slow" />
        </div>
      </div>

      {/* Typography */}
      <h3 className="font-display text-2xl font-bold text-white mb-1 tracking-tight">
        {title}
      </h3>
      <span className={`text-xs font-mono uppercase tracking-widest mb-6 block opacity-80 ${featured ? 'text-neon-purple font-bold' : 'text-slate-500'}`}>
        {subtitle}
      </span>

      <div className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {desc}
      </div>

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

  const handleTechnicalToast = () => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: "Technical specifications for this module are restricted to partners." } }));
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* CARD 1: MUPP */}
          <SolutionCard 
            title="MUPP"
            subtitle="(The Architecture)"
            icon={<Layers size={24} />}
            desc="The Inevitable Wall. An intelligent abstraction layer that renders exploitation physically impossible. In the war of attrition, MUPP is the strategic high ground."
            delay={0.1}
            onClick={handleTechnicalToast}
          />

          {/* CARD 2: CRA-3D (FEATURED) */}
          <SolutionCard 
            title="CRA-3D"
            subtitle="(The Wizard) — Powered by Flying Dutch"
            icon={<Database size={24} />}
            desc={
              <>
                Integrated with Sovereign Infrastructure. Leveraging the <span className="text-white font-medium">IntraVox/Nextcloud</span> framework to enable anonymous, secure public links for documentation sharing. Proof without vendor lock-in.
                <br /><br />
                <span className="text-neon-purple font-bold">Independent by Design:</span> WebDAV, MySQL/PostgreSQL support.
              </>
            }
            delay={0.2}
            featured={true}
            action={
              <button 
                onClick={(e) => { e.stopPropagation(); handleDemoRequest(); }}
                className="group/btn w-full flex items-center justify-between px-4 py-3 bg-neon-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:bg-neon-purple/90 transition-all rounded-md"
              >
                <span className="text-xs font-bold tracking-widest uppercase">Launch Wizard Demo</span>
                <Command size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            }
          />

          {/* CARD 3: vPAC */}
          <SolutionCard 
            title="vPAC"
            subtitle="(The Consultancy)"
            icon={<Users size={24} />}
            desc="Chunk Workshop Approach: We decompose protection into manageable modules, delivering strategic hardening and consultancy that fits your operational pace. Strategic guidance to implement the TripleDefence doctrine."
            delay={0.3}
            onClick={handleTechnicalToast}
          />

        </div>
      </div>
    </section>
  );
};

export default Solutions;