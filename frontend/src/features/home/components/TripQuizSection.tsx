import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Compass, Camera, Heart, Trees, Landmark } from 'lucide-react';

const questions = [
  {
    id: 'style',
    question: 'What is your preferred travel style?',
    options: [
      { id: 'adventure', label: 'Thrilling Adventure', icon: <Compass className="w-6 h-6" /> },
      { id: 'culture', label: 'Cultural Immersion', icon: <Landmark className="w-6 h-6" /> },
      { id: 'nature', label: 'Nature & Wildlife', icon: <Trees className="w-6 h-6" /> },
      { id: 'relax', label: 'Romantic & Relaxing', icon: <Heart className="w-6 h-6" /> },
    ]
  },
  {
    id: 'duration',
    question: 'How long do you plan to stay?',
    options: [
      { id: 'short', label: '1-3 Days (Quick Getaway)', icon: <Map className="w-6 h-6" /> },
      { id: 'medium', label: '4-7 Days (One Week Tour)', icon: <Camera className="w-6 h-6" /> },
      { id: 'long', label: '8+ Days (Deep Exploration)', icon: <Compass className="w-6 h-6" /> },
    ]
  }
];

const results = {
  adventure: {
    title: 'The Danakil Depression',
    description: 'An otherworldly landscape of active volcanoes and salt flats. Perfect for the ultimate adventurer.',
    image: '/images/destinations/Danakil.jpg',
  },
  culture: {
    title: 'Lalibela Rock-Hewn Churches',
    description: 'A breathtaking journey into ancient spirituality and jaw-dropping medieval architecture.',
    image: '/images/destinations/lalibela.jpg',
  },
  nature: {
    title: 'Blue Nile Falls & Lake Tana',
    description: 'Experience the raw power of nature and serene boat trips on Ethiopia\'s largest lake.',
    image: '/images/destinations/bluenile.jpg',
  },
  relax: {
    title: 'Gonder Castles',
    description: 'Stroll through the "Camelot of Africa", a relaxing dive into the royal history of Ethiopia.',
    image: '/images/destinations/Gonder castle.jpg',
  }
};

export const TripQuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const currentQuestion = questions[currentStep];
  // Simple logic to pick result based on first answer
  const recommendedResult = showResult ? results[answers.style as keyof typeof results] || results.culture : null;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-amber-50/30 dark:to-amber-950/10">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
            Curated For You
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Answer a few quick questions and let us match you with your dream Ethiopian destination.
          </p>
        </div>

        <div className="min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full max-w-2xl bg-white/70 dark:bg-black/40 backdrop-blur-md border border-amber-200/50 dark:border-amber-800/30 p-8 md:p-12 rounded-3xl shadow-xl"
              >
                <div className="mb-8">
                  <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2 uppercase tracking-widest">
                    Step {currentStep + 1} of {questions.length}
                  </div>
                  <h3 className="text-3xl font-bold">{currentQuestion.question}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(currentQuestion.id, option.id)}
                      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300
                        ${answers[currentQuestion.id] === option.id 
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 shadow-md scale-[1.02]' 
                          : 'border-transparent bg-gray-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-amber-300/50 hover:shadow-sm'
                        }`}
                    >
                      <div className={`p-3 rounded-full ${answers[currentQuestion.id] === option.id ? 'bg-amber-200/50 dark:bg-amber-800/50' : 'bg-background'}`}>
                        {option.icon}
                      </div>
                      <span className="font-semibold text-center">{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-md border border-amber-200/50 dark:border-amber-800/30 shadow-2xl flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img src={recommendedResult?.image} alt={recommendedResult?.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400 mb-2">
                    Your Match
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{recommendedResult?.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {recommendedResult?.description}
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href="#destinations"
                      className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
                    >
                      Explore Package
                    </a>
                    <button onClick={resetQuiz} className="w-full py-4 px-6 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 font-semibold rounded-xl transition-all text-muted-foreground hover:text-foreground">
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
