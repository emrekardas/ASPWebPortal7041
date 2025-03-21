"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signUp, confirmSignUp } from '@/services/auth';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmStep, setIsConfirmStep] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!isConfirmStep) {
      // First step: User registration
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      try {
        await signUp(email, password, name, company);
        setIsConfirmStep(true);
      } catch (err) {
        console.error('Registration error:', err);
        setError(err.message || 'An error occurred during registration. Please check your information.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Second step: Confirmation code verification
      try {
        await confirmSignUp(email, verificationCode);
        router.push('/auth/sign-in?registered=true');
      } catch (err) {
        console.error('Verification error:', err);
        setError(err.message || 'An error occurred while verifying your account.');
      } finally {
        setIsLoading(false);
      }
    }
  }

  function renderSignUpForm() {
    return (
      <>
        <div className="rounded-md -space-y-px">
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="input input-bordered w-full"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="company" className="sr-only">Company (Optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="input input-bordered w-full"
              placeholder="Company (Optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          
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
          
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="input input-bordered w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="input input-bordered w-full"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-3">
          <p>
            By registering, you agree to our <Link href="/terms" className="underline">Terms of Use</Link> and{' '}
            <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </>
    );
  }

  function renderConfirmationForm() {
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm text-blue-700">
            We've sent a verification code to your email address. Please enter the code to verify your account.
          </p>
        </div>
        
        <div>
          <label htmlFor="verification-code" className="sr-only">Verification Code</label>
          <input
            id="verification-code"
            name="verification-code"
            type="text"
            required
            className="input input-bordered w-full"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </div>
      </div>
    );
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
      
      {isConfirmStep ? renderConfirmationForm() : renderSignUpForm()}

      <div>
        <button
          type="submit"
          className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading 
            ? (isConfirmStep ? 'Verifying...' : 'Registering...') 
            : (isConfirmStep ? 'Verify' : 'Sign Up')}
        </button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link 
            href="/auth/sign-in" 
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}
