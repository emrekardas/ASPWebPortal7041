import SignInForm from '@/components/auth/SignInForm';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Sign In - ASP Cloud Solutions',
  description: 'Sign in to your ASP Cloud Solutions account.',
};

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign In to Your Account
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <SignInForm />
      </Suspense>
    </div>
  );
}
