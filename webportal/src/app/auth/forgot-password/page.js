import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Forgot Password - ASP Cloud Solutions',
  description: 'Reset your ASP Cloud Solutions account password.',
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Reset Your Password
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
}
