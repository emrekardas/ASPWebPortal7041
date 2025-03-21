import { Suspense } from 'react';
import UserManagement from '@/components/admin/users/UserManagement';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'User Management - ASP Cloud Solutions',
  description: 'Manage users and their permissions in ASP Cloud Solutions platform.',
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
      </div>
      
      <div>
        <Suspense fallback={<LoadingSpinner />}>
          <UserManagement />
        </Suspense>
      </div>
    </div>
  );
}
