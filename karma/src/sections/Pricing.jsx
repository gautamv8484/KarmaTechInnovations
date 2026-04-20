import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

const plans = [
  {
    name: 'Starter',
    price: '₹10k - 30k',
    desc: 'Best for small businesses and solopreneurs.',
    features: ['Landing page OR 5-page website', 'Responsive design', 'Basic animations', 'Contact form with email', 'Basic SEO', '1 month free support'],
    colorClass: 'text-electric-purple',
    popular: false
  },
  {
    name: 'Business',
    price: '₹30k - 80k',
    desc: 'Best for growing businesses & established brands.',
    features: ['Full website (10+ pages)', 'Admin dashboard/CMS', 'Database integration', 'User authentication', '2 revision rounds', '3 months free support'],
    colorClass: 'text-cyber-blue',
    popular: true
  },
  {
    name: 'Premium',
    price: '₹80k+',
    desc: 'Best for large businesses and funded startups.',
    features: ['Custom web application / SaaS', 'Mobile app (iOS + Android)', '3D/Interactive features', 'Complete branding package', 'Payment gateway', '6 months free support'],
    colorClass: 'text-coral-red',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text"
          >
            Pricing <span className="bg-clip-text text-transparent bg-brand-gradient">Plans</span>
          </motion.h2>
          <p className="text-slate-muted max-w-2xl mx-auto font-medium text-lg">
            Transparent pricing for high-quality digital solutions tailored to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="h-full"
            >
               <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.05} scale={1.02} transitionSpeed={2500} className="h-full">
                  <div className={`glass-card bg-white p-10 relative flex flex-col h-full transition-all duration-300 ${plan.popular ? 'border-cyber-blue border-2 shadow-elegant' : 'border border-gray-100 shadow-soft'}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-8 transform -translate-y-1/2 z-20">
                        <span className="bg-cyber-blue text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-slate-text">{plan.name}</h3>
                    <p className="text-slate-muted text-sm mb-6 h-10 font-medium">{plan.desc}</p>
                    <div className="mb-8">
                      <span className={`text-4xl font-display font-extrabold ${plan.colorClass}`}>{plan.price}</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm text-slate-muted font-medium">
                          <FiCheck className={`${plan.colorClass} mt-1 mr-3 flex-shrink-0 text-lg`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 shadow-sm hover:shadow-md ${plan.popular ? 'bg-cyber-blue text-white hover:brightness-110' : 'bg-light-bg text-slate-text border border-gray-200 hover:border-gray-300'}`}>
                      Get Started
                    </a>
                  </div>
               </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
