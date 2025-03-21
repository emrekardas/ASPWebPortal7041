"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { getAdminStats } from '@/services/admin';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalServices: 0,
    activeServices: 0,
    totalRevenue: 0,
    pendingInvoices: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadAdminStats() {
      try {
        const adminStats = await getAdminStats(user);
        setStats(adminStats);
      } catch (error) {
        console.error('Error loading admin stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAdminStats();
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500">Total Users</p>
                <h3 className="text-3xl font-bold text-gray-700">{stats.totalUsers}</h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-green-500">{stats.activeUsers} active</span>
                <span className="text-gray-500">{stats.totalUsers - stats.activeUsers} inactive</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(stats.activeUsers / stats.totalUsers) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3">
            <Link href="/admin/users" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View all users →
            </Link>
          </div>
        </div>

        {/* Services Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500">Total Services</p>
                <h3 className="text-3xl font-bold text-gray-700">{stats.totalServices}</h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-green-500">{stats.activeServices} active</span>
                <span className="text-gray-500">{stats.totalServices - stats.activeServices} inactive</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(stats.activeServices / stats.totalServices) * 100}%` }}></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3">
            <Link href="/admin/services" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              View all services →
            </Link>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="ml-5">
                <p className="text-gray-500">Total Revenue</p>
                <h3 className="text-3xl font-bold text-gray-700">${stats.totalRevenue.toLocaleString()}</h3>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span className="text-green-500">Paid</span>
                <span className="text-orange-500">{stats.pendingInvoices} pending invoices</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3">
            <Link href="/admin/billing" className="text-green-600 hover:text-green-800 text-sm font-medium">
              View billing details →
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">New user registered</h3>
                    <p className="text-sm text-gray-500">1 hour ago</p>
                  </div>
                  <p className="text-sm text-gray-500">John Doe (john.doe@example.com) created a new account.</p>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Service upgraded</h3>
                    <p className="text-sm text-gray-500">3 hours ago</p>
                  </div>
                  <p className="text-sm text-gray-500">Cloud Storage service for Tech Solutions Inc. upgraded to Enterprise plan.</p>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Invoice paid</h3>
                    <p className="text-sm text-gray-500">5 hours ago</p>
                  </div>
                  <p className="text-sm text-gray-500">Invoice #2022-0456 for $1,299.00 was paid by Acme Corp.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
