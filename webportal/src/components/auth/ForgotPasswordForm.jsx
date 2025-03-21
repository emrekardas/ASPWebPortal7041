"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { forgotPassword, confirmForgotPassword } from '@/services/auth';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  async function handleSubmitEmail(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await forgotPassword(email);
      setIsCodeSent(true);
    } catch (err) {
      console.error('Password reset error:', err);
      setError(err.message || 'An error occurred while sending password reset request.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmitNewPassword(e) {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await confirmForgotPassword(email, verificationCode, newPassword);
      setIsSuccess(true);
      
      // Redirect to sign-in page after 3 seconds
      setTimeout(() => {
        router.push('/auth/sign-in');
      }, 3000);
    } catch (err) {
      console.error('Password reset verification error:', err);
      setError(err.message || 'An error occurred while setting new password.');
    } finally {
      setIsLoading(false);
    }
  }

  function renderRequestForm() {
    return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmitEmail}>
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
        </div>

        <div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Code'}
          </button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            <Link 
              href="/auth/sign-in" 
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Return to sign in
            </Link>
          </p>
        </div>
      </form>
    );
  }

  function renderResetForm() {
    return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmitNewPassword}>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm text-blue-700">
            We've sent a verification code to your email address. Please enter the code and your new password.
          </p>
        </div>
        
        <div className="rounded-md -space-y-px">
          <div className="mb-4">
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
          
          <div className="mb-4">
            <label htmlFor="new-password" className="sr-only">New Password</label>
            <input
              id="new-password"
              name="new-password"
              type="password"
              autoComplete="new-password"
              required
              className="input input-bordered w-full"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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

        <div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Reset Password'}
          </button>
        </div>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="mt-8 space-y-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <div className="flex">
            <div>
              <p className="text-sm text-green-700">
                Your password has been successfully reset. Redirecting to the sign-in page...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex">
            <div>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      {isSuccess
        ? renderSuccessMessage()
        : isCodeSent
          ? renderResetForm()
          : renderRequestForm()
      }
    </div>
  );
}
