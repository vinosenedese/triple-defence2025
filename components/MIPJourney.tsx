import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface StepProps {
  id: string;
  title: string;
  desc: string;
  index: number;
}

const StepCard: React.FC<StepProps> = ({ id, title, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col group"
    >
      {/* Connector Line (Horizontal for desktop) */}
      <div className="hidden lg:block absolute top-6 left-8 right-[-2rem] h-[1px] bg-white/5 z-0" />
      
      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8 rounded-xl border border-white/5 bg-[#050505] hover:border-neon-purple/30 hover:bg-white/[0.02] transition-all duration-500">
        
        {/* Number */}
        <div className="flex justify-between items-start mb-6">
          <span className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-transparent group-hover:from-neon-purple group-hover:to-purple-900 transition-all duration-500">
            {id}
          </span>
          <div className="p-1 rounded-full bg-white/5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
             <ChevronRight size={14} />
          </div>
        </div>

        {/* Text */}
        <h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed font-light">
          {desc}
        </p>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
      </div>

      {/* Mobile Connector (Vertical) */}
      <div className="lg:hidden absolute left-1/2 bottom-[-1.5rem] h-6 w-[1px] bg-white/10 last:hidden" />
    </motion.div>
  );
};

const MIPJourney: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Strategic Intake",
      desc: "Understanding your mission goals, digital estate, and specific CRA/NIS2 obligations."
    },
    {
      id: "02",
      title: "Footprint Mapping",
      desc: "Identifying every asset, dependency, and 'architectural chasm' in your current environment."
    },
    {
      id: "03",
      title: "Doctrine Design",
      desc: "Creating the unified 'White' architecture blueprint. No seams, no topographical maps for attackers."
    },
    {
      id: "04",
      title: "Pre-emptive Hardening",
      desc: "Implementing 'Purple' intelligence. Designing out vulnerabilities before they can be exploited."
    },
    {
      id: "05",
      title: "Wizard Deployment",
      desc: "Activating the CRA-3D Wizard for automated Article 14 reporting and evidence management."
    },
    {
      id: "06",
      title: "Assurance & Validation",
      desc: "Generating the Audit-Proof Evidence Vault and obtaining measurable resilience metrics."
    },
    {
      id: "07",
      title: "Strategic Peace",
      desc: "Entering the continuous protection cycle. Winning without fighting through superior design."
    }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="mip" className="bg-charcoal py-32 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px] w-10 bg-neon-purple" />
            <span className="text-neon-purple font-mono text-xs tracking-widest uppercase font-bold">The Pathway</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white max-w-2xl"
          >
            Modular Implementation <br/> <span className="text-slate-500">Pathway (MIP)</span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 mb-20">
          {steps.map((step, index) => (
            <StepCard 
              key={step.id} 
              {...step} 
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <button 
            onClick={handleScrollToContact}
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Ready to start Step 01? Schedule a Strategic Intake</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default MIPJourney;