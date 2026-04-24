import { motion } from 'framer-motion';

const experiences = [
  {
    image: '/images/destinations/lalibela.jpg',
    title: 'Heritage & History',
    tag: 'Cultural',
    description: 'Explore ancient rock-hewn churches, royal castles and sacred obelisks that have stood for millennia.',
    color: 'from-amber-600/60',
  },
  {
    image: '/images/destinations/Danakil.jpg',
    title: 'Extreme Adventures',
    tag: 'Adventure',
    description: 'Travel to the hottest place on Earth, trek active volcanoes, and witness alien-like sulfur springs.',
    color: 'from-red-700/60',
  },
  {
    image: '/images/destinations/bluenile.jpg',
    title: 'Nature & Wildlife',
    tag: 'Eco-Tourism',
    description: 'Discover cascading waterfalls, highland plateaus brimming with endemic wildlife, and pristine rift valley lakes.',
    color: 'from-blue-700/60',
  },
  {
    image: '/images/destinations/axum.jpg',
    title: 'Spiritual Journeys',
    tag: 'Pilgrimage',
    description: 'Follow ancient pilgrimage routes to sacred sites revered by millions of Orthodox Christians across Ethiopia.',
    color: 'from-emerald-700/60',
  },
];

export const ExperiencesSection = () => {
  return (
    <section className="py-24 bg-foreground/[0.02] dark:bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
            Curated Journeys
          </span>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
            Signature <span className="text-gold-gradient">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hand-crafted experiences designed for discerning travelers who seek the extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} via-black/20 to-transparent`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-amber-400 border border-amber-400/40 px-2.5 py-0.5 rounded-full">
                    {exp.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {exp.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                  {exp.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-amber-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
