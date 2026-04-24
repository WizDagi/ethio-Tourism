import { motion } from 'framer-motion';
import { Plane, Calendar, Map, ShieldCheck } from 'lucide-react';

const tips = [
  {
    icon: Plane,
    title: 'Best Time to Visit',
    description: 'October to February is the ideal season — cool, dry weather with clear highland views and spectacular festivals like Timket and Meskel.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: Map,
    title: 'Getting Around',
    description: 'Ethiopian Airlines connects major cities. For remote destinations, 4x4 vehicles are recommended. Local guides enhance every experience.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: Calendar,
    title: 'Plan Ahead',
    description: 'Book accommodations 3–6 months in advance for peak season. Popular sites like Lalibela require advance permits especially during religious holidays.',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Health',
    description: 'Recommended vaccinations include Hepatitis A, Typhoid, and Yellow Fever. Malaria prophylaxis is advised for lowland areas. Ethiopia is generally safe for tourists.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
];

export const TravelTipsSection = () => {
  return (
    <section className="py-24 bg-foreground/[0.03] dark:bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
            Traveler's Guide
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-5">
            Essential <span className="text-gold-gradient">Travel Tips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know before embarking on your Ethiopian adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl border backdrop-blur-sm ${tip.bg} hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/5`}>
                <tip.icon className={`w-6 h-6 ${tip.color}`} />
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {tip.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
