import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, CalendarClock } from 'lucide-react';
import { type Booking } from '../../bookings/api';

export const BookingCard = ({ booking }: { booking: Booking }) => {
  const dest = booking.destination;
  if (!dest) return null;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full border border-primary/20 bg-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={dest.image} 
          alt={dest.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-col gap-1">
          <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow drop-shadow-md flex items-center gap-1">
             <CalendarClock className="w-3 h-3" />
             {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-1 dark:text-slate-100">{dest.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-1 gap-1 font-medium">
          <MapPin className="w-4 h-4 text-primary" />
          {dest.location}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-foreground/80 line-clamp-3 dark:text-slate-300">
          {dest.description}
        </p>
      </CardContent>
    </Card>
  );
};
