import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';

export const metadata = {
  title: 'Dashboard - ASP Cloud Solutions',
  description: 'Your ASP Cloud Solutions user dashboard.',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ASP Cloud Solutions Dashboard</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <DashboardWelcome />
      </Suspense>
    </div>
  );
}
