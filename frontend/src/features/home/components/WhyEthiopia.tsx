import { motion, type Variants } from 'framer-motion';
import { Landmark, Mountain, PawPrint, Coffee, BookOpen, Music } from 'lucide-react';

const stats = [
  { value: '85M+', label: 'Population' },
  { value: '1000+', label: 'Years of History' },
  { value: '9', label: 'UNESCO Sites' },
  { value: '80+', label: 'Languages Spoken' },
];

const features = [
  {
    icon: <Landmark className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Ancient Civilizations',
    description: 'Walk through history spanning over 3,000 years. Ethiopia is home to ancient kingdoms, medieval capitals, and some of the world\'s most significant archaeological sites.',
  },
  {
    icon: <Mountain className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Dramatic Landscapes',
    description: 'From the volcanic hellscape of the Danakil Depression to the cool highlands of the Simien Mountains — Ethiopia\'s terrain is unlike anywhere on Earth.',
  },
  {
    icon: <PawPrint className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Unique Wildlife',
    description: 'Encounter gelada baboons, Ethiopian wolves, and the colobus monkey in their natural habitats. Over 800 bird species make Ethiopia a birder\'s paradise.',
  },
  {
    icon: <Coffee className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Birthplace of Coffee',
    description: 'Coffee originated in the Ethiopian highlands of Kaffa. Experience the traditional coffee ceremony — a ritual of community, culture, and the world\'s finest brews.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Living Faith & Culture',
    description: 'Home to one of the world\'s oldest Christian churches and rich Islamic heritage. Witness the Timket festival, Meskel celebrations, and ancient Orthodox traditions.',
  },
  {
    icon: <Music className="w-10 h-10 text-eth-deepblue dark:text-blue-400" />,
    title: 'Vibrant Music & Art',
    description: 'Ethiopian music — from the hypnotic rhythms of Eskista dance to the haunting scales of traditional instruments — will move you in ways you\'ve never experienced.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const WhyEthiopia = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-background to-orange-50/60 dark:from-amber-950/20 dark:via-background dark:to-orange-950/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/5 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-eth-deepblue dark:text-blue-400 mb-4">
            The Cradle of Humanity
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Why Choose{' '}
            <span className="text-orange-500">Ethiopia?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            A land of legends, landscapes, and living history. Ethiopia offers experiences that cannot be found anywhere else on the planet.
          </p>
          <motion.a 
            href="/destinations"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-colors text-lg"
          >
            Explore Destinations
          </motion.a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black text-eth-deepblue dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-2 cursor-default"
            >
              <div className="mb-5">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-eth-deepblue dark:group-hover:text-blue-400 transition-colors font-serif">
                {feat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-eth-deepblue/0 to-eth-deepblue/0 group-hover:from-eth-deepblue/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
