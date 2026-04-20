import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingElements = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener('scroll', checkScrollTop);
    
    // Developer Easter Egg
    console.log("%c👋 Hey developer! Impressed by the code?", "color: #00D9FF; font-size: 20px; font-weight: bold;");
    console.log("%c💼 We're always looking to collaborate!", "color: #6C63FF; font-size: 16px;");
    console.log("%c📧 hello@karmatechinnovations.com", "color: #FF6B6B; font-size: 16px;");
    
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gradient origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <a 
        href="https://wa.me/919974837395?text=Hi%20KARMA%20Tech!%20I'm%20interested%20in%20your%20services." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] z-50 hover:scale-110 transition-transform duration-300 group"
        title="Chat with us!"
      >
        <FaWhatsapp />
      </a>
      
      <motion.button 
        onClick={scrollTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 20, pointerEvents: showScroll ? 'auto' : 'none' }}
        className="fixed bottom-24 right-6 w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-slate-text text-xl shadow-elegant z-50 hover:bg-white transition-colors duration-300 border border-gray-200 cursor-pointer hover:-translate-y-1"
      >
        🚀
      </motion.button>
    </>
  );
};

export default FloatingElements;
