"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="ASP Cloud Solutions Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-gray-800">ASP Cloud Solutions</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="btn btn-ghost flex items-center">
                  <span className="mr-2">{user?.attributes?.name || 'User'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <hr className="my-1" />
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/auth/sign-in" className="text-gray-600 hover:text-primary transition-colors">
                  Sign In
                </Link>
                <Link href="/auth/sign-up" className="btn btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/products" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link 
                href="/solutions" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Solutions
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <div className="pt-4 border-t">
                {isAuthenticated ? (
                  <>
                    <Link 
                      href="/dashboard" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="/profile" 
                      className="block py-2 text-gray-600 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        toggleMenu();
                      }}
                      className="block py-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link 
                      href="/auth/sign-in" 
                      className="btn btn-outline btn-primary"
                      onClick={toggleMenu}
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/auth/sign-up" 
                      className="btn btn-primary"
                      onClick={toggleMenu}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
