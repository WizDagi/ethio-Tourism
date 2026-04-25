import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Adventure Photographer',
    image: 'https://i.pravatar.cc/150?img=47',
    content: 'Trekking the Simien Mountains was an experience of a lifetime. The raw beauty of Ethiopia is unmatched. The local guides were incredibly knowledgeable and made the trip unforgettable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'History Enthusiast',
    image: 'https://i.pravatar.cc/150?img=11',
    content: 'Standing before the rock-hewn churches of Lalibela left me speechless. It is truly a wonder of the world. The deep cultural roots of Ethiopia are something everyone should witness.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Cultural Explorer',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'The coffee ceremony, the food, the vibrant music—every moment felt magical. I felt so welcomed by the warmth of the Ethiopian people. I cannot wait to return.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/50 dark:from-amber-950/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
              Traveler Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hear From Our <span className="text-gold-gradient">Guests</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Don't just take our word for it. Read what fellow travelers have to say about their extraordinary journeys through Ethiopia.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-amber-200 dark:border-amber-800 flex items-center justify-center hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-amber-200 dark:border-amber-800 flex items-center justify-center hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full relative h-[400px]">
            <Quote className="absolute -top-10 -left-6 w-24 h-24 text-amber-500/10 dark:text-amber-400/5 rotate-180" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-amber-200/50 dark:border-amber-800/30 p-10 md:p-12 rounded-3xl shadow-xl w-full">
                  <div className="flex gap-1 mb-6 text-amber-500">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 italic text-foreground/90">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-200 dark:border-amber-800"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};
