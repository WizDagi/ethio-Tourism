import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchMe } from '../../auth/api';
import { createBooking } from '../api';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BookingForm = ({ destinationId }: { destinationId: string }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { data: user } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false
  });

  const mutation = useMutation({
    mutationFn: () => createBooking({
      destinationId,
      startDate: new Date(startDate),
      endDate: new Date(endDate)
    }),
    onSuccess: () => {
      setSuccessMsg('Booking successful! View your dashboard.');
      setErrorMsg('');
      setStartDate('');
      setEndDate('');
    },
    onError: (error: any) => {
      setErrorMsg(error.response?.data?.message || 'Failed to create booking.');
      setSuccessMsg('');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!startDate || !endDate) {
      setErrorMsg('Please select both dates');
      return;
    }
    
    if (new Date(endDate) <= new Date(startDate)) {
      setErrorMsg('End date must be after start date');
      return;
    }
    
    setErrorMsg('');
    mutation.mutate();
  };

  return (
    <Card className="mt-8 border-primary/20 sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Ticket className="w-5 h-5 text-primary" /> Book this Trip
        </CardTitle>
        <CardDescription>
          {user ? 'Select your travel dates below.' : 'Please login to book this destination.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input 
                id="startDate" 
                type="date" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)}
                disabled={!user || mutation.isPending}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input 
                id="endDate" 
                type="date" 
                value={endDate} 
                onChange={e => setEndDate(e.target.value)}
                disabled={!user || mutation.isPending}
                min={startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          {errorMsg && <div className="text-sm text-destructive bg-destructive/10 p-2 rounded">{errorMsg}</div>}
          {successMsg && <div className="text-sm text-emerald-600 bg-emerald-500/10 p-2 rounded">{successMsg}</div>}
          
          <Button type="submit" disabled={!user || mutation.isPending} className="w-full mt-2">
            {!user ? 'Login to Book' : mutation.isPending ? 'Processing...' : 'Confirm Booking'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
