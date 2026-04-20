const Footer = () => {
  return (
    <footer className="bg-surface-light border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-100 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-slate-text mb-4">KARMA<span className="text-electric-purple">.</span></h3>
            <p className="text-slate-muted max-w-sm mb-6 leading-relaxed font-medium">
              We build websites, apps & designs that grow your business. Your trusted digital partner from India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold text-slate-text mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-muted hover:text-electric-purple font-medium transition-colors">Home</a></li>
              <li><a href="/#services" className="text-slate-muted hover:text-electric-purple font-medium transition-colors">Services</a></li>
              <li><a href="/#work" className="text-slate-muted hover:text-electric-purple font-medium transition-colors">Portfolio</a></li>
              <li><a href="/#pricing" className="text-slate-muted hover:text-electric-purple font-medium transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold text-slate-text mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-muted font-medium cursor-pointer hover:text-electric-purple">hello@karmatechinnovations.com</li>
              <li className="text-slate-muted font-medium cursor-pointer hover:text-electric-purple">+91 99748 37395</li>
              <li className="text-slate-muted font-medium">India (Remote - Global)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-muted font-medium">
          <p>&copy; 2026 KARMA Tech Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
