import { DestinationCard } from '../../destinations/components/DestinationCard';
import { type Favorite } from '../../favorites/api';

export const FavoriteCard = ({ favorite }: { favorite: Favorite }) => {
  if (!favorite.destination) return null;
  return (
    <div className="relative group w-full h-full">
      <DestinationCard destination={favorite.destination} />
    </div>
  );
};
