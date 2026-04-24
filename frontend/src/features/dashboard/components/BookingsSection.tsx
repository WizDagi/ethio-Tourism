import { useQuery } from '@tanstack/react-query';
import { fetchUserBookings } from '../../bookings/api';
import { BookingCard } from './BookingCard';
import { LoadingSkeleton } from './LoadingSkeleton';
import { Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const BookingsSection = () => {
  const navigate = useNavigate();
  const { data: bookings, isLoading, isError, error } = useQuery({
    queryKey: ['bookings'],
    queryFn: fetchUserBookings,
    retry: 1
  });

  if (isError) {
    return (
      <div className="bg-destructive/10 p-6 rounded-lg text-center border border-destructive/20 mt-4">
        <h3 className="text-lg font-bold text-destructive mb-2">Failed to load bookings</h3>
        <p className="text-sm text-foreground/80">{(error as any)?.message || 'An unexpected error occurred.'}</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2 dark:text-slate-100">
        <Ticket className="w-6 h-6 text-primary" /> Upcoming Bookings
      </h2>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1,2,3,4].map(n => <LoadingSkeleton key={n} />)}
        </div>
      ) : bookings && bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bookings.map((booking: any) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="bg-muted/30 p-12 rounded-xl text-center border border-dashed flex flex-col items-center justify-center">
          <Ticket className="w-12 h-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-slate-200">No Trips Planned</h3>
          <p className="text-muted-foreground mb-6 max-w-sm">You haven't booked any destinations yet. Discover Ethiopia's incredible historical sites!</p>
          <Button onClick={() => navigate('/')}>Explore Destinations</Button>
        </div>
      )}
    </section>
  );
};
