import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Dates based on CRA timeline
    // Start: Entry into Force (Approx Dec 2024)
    // End: Full Enforcement (Dec 2027 - 36 months later)
    const startDate = new Date('2024-12-01T00:00:00').getTime();
    const targetDate = new Date('2027-12-01T00:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Calculate progress percentage
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
    calculateTime(); // Initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-6 flex justify-center -mt-12 relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-7xl bg-[#080808] border border-white/10 rounded-[2.5rem] py-8 px-8 md:px-12 shadow-2xl shadow-black relative overflow-hidden"
      >
        {/* Subtle red glow effect for urgency */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 via-transparent to-neon-purple/5 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Section 1: Title */}
          <div className="text-center lg:text-left min-w-fit">
            <h3 className="font-display font-bold text-xl text-white tracking-tight mb-1">
              Countdown to Full Enforcement
            </h3>
            <p className="text-slate-500 text-sm font-light">
              Time remaining until December 2027.
            </p>
          </div>

          {/* Section 2: The Digits */}
          <div className="flex items-start gap-6 md:gap-10">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <TimeUnit value={timeLeft.minutes} label="MIN" />
            <TimeUnit value={timeLeft.seconds} label="SEC" />
          </div>

          {/* Section 3: Progress Bar */}
          <div className="w-full lg:w-auto lg:flex-1 flex flex-col justify-center min-w-[250px]">
             {/* Bar Track */}
             <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                {/* Progress Fill */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-red via-purple-600 to-neon-purple relative"
                >
                    {/* Glowing Tip */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px]" />
                </motion.div>
             </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter tabular-nums leading-none mb-2">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">
      {label}
    </span>
  </div>
);

export default CountdownBar;