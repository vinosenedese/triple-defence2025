import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Activity, ShieldCheck } from 'lucide-react';

interface BlockProps {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay: number;
}

const Block: React.FC<BlockProps> = ({ id, title, desc, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="relative bg-[#050505] p-8 md:p-10 group h-full flex flex-col"
  >
    {/* Large Discrete Number */}
    <span className="absolute top-2 right-6 text-6xl font-display font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
      {id}
    </span>

    {/* Icon */}
    <div className="mb-8 text-slate-300 group-hover:text-neon-purple transition-colors duration-300">
      {icon}
    </div>

    {/* Content */}
    <div className="relative z-10 mt-auto">
      <h3 className="text-white font-bold text-lg mb-4 tracking-tight group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-7 font-light">
        {desc}
      </p>
    </div>

    {/* Hover Bottom Line */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-purple transition-all duration-300 group-hover:w-full" />
  </motion.div>
);

const AttentionBlocks: React.FC = () => {
  const blocks = [
    {
      id: "01",
      title: "DASI - Digital Architecture Integration",
      desc: "Eliminate architectural chasms. We fuse policy, visibility, and enforcement into a single operational heartbeat, ensuring no silent spaces for adversaries to exploit.",
      icon: <Shield size={32} strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "Incident & Reporting Tool",
      desc: "Automated Article 14 compliance. A direct bridge to ENISA for exploited vulnerabilities, ensuring you meet the 24h/72h reporting deadlines effortlessly.",
      icon: <FileText size={32} strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "Operational Efficiency & Peace",
      desc: "Win without fighting. Reduction of alert fatigue and 30-50% operational cost reduction by replacing reactive firefighting with proactive design.",
      icon: <Activity size={32} strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "Compliance & Visibility Readiness",
      desc: "Audit-proof evidence vault. Real-time tracking of tasks and automated SBOM generation. Gain absolute control over your digital estate and regulatory obligations.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-charcoal pt-24 pb-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 
            Grid Container
            Using gap-px with a white/10 background creates perfect 1px borders between the black cards.
            This is cleaner than using border-r/border-b on individual items.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {blocks.map((block, index) => (
            <Block 
              key={block.id}
              {...block}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttentionBlocks;