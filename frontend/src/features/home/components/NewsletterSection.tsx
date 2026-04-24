import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/destinations/gheralta.jpg"
          alt="Ethiopia landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-amber-950/75 to-black/85" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-400/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-400/15 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center backdrop-blur-sm">
              <Mail className="w-7 h-7 text-amber-400" />
            </div>
          </div>

          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-400 mb-4">
            Stay Inspired
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Get Exclusive{' '}
            <span className="text-amber-400">Travel Insights</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of travelers who receive our curated guides, hidden gems, seasonal travel tips, and exclusive deals directly in their inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle2 className="w-14 h-14 text-green-400" />
              <p className="text-xl font-semibold text-white">You're on the list!</p>
              <p className="text-gray-400">Welcome to the Ethiopia Premium community.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-7 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 text-sm whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          )}

          <p className="text-gray-500 text-xs mt-5">No spam, ever. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  );
};
