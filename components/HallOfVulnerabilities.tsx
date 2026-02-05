import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, AlertOctagon, Terminal, Activity } from 'lucide-react';

// Interfaces
interface ThreatPost {
  id: string;
  category: string;
  title: string;
  image: string;
  desc: string;
  date: string;
}

const ThreatCard: React.FC<{ post: ThreatPost; index: number }> = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative flex flex-col h-full bg-[#050505] border border-white/10 overflow-hidden"
  >
    {/* Purple Haze Effect behind card (only visible on hover or constant subtle) */}
    <div className="absolute -inset-1 bg-neon-purple/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    {/* Image Container */}
    <div className="relative h-64 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-80" />
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/80 border border-white/10 backdrop-blur-md shadow-lg">
        <span className="text-[10px] font-mono font-bold text-neon-purple tracking-widest uppercase flex items-center gap-2">
          <Activity size={10} className="animate-pulse" />
          {post.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-20 p-8 flex flex-col flex-grow bg-[#050505]">
      <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500">
        <Terminal size={12} />
        <span>DETECTED: {post.date}</span>
      </div>

      <h3 className="font-serif text-2xl text-white font-bold leading-tight mb-4 group-hover:text-neon-purple transition-colors duration-300">
        {post.title}
      </h3>

      <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow">
        {post.desc}
      </p>

      {/* Footer / Neutralized Status */}
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
         <div className="flex items-center gap-2 text-green-500">
            <Shield size={14} className="fill-green-500/10" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Physically Neutralized</span>
         </div>
         <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
      </div>
    </div>
  </motion.div>
);

const HallOfVulnerabilities: React.FC = () => {
  const posts: ThreatPost[] = [
    {
      id: "ntds",
      category: "Identity Theft",
      date: "OCT 14, 2024",
      title: "NTDS.dit Exfiltration: Identity Sovereignty at Risk",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", // Abstract Lock/Cyber
      desc: "Adversaries are targeting Active Directory database files to clone identity infrastructure. TripleDefence architecture renders the DC physically unreachable from the edge, making exfiltration impossible."
    },
    {
      id: "citrix",
      category: "Remote Execution",
      date: "SEP 28, 2024",
      title: "Citrix RCE: Over 28,000 Devices Exposed",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Globe/Network
      desc: "A critical buffer overflow allows unauthenticated remote code execution. Our zero-trust gateway sanitizes input before it ever reaches the application layer, neutralizing the payload pre-execution."
    },
    {
      id: "zeroday",
      category: "Edge Breach",
      date: "AUG 02, 2024",
      title: "Zero-Day in Edge Systems: Neutralizing the Unseen Monster",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop", // Abstract/Dark Tech
      desc: "Unknown vulnerabilities in IoT gateways are the new norm. By enforcing unidirectional flows, we ensure that even a compromised edge device cannot send command and control signals back to the core."
    }
  ];

  return (
    <section id="threats" className="py-32 bg-[#020202] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Game of Thrones Style */}
        <div className="text-center mb-24">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }} 
             className="mb-6 flex justify-center"
          >
             <div className="px-4 py-1 border border-white/10 bg-white/5 text-[10px] font-mono font-bold text-slate-400 tracking-[0.3em] uppercase">
                Active Threat Intelligence
             </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            THE HALL OF VULNERABILITIES
          </motion.h2>
          
          <div className="flex justify-center mb-10">
             <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            "We don't study the law. We neutralize the monsters. See the threats others miss and that TripleDefence renders <span className="text-white font-normal underline decoration-neon-purple/50 underline-offset-4">physically impossible</span> to exploit."
          </motion.p>
        </div>

        {/* The Stack (Highlighted Posts) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           {posts.map((post, index) => (
             <ThreatCard key={post.id} post={post} index={index} />
           ))}
        </div>

        {/* Bottom List / Grid Placeholder (Future Content) */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="border-t border-white/5 pt-8 flex justify-between items-center"
        >
            <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
                <span className="font-bold">ARCHIVE ACCESS:</span>
                <span>RESTRICTED TO MEMBERS</span>
            </div>
            
            <div className="flex items-center gap-3 text-neon-red font-mono text-xs font-bold uppercase tracking-widest animate-pulse">
                <AlertOctagon size={14} />
                <span>Live Feed Active</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HallOfVulnerabilities;