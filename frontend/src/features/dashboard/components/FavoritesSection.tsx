import { useQuery } from '@tanstack/react-query';
import { fetchUserFavorites } from '../../favorites/api';
import { FavoriteCard } from './FavoriteCard';
import { LoadingSkeleton } from './LoadingSkeleton';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const FavoritesSection = () => {
  const navigate = useNavigate();
  const { data: favorites, isLoading, isError, error } = useQuery({
    queryKey: ['favorites'],
    queryFn: fetchUserFavorites,
    retry: 1
  });

  if (isError) {
    return (
      <div className="bg-destructive/10 p-6 rounded-lg text-center border border-destructive/20 mt-4">
        <h3 className="text-lg font-bold text-destructive mb-2">Failed to load wishlist</h3>
        <p className="text-sm text-foreground/80">{(error as any)?.message || 'An unexpected error occurred.'}</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2 dark:text-slate-100">
        <Heart className="w-6 h-6 text-red-500 fill-red-500/20" /> Saved Favorites
      </h2>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1,2,3,4].map(n => <LoadingSkeleton key={n} />)}
        </div>
      ) : favorites && favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((fav: any) => (
            <FavoriteCard key={fav.id} favorite={fav} />
          ))}
        </div>
      ) : (
        <div className="bg-muted/30 p-12 rounded-xl text-center border border-dashed flex flex-col items-center justify-center">
          <Heart className="w-12 h-12 text-muted-foreground/30 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-slate-200">No Favorites Yet</h3>
          <p className="text-muted-foreground mb-6 max-w-sm">Tap the heart icon on any destination to save it for later.</p>
          <Button onClick={() => navigate('/')} variant="secondary">Browse Tours</Button>
        </div>
      )}
    </section>
  );
};
