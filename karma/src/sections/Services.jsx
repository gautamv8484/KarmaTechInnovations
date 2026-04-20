import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiPenTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const services = [
  {
    title: 'Web Development',
    icon: <FiMonitor size={32} />,
    desc: 'High-performance websites, ecommerce, and web apps built with modern tech stacks.',
    link: '/services/web',
    colorClass: 'text-electric-purple',
    bgClass: 'bg-electric-purple/10'
  },
  {
    title: 'App Development',
    icon: <FiSmartphone size={32} />,
    desc: 'Native and cross-platform mobile apps that provide seamless user experiences.',
    link: '/services/app',
    colorClass: 'text-cyber-blue',
    bgClass: 'bg-cyber-blue/10'
  },
  {
    title: 'Graphic Design',
    icon: <FiPenTool size={32} />,
    desc: 'Stunning brand identities, UI/UX design, and social media marketing materials.',
    link: '/services/design',
    colorClass: 'text-coral-red',
    bgClass: 'bg-coral-red/10'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-text"
          >
            Our <span className="text-electric-purple">Services</span>
          </motion.h2>
          <p className="text-slate-muted max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#000000" glarePosition="all" scale={1.02} transitionSpeed={2000}>
                <div className="glass-card p-8 group transition-all duration-300 cursor-pointer h-full bg-white relative overflow-hidden">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${svc.bgClass} ${svc.colorClass} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {svc.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-text">{svc.title}</h3>
                  <p className="text-slate-muted mb-8 line-clamp-3 leading-relaxed">{svc.desc}</p>
                  <Link to={svc.link} className={`${svc.colorClass} font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all absolute bottom-8`}>
                    Explore <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
