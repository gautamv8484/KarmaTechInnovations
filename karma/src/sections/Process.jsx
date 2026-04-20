import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { icon: '💬', title: 'Discovery Call', desc: 'Free 30-minute consultation to understand your business, goals, target audience, and project requirements. No commitment needed!', time: 'Day 1 | FREE' },
  { icon: '📋', title: 'Planning & Proposal', desc: 'We send you a detailed proposal with project scope, features list, timeline, and complete cost breakdown. Full transparency.', time: 'Day 2-3' },
  { icon: '🎨', title: 'Design & Prototype', desc: 'We create wireframes, UI mockups, and interactive prototypes. You see exactly what you\'re getting before we code.', time: 'Day 4-10' },
  { icon: '💻', title: 'Development', desc: 'Clean, efficient, and scalable code. We send weekly progress updates and give you access to staging environment.', time: 'Day 11-40' },
  { icon: '🚀', title: 'Testing & Launch', desc: 'Thorough testing across all devices and browsers. After your approval, we deploy to production and go live!', time: 'Day 41-48' },
  { icon: '🛡️', title: 'Ongoing Support', desc: 'We don\'t disappear after launch! Free support included in every package. We\'re always here when you need us.', time: 'Ongoing' }
];

const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={ref} className="py-24 relative bg-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            Our Simple <span className="text-coral-red">Process</span>
          </motion.h2>
          <p className="text-slate-muted max-w-2xl mx-auto font-medium text-lg">
            From your idea to a live product, we make the journey smooth and transparent.
          </p>
        </div>

        <div className="relative">
          {/* Faded Background Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2"></div>
          
          {/* Animated Foreground Line */}
          <motion.div 
            className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-purple via-cyber-blue to-coral-red md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          ></motion.div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mb-20 pl-20 md:pl-0 relative`}
              >
                <div className={`w-full md:w-1/2 flex ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="glass-card p-8 md:p-10 max-w-md w-full relative group hover:border-electric-purple/30 transition-all duration-300 bg-white hover:-translate-y-2 hover:shadow-elegant">
                    <div className="absolute top-6 right-6 text-xs font-bold text-slate-muted uppercase tracking-widest">{step.time}</div>
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl mb-6 bg-light-bg border border-gray-100 shadow-sm w-16 h-16 flex items-center justify-center rounded-2xl cursor-default"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-text">0{idx + 1}. {step.title}</h3>
                    <p className="text-slate-muted leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
                {/* Center dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-[24px] md:static md:flex w-4 h-4 md:w-8 md:h-8 bg-white border-4 md:border-[6px] border-electric-purple rounded-full z-10 shadow-sm hover:scale-150 transition-transform cursor-pointer"
                ></motion.div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
