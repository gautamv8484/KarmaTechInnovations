import { motion } from 'framer-motion';
import '../'

const techCategories = [
  {
    title: 'WEB DEVELOPMENT',
    skills: ['React ⚛️', 'Next.js ▲', 'Node.js 🟢', 'Express.js', 'MongoDB 🍃', 'PostgreSQL', 'Tailwind CSS 🎨', 'Three.js 🎲', 'GSAP 🟩', 'Framer Motion', 'Vite ⚡', 'WordPress 📝', 'Firebase 🔥', 'REST APIs']
  },
  {
    title: 'APP DEVELOPMENT',
    skills: ['React Native 📱', 'Flutter 💙', 'Firebase 🔥', 'Google Maps 🗺️', 'Push Notifications', 'In-App Payments', 'REST APIs 🔗', 'AsyncStorage']
  },
  {
    title: 'DESIGN LAB',
    skills: ['Figma 🎨', 'Adobe Photoshop', 'Adobe Illustrator', 'After Effects 🎬', 'Canva Pro 📐', 'Blender 🎲', 'LottieFiles ✨', 'Adobe XD']
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative bg-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            Technologies We <span className="text-cyber-blue">Master</span>
          </motion.h2>
          <p className="text-slate-muted max-w-2xl mx-auto font-medium text-lg">
            We use the latest and most powerful tools to build your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-10 bg-white"
            >
              <h3 className="text-xl font-bold mb-6 text-electric-purple border-b border-gray-100 pb-4 tracking-widest">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 bg-light-bg hover:bg-electric-purple/10 hover:text-electric-purple hover:border-electric-purple/30 border border-gray-100 rounded-lg text-sm font-semibold text-slate-muted transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
