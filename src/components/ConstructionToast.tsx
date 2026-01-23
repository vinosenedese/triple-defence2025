import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';

const ConstructionToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for custom event 'show-toast'
    const handleToast = (e: any) => {
      setMessage(e.detail?.message || "Module currently unavailable.");
      setVisible(true);
      
      // Auto dismiss after 3 seconds
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    };

    window.addEventListener('show-toast', handleToast);
    return () => window.removeEventListener('show-toast', handleToast);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-sm"
        >
          <div className="bg-slate-850 border border-slate-700/50 rounded-lg p-4 shadow-2xl flex items-center gap-4">
            
            <div className="p-2 bg-slate-800 rounded-full shrink-0">
              <Info className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-slate-200 text-sm font-medium leading-snug font-sans">
                {message}
              </p>
            </div>

            <button 
              onClick={() => setVisible(false)} 
              className="text-slate-500 hover:text-white transition-colors shrink-0 p-1"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConstructionToast;