import api from '../../lib/api.client';
import { type Destination } from '../destinations/api';

export interface Favorite {
  id: string;
  userId: string;
  destinationId: string;
  destination?: Destination;
}

export const fetchUserFavorites = async (): Promise<Favorite[]> => {
  const response = await api.get('/favorites');
  return response.data.data.favorites;
};

export const addFavorite = async (destinationId: string) => {
  const response = await api.post(`/favorites/${destinationId}`);
  return response.data;
};

export const removeFavorite = async (destinationId: string) => {
  const response = await api.delete(`/favorites/${destinationId}`);
  return response.data;
};
