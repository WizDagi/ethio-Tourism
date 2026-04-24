import { ReactNode } from 'react';

export const DashboardLayout = ({ children, userName }: { children: ReactNode, userName: string }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100">Welcome, {userName}</h1>
        <p className="text-muted-foreground">Manage your secure travel itinerary and saved wishlist.</p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {children}
      </div>
    </div>
  );
};
