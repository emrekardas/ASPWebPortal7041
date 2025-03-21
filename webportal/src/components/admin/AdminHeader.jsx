"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function AdminHeader() {
  const { user, logout } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex justify-between h-16">
        <div className="flex px-4 items-center">
          <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
        </div>
        <div className="flex items-center px-4">
          <div className="flex items-center ml-2 relative">
            <button
              className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
              id="user-menu"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={toggleUserMenu}
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                {user?.attributes?.name ? user.attributes.name.charAt(0) : 'U'}
              </div>
            </button>

            {isUserMenuOpen && (
              <div
                className="origin-top-right absolute right-0 mt-12 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                  <p className="font-medium">{user?.attributes?.name || 'User'}</p>
                  <p className="text-xs text-gray-500">{user?.attributes?.email || 'user@example.com'}</p>
                </div>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="/admin/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
