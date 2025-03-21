import { Suspense } from 'react';
import LogsManagement from '@/components/admin/logs/LogsManagement';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'System Logs - ASP Cloud Solutions',
  description: 'View and manage system logs and activity history for ASP Cloud Solutions platform.',
};

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">System Logs</h1>
      </div>
      
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <LogsManagement />
        </Suspense>
      </div>
    </div>
  );
}
