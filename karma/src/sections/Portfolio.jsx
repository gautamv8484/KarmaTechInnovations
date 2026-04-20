import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsList } from '../data/projectsData';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'App', 'Design'];

  const filteredProjects = filter === 'All' ? projectsList : projectsList.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            Our <span className="bg-clip-text text-transparent bg-brand-gradient">Work</span>
          </motion.h2>
          <p className="text-slate-muted max-w-2xl mx-auto mb-8 font-medium text-lg">
            A selection of our recent projects across web development, app development, and graphic design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${filter === cat ? 'bg-coral-red text-white shadow-[0_5px_15px_rgba(255,107,107,0.4)]' : 'bg-white text-slate-muted hover:text-electric-purple hover:-translate-y-0.5 border border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl glass-card aspect-video border-gray-100 shadow-elegant hover:shadow-soft"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className={`text-${project.color} text-xs font-bold uppercase tracking-wider mb-2`}>{project.category}</span>
                  <h3 className="text-2xl font-bold text-slate-text mb-4">{project.title}</h3>
                  <Link to={`/projects/${project.id}`} className="inline-block px-8 py-3 bg-electric-purple text-white font-bold rounded-full hover:bg-cyber-blue transition-colors shadow-md transform hover:-translate-y-1 cursor-pointer">
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
