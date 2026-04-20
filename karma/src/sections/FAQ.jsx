import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What services do you offer?", a: "We offer three core services: Web Development (websites & web apps), App Development (iOS & Android apps), and Graphic Design (logos, branding & UI/UX)." },
  { q: "How much does a website cost?", a: "Our websites start from ₹10,000 for simple landing pages to ₹3,00,000+ for complex web applications. We provide a detailed quote after understanding your needs." },
  { q: "How long does a project take?", a: "Timeline depends on complexity: Landing page → 3-7 days... Business website → 10-20 days... Web app → 30-60 days." },
  { q: "What is your payment process?", a: "We take 50% advance to start the project and 50% on final delivery. We accept UPI, bank transfer & international wire." },
  { q: "Do you provide support after delivery?", a: "Yes! Every plan includes free support depending on the tier. Extended support is also available." },
  { q: "Do you sign NDAs?", a: "Yes, always. Your project details and business information are completely confidential with us." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            Frequently Asked <span className="text-electric-purple">Questions</span>
          </motion.h2>
          <p className="text-slate-muted text-lg font-medium">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-white overflow-hidden border border-gray-100 shadow-sm"
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 font-bold text-lg flex justify-between items-center focus:outline-none hover:text-electric-purple transition-colors text-slate-text"
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform text-electric-purple duration-300 pointer-events-none ${openIdx === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-muted font-medium leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
