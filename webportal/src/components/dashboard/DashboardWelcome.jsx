"use client";

import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/services/auth';
import Link from 'next/link';

export default function DashboardWelcome() {
  const { user, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const userData = await getCurrentUser();
        setUserDetails(userData);
      } catch (error) {
        console.error('Could not fetch user details:', error);
      }
    }

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Welcome, {userDetails.attributes?.name || 'User'}</h2>
        <p className="text-gray-600">
          {userDetails.attributes?.['custom:company'] ? `From ${userDetails.attributes['custom:company']}` : 'Individual User'}
        </p>
        <p className="text-gray-500 text-sm mt-1">{userDetails.attributes?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">Your Cloud Services</h3>
          <p className="text-gray-600 mb-4">View and manage your active services.</p>
          <Link 
            href="/services" 
            className="btn btn-sm btn-primary"
          >
            Go to Services
          </Link>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-purple-800">Billing & Payments</h3>
          <p className="text-gray-600 mb-4">Manage your billing history and payment details.</p>
          <Link 
            href="/billing" 
            className="btn btn-sm btn-primary"
          >
            View Invoices
          </Link>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Support & Help</h3>
          <p className="text-gray-600 mb-4">Get technical support or ask questions.</p>
          <Link 
            href="/support" 
            className="btn btn-sm btn-primary"
          >
            Request Support
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <button 
          onClick={logout}
          className="btn btn-outline btn-error"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
