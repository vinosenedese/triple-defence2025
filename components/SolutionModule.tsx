import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Shield, Globe, Cpu, ScanLine } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg mb-6 text-white border border-white/5 group-hover:bg-neon-purple/10 group-hover:text-neon-purple group-hover:border-neon-purple/20 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    
    {/* Hover Glow Corner */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </motion.div>
);

const SolutionModule: React.FC = () => {
  return (
    <section id="platform" className="py-32 bg-charcoal relative overflow-hidden">
      
      {/* Background Laser Grid Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
              Article 14 <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Automated Reporting.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              TripleDefence serves as your bridge to ENISA. We integrate directly into your CI/CD pipeline, monitoring IoT devices and critical infrastructure for SL4 protection anomalies.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all">
            Explore Documentation
          </button>
        </div>

        {/* Scanning Module Container */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
          
          {/* Scanning Laser Line */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
             <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-scan opacity-50"></div>
             <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-neon-cyan/10 to-transparent -translate-y-full animate-scan"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-charcoal/90 rounded-xl p-6">
            <FeatureCard 
              icon={<FileCode size={24} />}
              title="Dynamic SBOMs"
              desc="Automated generation and maintenance of Software Bill of Materials for every release cycle, compliant with CRA Annex II."
            />
            <FeatureCard 
              icon={<Shield size={24} />}
              title="SL4 Protection"
              desc="Continuous penetration testing simulations for Critical Class I & II products to ensure high-assurance resilience."
            />
            <FeatureCard 
              icon={<Globe size={24} />}
              title="ENISA Bridge"
              desc="One-click incident reporting to CSIRTs within the 24h deadline using pre-filled templates."
            />
            <FeatureCard 
              icon={<Cpu size={24} />}
              title="IoT Fleet Mgmt"
              desc="Infrastructure to push security updates for the expected product lifetime (up to 5 years) across distributed IoT fleets."
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionModule;