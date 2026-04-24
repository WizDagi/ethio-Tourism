import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Heart, ArrowRight } from 'lucide-react';
import { type Destination } from '../api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMe } from '../../auth/api';
import { fetchUserFavorites, addFavorite, removeFavorite } from '../../favorites/api';
import { useNavigate } from 'react-router-dom';

export const DestinationCard = ({ destination }: { destination: Destination }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false
  });

  const { data: favorites } = useQuery({
    queryKey: ['favorites'],
    queryFn: fetchUserFavorites,
    enabled: !!user
  });

  const isFavorite = favorites?.some(fav => fav.destinationId === destination.id) || false;

  const toggleMutation = useMutation({
    mutationFn: async () => {
      if (!user) {
        navigate('/login');
        throw new Error('Not logged in');
      }
      return isFavorite ? removeFavorite(destination.id) : addFavorite(destination.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    }
  });

  return (
    <Card className="overflow-hidden group flex flex-col h-full relative border hover:border-amber-300/50 dark:hover:border-amber-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/10">
      {/* Favorite button */}
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMutation.mutate();
          }}
          disabled={toggleMutation.isPending}
          className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-all"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isFavorite
                ? 'fill-red-500 text-red-500 scale-110'
                : 'fill-transparent text-white group-hover:text-red-300'
            }`}
          />
        </button>
      </div>

      {/* Image */}
      <div
        className="relative h-52 overflow-hidden cursor-pointer"
        onClick={() => navigate(`/destination/${destination.id}`)}
      >
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-amber-500 text-black text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
            {destination.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardHeader
        className="pb-2 cursor-pointer"
        onClick={() => navigate(`/destination/${destination.id}`)}
      >
        <CardTitle className="text-xl leading-tight line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {destination.title}
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-1 gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
          {destination.location}
        </div>
      </CardHeader>

      <CardContent
        className="flex-1 cursor-pointer pb-4"
        onClick={() => navigate(`/destination/${destination.id}`)}
      >
        <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed">
          {destination.description}
        </p>

        {/* View more */}
        <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </CardContent>
    </Card>
  );
};
