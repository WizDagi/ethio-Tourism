import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const SlideItem = ({ slide }: { slide: any }) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:px-24 pb-28 z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 w-fit"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 border border-amber-400/50 px-3 py-1 rounded-full backdrop-blur-sm bg-black/20">
            Ethiopia Tourism
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 leading-tight max-w-4xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl mb-8 leading-relaxed"
        >
          {slide.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <a
            href="#destinations"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 text-sm md:text-base"
          >
            {slide.cta}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#destinations"
            className="inline-flex items-center text-white/80 hover:text-white font-medium text-sm transition-colors border border-white/30 hover:border-white/60 px-5 py-3.5 rounded-full backdrop-blur-sm"
          >
            Plan Your Trip
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
};
