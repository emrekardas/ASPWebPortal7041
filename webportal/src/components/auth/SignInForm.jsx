"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/services/auth';
import { useAuth } from '@/context/AuthContext';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await signIn(email, password);
      setUser(user);
      router.push('/dashboard');
    } catch (err) {
      console.error('Sign in error:', err);
      setError(err.message || 'An error occurred while signing in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="rounded-md -space-y-px">
        <div className="mb-4">
          <label htmlFor="email-address" className="sr-only">Email Address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input input-bordered w-full"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="checkbox checkbox-primary"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link 
            href="/auth/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link 
            href="/auth/sign-up" 
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
    </form>
  );
}
