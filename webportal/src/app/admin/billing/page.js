import { Suspense } from 'react';
import BillingManagement from '@/components/admin/billing/BillingManagement';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Billing Management - ASP Cloud Solutions',
  description: 'Manage invoices, payments, and billing settings for ASP Cloud Solutions platform.',
};

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Billing Management</h1>
      </div>
      
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <BillingManagement />
        </Suspense>
      </div>
    </div>
  );
}
