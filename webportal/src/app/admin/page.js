import { Suspense } from 'react';
import AdminDashboard from '@/components/admin/AdminDashboard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Admin Dashboard - ASP Cloud Solutions',
  description: 'Admin dashboard for ASP Cloud Solutions platform.',
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>
      
      <div className="grid gap-6">
        <Suspense fallback={<LoadingSpinner />}>
          <AdminDashboard />
        </Suspense>
      </div>
    </div>
  );
}
