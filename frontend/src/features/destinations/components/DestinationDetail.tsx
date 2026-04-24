import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDestinationById } from '../api';
import { ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingForm } from '../../bookings/components/BookingForm';

export const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: destination, isLoading, error } = useQuery({
    queryKey: ['destination', id],
    queryFn: () => fetchDestinationById(id!),
    enabled: !!id
  });

  if (isLoading) return <div className="p-16 text-center text-xl">Loading details...</div>;
  if (error || !destination) return <div className="p-16 text-center text-xl text-destructive">Destination not found.</div>;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
        
        <div className="absolute top-6 left-6 z-10">
          <Button variant="secondary" size="icon" asChild className="rounded-full shadow-lg">
            <Link to="/"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card shadow-2xl rounded-xl p-8 md:p-12 border">
            <div className="flex flex-wrap gap-3 mb-4 text-sm font-medium">
              <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full"><Tag className="w-4 h-4"/> {destination.category}</span>
              <span className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full"><MapPin className="w-4 h-4"/> {destination.location}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{destination.title}</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="whitespace-pre-line leading-relaxed text-foreground/90">
                {destination.description}
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground border-t pt-6">
              <Calendar className="w-4 h-4" />
              Added on {new Date(destination.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="lg:col-span-1">
            <BookingForm destinationId={destination.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
