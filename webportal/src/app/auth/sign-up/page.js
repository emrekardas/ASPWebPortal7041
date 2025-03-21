import SignUpForm from '@/components/auth/SignUpForm';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export const metadata = {
  title: 'Sign Up - ASP Cloud Solutions',
  description: 'Create an ASP Cloud Solutions account.',
};

export default function SignUpPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create a New Account
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <SignUpForm />
      </Suspense>
    </div>
  );
}
