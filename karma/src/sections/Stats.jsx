import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";

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

const stats = [
  { val: 50, suffix: '+', label: 'Projects Delivered' },
  { val: 30, suffix: '+', label: 'Happy Clients' },
  { val: 98, suffix: '%', label: 'Client Satisfaction Rate' },
  { val: 3, suffix: '+', label: 'Years Experience' },
  { val: 500, suffix: '+', label: 'Designs Created' },
  { val: 15, suffix: '+', label: 'Technologies Mastered' },
  { val: 5, suffix: '+', label: 'Countries Served' },
  { val: 100, suffix: '%', label: 'Project Completion Rate' },
];

const Stats = () => {
  return (
    <section className="py-20 relative bg-surface-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-display font-extrabold text-cyber-blue mb-3 drop-shadow-sm">
                <AnimatedNumber end={s.val} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-muted uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
