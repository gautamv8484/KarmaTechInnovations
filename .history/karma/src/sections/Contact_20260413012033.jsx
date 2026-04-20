const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text">
            Let's <span className="bg-clip-text text-transparent bg-brand-gradient">Talk</span>
          </h2>
          <p className="text-slate-muted text-lg font-medium">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="glass-card bg-white max-w-2xl mx-auto p-8 md:p-12 relative shadow-elegant border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">Name</label>
                <input type="text" className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">Service Required</label>
              <select className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm appearance-none">
                <option>Web Development</option>
                <option>App Development</option>
                <option>Graphic Design</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">Message</label>
              <textarea rows="4" className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-electric-purple hover:bg-cyber-blue transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-purple-glow hover:shadow-blue-glow hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
