import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, EyeOff, BellOff, ShieldCheck, Binary, FileCheck, Crown, Quote } from 'lucide-react';

const DoctrineItem: React.FC<{ 
  id: string; 
  title: string; 
  quote: string; 
  icon: React.ReactNode; 
  index: number;
  isLast?: boolean;
}> = ({ id, title, quote, icon, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 border-b border-white/5 ${isLast ? 'border-none bg-white/[0.02] rounded-xl mt-8' : ''}`}
  >
    {/* Numbering */}
    <div className="flex-shrink-0">
      <span className="font-display text-4xl font-bold text-white/10 group-hover:text-neon-purple/50 transition-colors duration-500">
        {id}
      </span>
    </div>

    {/* Icon (Mobile hidden, Desktop visible) */}
    <div className={`hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-full border ${isLast ? 'bg-neon-purple text-white border-neon-purple' : 'bg-transparent border-white/10 text-slate-500 group-hover:border-neon-purple/50 group-hover:text-neon-purple'} transition-all duration-300`}>
        {icon}
    </div>

    {/* Content */}
    <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-full">
        {/* Title */}
        <div className="flex items-center">
            <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-wide ${isLast ? 'text-white' : 'text-slate-200 group-hover:text-white'} transition-colors`}>
                {title}
            </h3>
        </div>

        {/* The "Sun Tzu" Quote */}
        <div className="relative pl-6 border-l-2 border-neon-purple/30 group-hover:border-neon-purple transition-colors">
            <p className={`font-serif text-lg md:text-xl italic leading-relaxed ${isLast ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                "{quote}"
            </p>
        </div>
    </div>
  </motion.div>
);

const TripleDDoctrine: React.FC = () => {
  const principles = [
    {
      id: "01",
      title: "Unidirectional Connectivity",
      quote: "If nothing can reach the device, nothing can exploit it.",
      icon: <ArrowRight size={20} />
    },
    {
      id: "02",
      title: "Physical Isolation",
      quote: "Physical camouflage of attack surfaces. No inbound paths, no ghosts to chase.",
      icon: <EyeOff size={20} />
    },
    {
      id: "03",
      title: "Zero Inbound Alerts",
      quote: "Protection becomes peaceful. There is nothing to alert on.",
      icon: <BellOff size={20} />
    },
    {
      id: "04",
      title: "Zero-Day Immunity",
      quote: "Zero-days still exist, but exploitation is physically impossible.",
      icon: <ShieldCheck size={20} />
    },
    {
      id: "05",
      title: "Deterministic Security",
      quote: "No more probabilistic guesses. Security becomes binary and measurable.",
      icon: <Binary size={20} />
    },
    {
      id: "06",
      title: "CRA Reporting Reframed",
      quote: "From 'detect and report' to 'proving the path simply doesn't exist'.",
      icon: <FileCheck size={20} />
    },
    {
      id: "07",
      title: "Strategic Conclusion",
      quote: "When exploitation is impossible, compliance becomes the easiest part of your job.",
      icon: <Crown size={20} />
    }
  ];

  return (
    <section id="doctrine" className="relative bg-[#020202] py-32 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/10 via-transparent to-transparent" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/5"
          >
             <Quote size={12} className="text-neon-purple" />
             <span className="text-[10px] font-mono font-bold text-neon-purple uppercase tracking-widest">
                The Seven Pillars
             </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
          >
            Battlefield <span className="text-slate-500">Mastery.</span>
          </motion.h2>
          <p className="font-serif italic text-slate-400 text-lg max-w-2xl mx-auto">
            "The supreme art of war is to subdue the enemy without fighting."
          </p>
        </div>

        {/* The List */}
        <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {principles.map((p, idx) => (
                <DoctrineItem 
                    key={p.id}
                    {...p}
                    index={idx}
                    isLast={idx === principles.length - 1}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default TripleDDoctrine;