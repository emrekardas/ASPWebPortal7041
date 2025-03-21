import { Suspense } from 'react';
import ServicesManagement from '@/components/admin/services/ServicesManagement';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Services Management - ASP Cloud Solutions',
  description: 'Manage cloud services in ASP Cloud Solutions platform.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Services Management</h1>
      </div>
      
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <ServicesManagement />
        </Suspense>
      </div>
    </div>
  );
}
