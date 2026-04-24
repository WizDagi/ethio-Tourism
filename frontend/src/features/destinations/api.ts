import api from '../../lib/api.client';

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  category: string;
  createdAt: string;
}

export const fetchDestinations = async (): Promise<Destination[]> => {
  const response = await api.get('/destinations');
  return response.data.data.destinations;
};

export const fetchDestinationById = async (id: string): Promise<Destination> => {
  const response = await api.get(`/destinations/${id}`);
  return response.data.data.destination;
};
