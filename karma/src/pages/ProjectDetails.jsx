import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectDetailsMap } from '../data/projectsData';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCode, FiUser, FiCalendar, FiTarget } from 'react-icons/fi';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetailsMap[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/#work" />;
  }

  const getThemeColor = () => {
    if(project.category === 'Web') return 'text-electric-purple';
    if(project.category === 'App') return 'text-cyber-blue';
    return 'text-coral-red';
  };
  const getThemeBg = () => {
    if(project.category === 'Web') return 'bg-electric-purple/10';
    if(project.category === 'App') return 'bg-cyber-blue/10';
    return 'bg-coral-red/10';
  };
  const themeText = getThemeColor();
  const themeBg = getThemeBg();

  return (
    <div className="w-full min-h-screen bg-light-bg pb-24">
      {/* Hero Header Area */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-slate-900">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={project.heroImg} alt={project.title} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
          <div className={`absolute inset-0 bg-gradient-to-t from-light-bg via-light-bg/80 to-transparent`}></div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 pt-32 max-w-7xl mx-auto z-10 hidden md:block">
           {/* Decorative */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32 md:-mt-48 z-20">
        <Link to="/#work" className="inline-flex items-center text-slate-text bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all mb-8 font-bold text-sm">
          <FiArrowLeft className="mr-2" /> Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-text mb-4 drop-shadow-sm">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${themeBg} ${themeText}`}>
                  {project.category}
                </span>
                <span className="text-slate-muted font-medium">{project.role}</span>
              </div>
              
              <div className="glass-card bg-white p-8 md:p-10 shadow-soft border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-text mb-4">The Challenge</h3>
                <p className="text-slate-muted leading-relaxed font-medium mb-8 text-lg">{project.problem}</p>
                
                <h3 className="text-2xl font-bold text-slate-text mb-4">The Solution</h3>
                <p className="text-slate-muted leading-relaxed font-medium text-lg">{project.solution}</p>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-slate-text pl-2 border-l-4 border-electric-purple">Project Gallery</h3>
              {project.images.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-elegant border border-gray-100 bg-white">
                  <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 glass-card bg-white p-8 shadow-elegant border border-gray-100 space-y-8">
              
              {/* Action Buttons */}
              <div className="space-y-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center transition-all shadow-sm hover:-translate-y-1`} style={{ backgroundColor: project.category==='Web'?'#6C63FF':project.category==='App'?'#00D9FF':'#FF6B6B' }}>
                    <FiExternalLink className="mr-2 text-xl" /> View Live Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="w-full py-4 px-6 rounded-xl font-bold text-slate-text bg-light-bg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all">
                    <FiGithub className="mr-2 text-xl" /> Source Code
                  </a>
                )}
              </div>

              <div className="border-t border-gray-100 pt-8 space-y-6">
                <div className="flex items-start">
                  <FiUser className={`mt-1 mr-4 text-xl ${themeText}`} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-muted uppercase tracking-wider mb-1">Client</h4>
                    <p className="font-bold text-slate-text">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiCalendar className={`mt-1 mr-4 text-xl ${themeText}`} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-muted uppercase tracking-wider mb-1">Timeline</h4>
                    <p className="font-bold text-slate-text">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiCode className={`mt-1 mr-4 text-xl ${themeText}`} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-muted uppercase tracking-wider mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                       {project.techStack.map(t => (
                         <span key={t} className="px-3 py-1 bg-light-bg border border-gray-200 rounded text-xs font-bold text-slate-muted">{t}</span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
