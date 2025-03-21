import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ProfileForm from '@/components/profile/ProfileForm';

export const metadata = {
  title: 'My Profile - ASP Cloud Solutions',
  description: 'ASP Cloud Solutions user profile page.',
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Your Profile</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <ProfileForm />
      </Suspense>
    </div>
  );
}
