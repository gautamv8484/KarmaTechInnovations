import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import '../index.css';

function AnimatedNumber({ end, suffix, duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, end, { duration, ease: "easeOut" });
    }
  }, [count, end, duration, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="about" ref={ref} className="py-24 relative bg-light-bg overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-20 left-10 w-24 h-24 bg-electric-purple/5 border border-electric-purple/10 rounded-3xl z-0"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-32 h-32 bg-cyber-blue/5 border border-cyber-blue/10 rounded-full z-0"></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-slate-text">
              Building Digital <br className="hidden md:block"/> <span className="text-electric-purple">Destiny.</span>
            </h2>
            <p className="text-slate-muted text-lg mb-6 leading-relaxed font-medium">
              KARMA Tech Innovations was born from a simple belief: great technology should be accessible to every business, not just large corporations.
            </p>
            <p className="text-slate-muted text-lg mb-8 leading-relaxed font-medium">
              We started as a small freelance team with big dreams, and we've grown into a trusted digital partner. The name KARMA reflects our core philosophy: <strong className="text-slate-text font-bold">Put great work into the world, and great results come back.</strong>
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <h4 className="text-4xl font-bold text-cyber-blue mb-2">
                   <AnimatedNumber end={50} suffix="+" />
                </h4>
                <p className="text-sm font-bold text-slate-muted uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-cyber-blue mb-2">
                   <AnimatedNumber end={98} suffix="%" />
                </h4>
                <p className="text-sm font-bold text-slate-muted uppercase tracking-widest">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div style={{ y: y1 }} id='a1' className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <div id='img1' className="absolute inset-0 bg-gradient-to-tr from-electric-purple/10 to-cyber-blue/10 z-10 mix-blend-overlay"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team collaborating" className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105" />
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute -bottom-8 -left-8 glass-card bg-white/80 p-6 border-l-4 border-electric-purple hidden md:block max-w-xs shadow-soft z-20">
              <p className="text-sm font-bold text-slate-text italic leading-relaxed">"Every pixel, every line of code, every design element is crafted with purpose and passion."</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
