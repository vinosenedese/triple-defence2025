import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const CountdownBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Dates based on Article 11 & 14 Enforcement
    const startDate = new Date('2024-12-01T00:00:00').getTime();
    const targetDate = new Date('2026-09-11T00:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const totalDuration = targetDate - startDate;
      const elapsed = now - startDate;
      const currentProgress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
      setProgress(currentProgress);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-6 flex justify-center -mt-20 relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl bg-[#080808]/80 backdrop-blur-xl border border-neon-purple/30 rounded-[2.5rem] py-10 px-8 md:px-12 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden group hover:border-neon-purple transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 via-transparent to-neon-purple/5 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Section 1: Title with Icon */}
          <div className="text-center lg:text-left min-w-fit">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-neon-red">
               <AlertTriangle size={16} className="animate-pulse" />
               <h3 className="font-display font-bold text-xl text-white tracking-tight">
                 Strategic Deadline
               </h3>
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest max-w-[300px]">
              Countdown to Article 11 & 14 Enforcement <br/>
              <span className="text-slate-600">(Incident Reporting Deadline)</span>
            </p>
          </div>

          {/* Section 2: The Digits (Larger) */}
          <div className="flex items-start gap-4 md:gap-12">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <TimeUnit value={timeLeft.seconds} label="SEC" />
          </div>

          {/* Section 3: Progress Bar (Intense) */}
          <div className="w-full lg:w-auto lg:flex-1 flex flex-col justify-center min-w-[250px]">
             <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-red via-purple-600 to-neon-purple relative"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white shadow-[0_0_15px_#fff] blur-[1px]" />
                </motion.div>
             </div>
             <div className="mt-3 flex justify-between text-[10px] font-mono text-slate-600 uppercase tracking-tighter font-bold">
                <span>Phase: Adoption</span>
                <span>Threshold: Sep 2026</span>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center group/unit">
    <div className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter tabular-nums leading-none mb-3 group-hover/unit:scale-105 transition-transform duration-300">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-[10px] font-bold text-slate-600 tracking-[0.3em] uppercase group-hover/unit:text-neon-purple transition-colors">
      {label}
    </span>
  </div>
);

export default CountdownBar;