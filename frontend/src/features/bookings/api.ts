import api from '../../lib/api.client';
import { type Destination } from '../destinations/api';

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  destination?: Destination;
}

export const createBooking = async (data: { destinationId: string, startDate: Date, endDate: Date }) => {
  const response = await api.post('/bookings', data);
  return response.data.data.booking;
};

export const fetchUserBookings = async (): Promise<Booking[]> => {
  const response = await api.get('/bookings');
  return response.data.data.bookings;
};
