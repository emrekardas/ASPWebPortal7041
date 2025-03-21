import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Redirect users to /auth/sign-in page
  redirect('/auth/sign-in');
}
