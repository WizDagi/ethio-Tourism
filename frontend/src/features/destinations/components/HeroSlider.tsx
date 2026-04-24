import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideItem } from './SlideItem';
import { SliderControls } from './SliderControls';
import { SliderDots } from './SliderDots';

const heroSlides = [
  {
    id: 1,
    title: 'Rock-Hewn Churches of Lalibela',
    description: 'Discover the 12th-century monolithic churches carved entirely out of a single block of rock.',
    image: '/images/destinations/lalibela.jpg',
    cta: 'Explore Lalibela'
  },
  {
    id: 2,
    title: 'Blue Nile Falls (Tis Abay)',
    description: 'Experience the thunderous power of Tis Abay, the great falls of the Blue Nile river.',
    image: '/images/destinations/bluenile.jpg',
    cta: 'Discover the Falls'
  },
  {
    id: 3,
    title: 'Gheralta Mountains',
    description: 'Scale the dramatic sandstone cliffs sheltering ancient mountaintop monasteries.',
    image: '/images/destinations/gheralta.jpg',
    cta: 'Climb Gheralta'
  },
  {
    id: 4,
    title: 'The Obelisk of Axum',
    description: 'Walk among the gigantic, ancient steles marking the tombs of Ethiopian emperors.',
    image: '/images/destinations/axum.jpg',
    cta: 'Visit Axum'
  },
  {
    id: 5,
    title: 'Danakil Depression',
    description: 'Witness the otherworldly volcanic landscape of Dallol, featuring neon lakes and extreme landscapes.',
    image: '/images/destinations/Danakil.jpg',
    cta: 'Explore Danakil'
  },
  {
    id: 6,
    title: 'Fasil Ghebbi, Gondar',
    description: 'Explore the majestic 17th-century fortress city often referred to as the Camelot of Africa.',
    image: '/images/destinations/Gonder castle.jpg',
    cta: 'See Gondar'
  }
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div
      className="relative w-full h-[90vh] overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <SlideItem slide={heroSlides[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
        <motion.div
          key={currentIndex}
          className="h-full bg-amber-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5.5, ease: 'linear' }}
        />
      </div>

      <SliderControls onNext={handleNext} onPrev={handlePrev} />
      <SliderDots slides={heroSlides} currentIndex={currentIndex} onSelect={setCurrentIndex} />
    </div>
  );
};
