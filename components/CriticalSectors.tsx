import React from 'react';
import { motion } from 'framer-motion';
import { Server, Wifi, Database, Key, Settings, Cpu, HardDrive, Smartphone } from 'lucide-react';

const SectorCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; index: number }> = ({ title, items, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-slate-900/40 border border-white/5 rounded-xl p-6 hover:bg-slate-900/60 hover:border-neon-purple/20 transition-all duration-300 group"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-white/5 rounded-lg text-slate-300 group-hover:text-neon-purple group-hover:bg-neon-purple/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg tracking-tight">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
          <span className="w-1 h-1 bg-slate-600 rounded-full mt-2 group-hover:bg-neon-purple transition-colors" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const CriticalSectors: React.FC = () => {
  const sectors = [
    {
      title: "Digital Products & Systems",
      icon: <Cpu size={24} />,
      items: [
        "IoT Devices & Embedded Systems",
        "Industrial Control Systems (ICS)",
        "Smart Home Technologies",
        "Connected Hardware Components"
      ]
    },
    {
      title: "Network Infrastructure",
      icon: <Wifi size={24} />,
      items: [
        "Routers, Switches & Gateways",
        "Telecommunication Networks",
        "5G Infrastructure",
        "Network Management Systems"
      ]
    },
    {
      title: "Operational Tech (OT)",
      icon: <Settings size={24} />,
      items: [
        "SCADA Systems",
        "Energy & Water Control Systems",
        "Transportation Signaling",
        "Manufacturing Robotics"
      ]
    },
    {
      title: "Digital Infrastructure",
      icon: <Server size={24} />,
      items: [
        "Cloud Providers (IaaS, PaaS, SaaS)",
        "Data Centers & CDNs",
        "DNS Providers & IXPs",
        "Satellite Communication"
      ]
    },
    {
      title: "Data & Storage",
      icon: <Database size={24} />,
      items: [
        "Critical Databases",
        "Data Processing Systems",
        "Encrypted Storage Solutions",
        "Backup Infrastructure"
      ]
    },
    {
      title: "Identity & Access",
      icon: <Key size={24} />,
      items: [
        "Identity Management Systems",
        "Multi-Factor Authentication (MFA)",
        "Single Sign-On (SSO)",
        "Biometric Access Control"
      ]
    }
  ];

  return (
    <section id="sectors" className="py-24 bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Critical Scope</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             Components vital for maintaining societal functions and economic stability are subject to rigorous CRA cyberprotection requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <SectorCard key={idx} {...sector} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriticalSectors;