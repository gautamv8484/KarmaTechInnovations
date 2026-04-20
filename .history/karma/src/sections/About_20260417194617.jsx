import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-light-bg py-16 sm:py-20 lg:py-24"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-10 left-4 h-16 w-16 rounded-2xl border border-electric-purple/10 bg-electric-purple/5 z-0 sm:top-16 sm:left-8 sm:h-20 sm:w-20 lg:top-20 lg:left-10 lg:h-24 lg:w-24"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 right-4 h-20 w-20 rounded-full border border-cyber-blue/10 bg-cyber-blue/5 z-0 sm:bottom-16 sm:right-8 sm:h-24 sm:w-24 lg:bottom-20 lg:right-10 lg:h-32 lg:w-32"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight text-slate-text">
              Building Digital{" "}
              <br className="hidden sm:block" />
              <span className="text-electric-purple">Destiny.</span>
            </h2>

            <p className="mb-4 text-base sm:text-lg leading-relaxed text-slate-muted font-medium">
              KARMA Tech Innovations was born from a simple belief: great technology should be accessible to every business, not just large corporations.
            </p>

            <p className="mb-8 text-base sm:text-lg leading-relaxed text-slate-muted font-medium">
              We started as a small freelance team with big dreams, and we've grown into a trusted digital partner. The name KARMA reflects our core philosophy:{" "}
              <strong className="font-bold text-slate-text">
                Put great work into the world, and great results come back.
              </strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-2xl bg-white/70 p-4 shadow-sm border border-gray-100">
                <h4 className="mb-1 text-3xl sm:text-4xl font-bold text-cyber-blue">
                  <AnimatedNumber end={50} suffix="+" />
                </h4>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-muted">
                  Projects Delivered
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-4 shadow-sm border border-gray-100">
                <h4 className="mb-1 text-3xl sm:text-4xl font-bold text-cyber-blue">
                  <AnimatedNumber end={98} suffix="%" />
                </h4>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-muted">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              style={{ y: y1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-electric-purple/10 to-cyber-blue/10 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaborating"
                className="h-full w-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Quote Card */}
            <motion.div
              style={{ y: y2 }}
              className="mt-4 rounded-2xl border-l-4 border-electric-purple bg-white/90 p-5 shadow-soft sm:mt-6 lg:absolute lg:-bottom-8 lg:-left-8 lg:max-w-xs"
            >
              <p className="text-sm sm:text-base font-bold italic leading-relaxed text-slate-text">
                "Every pixel, every line of code, every design element is crafted with purpose and passion."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;