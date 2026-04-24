import { useQuery } from '@tanstack/react-query';
import { fetchMe } from '../../auth/api';
import { DashboardLayout } from './DashboardLayout';
import { BookingsSection } from './BookingsSection';
import { FavoritesSection } from './FavoritesSection';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data: userResponse, isLoading, isError } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false
  });

  const user = userResponse?.data?.user;

  useEffect(() => {
    if (isError) {
      navigate('/login');
    }
  }, [isError, navigate]);

  if (isLoading) {
    return (
      <DashboardLayout userName="...">
        <div className="flex items-center justify-center h-48 w-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  if (!user) return null;

  return (
    <DashboardLayout userName={user.name}>
      <BookingsSection />
      <FavoritesSection />
    </DashboardLayout>
  );
};
