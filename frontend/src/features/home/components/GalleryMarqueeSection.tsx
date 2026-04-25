import { motion } from 'framer-motion';

const images = [
  '/images/destinations/Danakil.jpg',
  '/images/destinations/Gonder castle.jpg',
  '/images/destinations/axum.jpg',
  '/images/destinations/bluenile.jpg',
  '/images/destinations/gheralta.jpg',
  '/images/destinations/lalibela.jpg',
];

// Duplicate the array to create a seamless loop
const duplicatedImages = [...images, ...images];

export const GalleryMarqueeSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-foreground/[0.02] dark:bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-7xl mb-12 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
          Visual Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          A Glimpse of <span className="text-gold-gradient">Paradise</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Content */}
        <motion.div
          className="flex gap-6 py-4 w-max"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-72 md:w-96 h-64 md:h-80 rounded-3xl overflow-hidden shrink-0 shadow-lg border border-amber-200/20 hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
