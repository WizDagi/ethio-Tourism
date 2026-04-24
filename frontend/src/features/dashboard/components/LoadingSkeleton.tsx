import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const LoadingSkeleton = () => {
  return (
    <Card className="overflow-hidden flex flex-col h-full border border-primary/10">
      <div className="relative h-48 w-full p-2">
        <Skeleton className="w-full h-full rounded-md" />
      </div>
      <CardHeader className="pb-2">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="flex-1">
        <Skeleton className="h-20 w-full mb-4" />
      </CardContent>
    </Card>
  );
};
