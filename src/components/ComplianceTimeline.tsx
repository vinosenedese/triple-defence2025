import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TimelineEvent: React.FC<{ date: string; title: string; desc: string; index: number }> = ({ date, title, desc, index }) => {
  return (
    <div className={`relative flex items-center mb-32 last:mb-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between w-full`}>
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`w-[42%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
      >
        <span className="text-neon-purple font-mono font-bold text-xs tracking-widest uppercase border border-neon-purple/30 bg-neon-purple/10 px-2 py-1 rounded mb-4 inline-block">{date}</span>
        <h3 className="text-3xl font-display font-bold text-white mt-2 mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </motion.div>

      {/* Center Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-6 h-6 bg-charcoal border border-slate-700 rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)]">
             <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const ComplianceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      date: "DEC 2024",
      title: "Entry into Force",
      desc: "Legislative text adopted. Start your Gap Analysis immediately to identify missing capabilities for Article 10 reporting."
    },
    {
      date: "SEP 2026",
      title: "Reporting Obligations",
      desc: "Article 11 applies: Manufacturers must report actively exploited vulnerabilities to ENISA within 24 hours of awareness."
    },
    {
      date: "DEC 2027",
      title: "Full Enforcement",
      desc: "Products cannot be placed on the EU market without CE marking, valid technical documentation, and completed conformity assessment procedures."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-charcoal">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-32">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Roadmap to Resilience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The regulatory clock is ticking. TripleDefence ensures you stay ahead of every deadline.
          </p>
        </div>

        {/* The Line Container - Removed 'hidden md:block' so it shows on mobile */}
        <div className="absolute left-1/2 top-48 bottom-0 w-0.5 bg-slate-900 -translate-x-1/2 block">
            {/* The Active Neon Line */}
            <motion.div 
                style={{ height }}
                className="w-full bg-gradient-to-b from-neon-purple via-purple-500 to-neon-red shadow-[0_0_15px_rgba(139,92,246,0.6)]"
            />
        </div>

        <div className="relative z-10">
          {events.map((event, index) => (
            <TimelineEvent key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceTimeline;