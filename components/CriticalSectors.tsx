import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface SectorProps {
  title: string;
  image: string;
  desc: string;
  index: number;
}

const SectorCard: React.FC<SectorProps> = ({ title, image, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="group relative h-[450px] overflow-hidden rounded-xl border border-white/10 bg-charcoal"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
      />
      {/* Heavy Overlay for Readability */}
      <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 h-full flex flex-col justify-between p-8">
      
      {/* Top Badge */}
      <div className="flex justify-between items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <ShieldCheck size={12} className="text-neon-purple" />
            <span className="text-[10px] font-mono font-bold text-slate-300 tracking-widest uppercase">
                Critical Class I & II Compliant
            </span>
        </div>
        <div className="p-2 rounded-full border border-white/20 text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Bottom Text */}
      <div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
          {title}
        </h3>
        <div className="h-[1px] w-12 bg-neon-purple mb-4 group-hover:w-full transition-all duration-500 ease-out" />
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm group-hover:text-slate-200 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  </motion.div>
);

const CriticalSectors: React.FC = () => {
  const sectors = [
    {
      title: "Finance & Data",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      desc: "Protected trading infrastructure and banking data centers. Resilience against high-frequency attacks and systemic risks.",
    },
    {
      title: "Manufacturing & OT",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      desc: "Robotics, SCADA, and Industrial IoT. Preventing production halts and ensuring safety in automated environments.",
    },
    {
      title: "Logistics & Transport",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      desc: "Port operations, rail grids, and autonomous fleets. Protecting the supply chain from disruption.",
    },
    {
      title: "Public Infrastructure",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
      desc: "Smart cities, power grids, and government services. Ensuring continuity for essential societal functions.",
    },
    {
      title: "Advanced Healthcare",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
      desc: "Connected medical devices and hospital networks. Protecting patient data and life-critical systems.",
    }
  ];

  return (
    <section id="sectors" className="py-32 bg-charcoal border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              Critical <span className="text-slate-500">Scope.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light">
              Industries where failure is not an option. We provide the architectural backbone for Class I & II products under the EU Cyber Resilience Act.
            </p>
          </div>
          
          <div className="hidden md:block pb-2">
             <div className="text-right text-xs font-mono text-slate-600 tracking-widest uppercase">
                Sector Coverage
             </div>
             <div className="h-[1px] w-32 bg-white/20 mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <SectorCard key={idx} {...sector} index={idx} />
          ))}
          
          {/* Last Card: Call to Action style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="group relative h-[450px] overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-center items-center text-center p-8 hover:border-neon-purple/30 transition-colors"
          >
             <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-neon-purple/10 group-hover:border-neon-purple/30 transition-all">
                <ArrowUpRight size={32} className="text-slate-400 group-hover:text-neon-purple transition-colors" />
             </div>
             <h3 className="font-display text-2xl font-bold text-white mb-2">Your Sector?</h3>
             <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8">
                TripleDefence adapts to any high-compliance environment.
             </p>
             <button className="px-6 py-3 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                Consult Experts
             </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CriticalSectors;