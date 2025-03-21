"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, refreshToken, signOut } from '@/services/auth';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for existing user session when the application starts
  useEffect(() => {
    async function loadUserFromSession() {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          // Refresh token
          await refreshToken();
        }
      } catch (error) {
        console.error('Error during session check:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUserFromSession();
  }, []);

  // Periodic token refresh (every 45 minutes)
  useEffect(() => {
    if (!user) return;

    const tokenRefreshInterval = setInterval(async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.error('Token refresh error:', error);
        // Force user to log out if token can't be refreshed
        handleLogout();
      }
    }, 45 * 60 * 1000); // 45 minutes

    return () => clearInterval(tokenRefreshInterval);
  }, [user]);

  async function handleLogout() {
    try {
      await signOut();
      setUser(null);
      router.push('/auth/sign-in');
    } catch (error) {
      console.error('Error while signing out:', error);
    }
  }

  const value = {
    user,
    setUser,
    isAuthenticated: !!user,
    loading,
    logout: handleLogout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
