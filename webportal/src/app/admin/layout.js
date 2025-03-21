import { Suspense } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Admin Panel - ASP Cloud Solutions',
  description: 'Admin control panel for ASP Cloud Solutions.',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <AdminHeader />
          
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
            <Suspense fallback={<LoadingSpinner />}>
              {children}
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
