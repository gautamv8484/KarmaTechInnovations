import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Rahul Sharma', role: 'CEO, FoodieExpress', location: 'Bangalore', text: 'KARMA Tech transformed our business! They built our app from scratch in 5 weeks. The UI is stunning and performance is incredible.' },
  { name: 'Priya Patel', role: 'Founder, StyleCart', location: 'Mumbai', text: 'Best graphic design team ever! Our brand identity is exactly what we imagined. Social media designs increased our engagement by 250%.' },
  { name: 'Amit Verma', role: 'Owner, CafeBliss', location: 'Hyderabad', text: 'Professional, creative, super responsive! They designed our entire brand - logo, menu, packaging. Worth every single rupee.' },
  { name: 'Sneha Reddy', role: 'Marketing Head, AutoVerse', location: 'Delhi', text: 'The 3D website they built is mind-blowing! Clients visit just to experience the 3D viewer. Our online leads increased by 400%.' },
  { name: 'Vikram Singh', role: 'Director, EduPath', location: 'Pune', text: 'Needed website, app & admin panel together. KARMA Tech delivered all three perfectly. Attention to detail is exceptional.' },
  { name: 'Kavya Nair', role: 'Co-Founder, FitLife', location: 'Kochi', text: 'Our fitness app got 5000+ downloads! The UI is beautiful, experience is smooth. KARMA Tech knows exactly what they\'re doing!' }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-light-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            What Our <span className="bg-clip-text text-transparent bg-brand-gradient">Clients Say</span>
          </motion.h2>
          <p className="text-slate-muted font-medium text-lg">Don't just take our word for it.</p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex gap-8 px-4 whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="glass-card bg-white p-10 w-[420px] whitespace-normal inline-block hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-elegant border border-gray-100">
              <div className="text-coral-red mb-6 text-2xl flex gap-1">★ ★ ★ ★ ★</div>
              <p className="text-slate-text font-medium italic mb-8 leading-relaxed text-lg">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-light-bg rounded-full flex items-center justify-center text-electric-purple font-bold text-xl mr-4 border border-gray-200">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-text text-lg">{t.name}</h4>
                  <p className="text-xs text-electric-purple font-bold uppercase tracking-wider">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
