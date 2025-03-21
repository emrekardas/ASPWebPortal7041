import { Suspense } from 'react';
import AdminSettings from '@/components/admin/settings/AdminSettings';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Admin Settings - ASP Cloud Solutions',
  description: 'Manage system settings for ASP Cloud Solutions platform.',
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>
      </div>
      
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <AdminSettings />
        </Suspense>
      </div>
    </div>
  );
}
