import React from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldAlert, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  const handleToast = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: msg } }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: "Consultation request initiated (Demo Mode)." } }));
  };

  return (
    <section id="contact" className="py-32 relative flex items-center justify-center bg-charcoal overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-2xl w-full mx-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
             {/* Icon */}
            <div className="flex justify-center mb-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <ShieldAlert className="w-7 h-7 text-slate-200" />
                </div>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                    Protect Your <span className="text-neon-purple">Infrastructure</span>
                </h2>
                <p className="text-slate-400 text-lg font-light tracking-tight">
                    Request a classified deep-dive demo of the TripleDefence platform.
                </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="E.g. Alexander Pierce"
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all placeholder:text-slate-600 text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-1">Company</label>
                        <input
                            type="text"
                            placeholder="E.g. Cyberdyne Systems"
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all placeholder:text-slate-600 text-sm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-1">Work Email</label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all placeholder:text-slate-600 text-sm"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 tracking-widest uppercase ml-1">Sector</label>
                    <div className="relative">
                        <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all appearance-none cursor-pointer text-sm">
                            <option>Critical Infrastructure</option>
                            <option>Medical Devices</option>
                            <option>Automotive</option>
                            <option>Aerospace</option>
                            <option>IoT Manufacturing</option>
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                             <ChevronDown size={16} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="w-full bg-white text-charcoal font-bold text-sm tracking-wide py-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-8 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Initiate Consultation
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[10px] text-slate-600 mt-6 tracking-wide">
                    By submitting, you agree to our <a href="#" onClick={(e) => handleToast(e, "Privacy Protocol v1.2")} className="underline decoration-slate-600 hover:text-slate-400">Privacy Protocol</a>.
                </p>
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;