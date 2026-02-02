import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Lock } from 'lucide-react';

interface FeedItemProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  index: number;
}

const FeedItem: React.FC<FeedItemProps> = ({ category, date, title, excerpt, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex flex-col bg-[#050505] border border-white/10 p-8 rounded-sm hover:border-neon-purple/30 transition-all duration-300 h-full cursor-pointer"
    onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'insights' }))}
  >
    {/* Top Meta */}
    <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
      <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${category === 'SOVEREIGN HAZE' ? 'text-neon-purple' : 'text-slate-500'}`}>
        [{category}]
      </span>
      <span className="font-mono text-[10px] text-slate-600 tracking-widest">
        {date}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-display text-xl text-slate-200 font-bold leading-tight mb-4 group-hover:text-white transition-colors">
      {title}
    </h3>

    {/* Excerpt */}
    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">
      {excerpt}
    </p>

    {/* Footer Action */}
    <div className="mt-auto flex items-center gap-2 text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider group-hover:text-neon-purple transition-colors">
      <FileText size={12} />
      <span>Read Briefing</span>
      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </motion.div>
);

const DoctrineFeed: React.FC = () => {
  const handleViewAll = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'insights' }));
  };

  const items = [
    {
      category: "SOVEREIGN HAZE",
      date: "OCT 14, 2024",
      title: "Unidirectional Connectivity: The End of SOC Cost Inflation",
      excerpt: "Why traditional monitoring burns budget on false positives and how physical isolation restores economic sanity to cyber defense.",
    },
    {
      category: "COMPLIANCE",
      date: "SEP 28, 2024",
      title: "Why SharePoint is a Liability in the CRA Era",
      excerpt: "The architectural flaws of collaborative platforms when facing strict Article 14 reporting requirements and data sovereignty mandates.",
    },
    {
      category: "TECHNICAL",
      date: "AUG 02, 2024",
      title: "The Byzantine Fault Problem in Modern Detection Systems",
      excerpt: "Mathematical proof that probabilistic detection cannot guarantee security in distributed critical infrastructure.",
    }
  ];

  return (
    <section className="py-32 bg-charcoal border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
             <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
                Doctrine <span className="text-slate-500">Insights & Intelligence</span>
             </h2>
             <p className="text-slate-400 font-light">
                Tactical briefings for the sovereign architect.
             </p>
          </div>
          <button 
            onClick={handleViewAll}
            className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all"
          >
            <Lock size={12} />
            View Full Feed
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <FeedItem key={idx} {...item} index={idx} />
          ))}
        </div>
        
        <div className="md:hidden mt-12 flex justify-center">
             <button 
                onClick={handleViewAll}
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all"
              >
                <Lock size={12} />
                View Full Feed
              </button>
        </div>

      </div>
    </section>
  );
};

export default DoctrineFeed;