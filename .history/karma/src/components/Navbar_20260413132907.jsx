import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'glass-card border-t-0 border-x-0 !rounded-none shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className={`text-2xl font-display font-bold tracking-widest text-slate-text`}>
              KARMA<span className="text-electric-purple text-3xl leading-none px-1"></span> 
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-muted hover:text-electric-purple font-medium transition-colors duration-200">Home</Link>
            <a href="/#services" className="text-slate-muted hover:text-electric-purple font-medium transition-colors duration-200">Services</a>
            <a href="/#work" className="text-slate-muted hover:text-electric-purple font-medium transition-colors duration-200">Work</a>
            <a href="/#about" className="text-slate-muted hover:text-electric-purple font-medium transition-colors duration-200">About</a>
          </div>
          <div className="hidden md:flex">
            <a href="/#contact" className="bg-electric-purple hover:bg-cyber-blue transition-all duration-300 transform hover:-translate-y-1 text-white px-6 py-2.5 rounded-full font-bold shadow-soft">
              Let's Talk &rarr;
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
