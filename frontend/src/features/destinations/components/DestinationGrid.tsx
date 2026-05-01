import { useQuery } from '@tanstack/react-query';
import { fetchDestinations } from '../api';
import { DestinationCard } from './DestinationCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const DestinationGrid = () => {
  const { data: destinations, isLoading, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations
  });

  if (isLoading) return (
    <div className="py-24 flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Loading destinations...</p>
    </div>
  );

  if (error) return (
    <div className="py-24 text-center">
      <p className="text-destructive text-lg">Failed to load destinations.</p>
      <p className="text-sm text-muted-foreground mt-2">Make sure the backend server is running.</p>
    </div>
  );

  return (
    <section id="destinations" className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-4">
            Explore Ethiopia
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-5">
            Featured <span className="text-gold-gradient">Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Handpicked locations that showcase the very best of Ethiopia's extraordinary heritage and landscapes.
          </p>
        </motion.div>

        {(!destinations || destinations.length === 0) ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🗺️</p>
            <p className="text-xl font-semibold mb-2">No destinations yet</p>
            <p className="text-muted-foreground mb-6">Destinations will appear here once added from the admin panel.</p>
            <Link
              to="/dashboard"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-full transition-all"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <Link to={`/destination/${dest.id}`} className="block transition-transform hover:-translate-y-1">
                  <DestinationCard destination={dest} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
