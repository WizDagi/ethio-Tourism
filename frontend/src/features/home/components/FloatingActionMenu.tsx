import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Map, Calendar, X, Menu } from 'lucide-react';

export const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Show only after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    { id: 'book', label: 'Book Trip', icon: <Calendar className="w-5 h-5" />, color: 'bg-amber-500' },
    { id: 'map', label: 'Explore Map', icon: <Map className="w-5 h-5" />, color: 'bg-blue-500' },
    { id: 'whatsapp', label: 'Chat with Us', icon: <MessageCircle className="w-5 h-5" />, color: 'bg-green-500' },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ staggerChildren: 0.1 }}
                className="flex flex-col gap-3"
              >
                {actions.map((action, i) => (
                  <motion.button
                    key={action.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md border border-gray-200 dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                      {action.label}
                    </span>
                    <div className={`w-12 h-12 rounded-full ${action.color} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                      {action.icon}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
            aria-label="Toggle Actions"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
