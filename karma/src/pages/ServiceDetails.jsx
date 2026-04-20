import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FiCheck, FiArrowLeft } from 'react-icons/fi';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/" />;
  }

  const hexColor = service.colorClass.includes('purple') ? '#6C63FF' : service.colorClass.includes('blue') ? '#00D9FF' : '#FF6B6B';

  return (
    <div className="w-full bg-light-bg min-h-screen py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-10 rounded-full blur-[100px] pointer-events-none -z-10`} style={{ backgroundColor: hexColor }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/" className="inline-flex items-center text-slate-muted hover:text-electric-purple transition-colors mb-12 group font-bold">
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-soft ${service.colorClass}`}>
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 text-slate-text">{service.title}</h1>
            <p className="text-xl text-slate-muted leading-relaxed mb-8">{service.description}</p>
            
            <div className="glass-card p-8 border-l-4 mb-8 bg-white shadow-elegant" style={{ borderLeftColor: hexColor }}>
              <div className="text-sm text-slate-muted uppercase tracking-widest mb-2 font-bold">Starting Price</div>
              <div className={`text-5xl font-display font-bold ${service.colorClass}`}>{service.startingPrice}</div>
            </div>
            
            <a href="/#contact" className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 block max-w-xs text-center shadow-lg" style={{ backgroundColor: hexColor, boxShadow: `0 10px 25px ${hexColor}40` }}>
              Start a Project 🚀
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 md:p-10 bg-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4 text-slate-text">What We Build</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whatWeBuild.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <FiCheck className={`${service.colorClass} mt-1 mr-3 flex-shrink-0 text-xl font-bold`} />
                    <span className="text-slate-text font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-8 md:p-10 bg-white">
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4 text-slate-text">Tech & Tools We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.techWeUse.map((tech, idx) => (
                  <span key={idx} className={`px-4 py-2 bg-light-bg border border-gray-100 shadow-sm rounded-lg text-sm font-bold ${service.colorClass} cursor-default transition-all hover:-translate-y-0.5`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
