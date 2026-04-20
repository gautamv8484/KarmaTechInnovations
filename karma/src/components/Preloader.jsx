import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] bg-light-bg flex flex-col items-center justify-center pointer-events-none"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-4xl md:text-6xl font-display font-bold text-slate-text mb-8 tracking-widest flex overflow-hidden">
            {"KARMA ".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                className={char === '.' ? 'text-electric-purple' : ''}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden relative mb-4 shadow-inner">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between w-64 text-xs font-bold text-slate-muted uppercase tracking-widest">
            <span>Building Digital Destiny...</span>
            <span className="text-electric-purple">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
