import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ✅ Replace with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_oo4atjc';
const EMAILJS_TEMPLATE_ID = 'template_ds5n3d4';
const EMAILJS_PUBLIC_KEY = 'eIbfQr7Ozu__ft2jY';

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    service: 'Web Development',
    budget: 'Under ₹30,000',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.from_name.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your name'
      });
      return;
    }
    if (!formData.from_email.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your email'
      });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter your message'
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          to_name: 'KARMA Tech Team',
          reply_to: formData.from_email
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: '🎉 Message sent successfully! We will get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        service: 'Web Development',
        budget: 'Under ₹30,000',
        message: ''
      });

      // Reset success after 6 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 6000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Failed to send message. Please try WhatsApp or email directly.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-text">
            Let's <span className="bg-clip-text text-transparent bg-brand-gradient">Talk</span>
          </h2>
          <p className="text-slate-muted text-lg font-medium">
            Have a project in mind? We'd love to hear about it.
            Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">

          {/* WhatsApp */}
          <a
            href="https://wa.me/9974837395?text=Hi KARMA Tech! I visited your website and I'm interested in your services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-elegant hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💬</span>
            </div>
            <span className="font-bold text-slate-text text-sm">WhatsApp Us</span>
            <span className="text-slate-muted text-xs mt-1">+91 99748 37395</span>
            <span className="text-green-500 text-xs font-semibold mt-2">● Usually replies in 1 hr</span>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@karmatechinnovations.com?subject=Project Inquiry&body=Hi KARMA Tech Team, I'm interested in your services."
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-elegant hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📧</span>
            </div>
            <span className="font-bold text-slate-text text-sm">Email Us</span>
            <span className="text-slate-muted text-xs mt-1">hello@karmatechinnovations.com</span>
            <span className="text-slate-muted text-xs font-medium mt-2">Reply in 24 hours</span>
          </a>

          {/* Book a Call */}
          <a
            href="https://calendly.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-elegant hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📅</span>
            </div>
            <span className="font-bold text-slate-text text-sm">Book a Call</span>
            <span className="text-slate-muted text-xs mt-1">Free 30-min consultation</span>
            <span className="text-blue-500 text-xs font-semibold mt-2">Schedule Now →</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center max-w-2xl mx-auto mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-4 text-slate-muted text-sm font-medium">
            Or fill the form below
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Contact Form */}
        <div className="glass-card bg-white max-w-2xl mx-auto p-8 md:p-12 relative shadow-elegant border border-gray-100 rounded-3xl">

          {/* Success Message */}
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center animate-pulse">
              {status.message}
            </div>
          )}

          {/* Error Message */}
          {status.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium text-center">
              {status.message}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                Service Required *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option>Web Development</option>
                <option>App Development</option>
                <option>Graphic Design</option>
                <option>UI/UX Design</option>
                <option>Brand Identity</option>
                <option>Social Media Design</option>
                <option>Multiple Services</option>
                <option>Not Sure Yet</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option>Under ₹30,000</option>
                <option>₹30,000 - ₹80,000</option>
                <option>₹80,000 - ₹2,50,000</option>
                <option>₹2,50,000+</option>
                <option>Let's Discuss</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-slate-muted mb-2 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-light-bg border border-gray-200 rounded-xl px-4 py-3 text-slate-text font-medium focus:outline-none focus:border-electric-purple focus:ring-2 focus:ring-electric-purple/20 transition-all shadow-sm resize-none"
                placeholder="Tell us about your project... What are you looking to build? Any specific features? Timeline?"
              />
              <div className="text-right mt-1">
                <span className="text-xs text-slate-muted">
                  {formData.message.length}/500
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full transition-all duration-300 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2
                ${status.loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-electric-purple hover:bg-cyber-blue shadow-purple-glow hover:shadow-blue-glow hover:-translate-y-1'
                }`}
            >
              {status.loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : status.success ? (
                <>✅ Message Sent!</>
              ) : (
                <>Send Message 🚀</>
              )}
            </button>

            {/* Note */}
            <p className="text-center text-xs text-slate-muted">
              🔒 Your information is safe and will never be shared.
              We reply within <strong>24 hours</strong> on working days.
            </p>
          </form>
        </div>

        {/* Working Hours */}
        <div className="text-center mt-10">
          <p className="text-slate-muted text-sm">
            🕐 Working Hours: <strong className="text-slate-text">Mon - Sat, 9:00 AM - 7:00 PM IST</strong>
          </p>
          <p className="text-slate-muted text-sm mt-1">
            📍 Based in <strong className="text-slate-text">India</strong> • Serving clients <strong className="text-slate-text">Worldwide</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;