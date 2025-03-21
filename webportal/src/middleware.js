import { NextResponse } from 'next/server';

// Pages that require authentication
const protectedRoutes = [
  '/dashboard',
  '/dashboard/',
  '/profile',
  '/profile/',
  '/settings',
  '/settings/',
  '/billing',
  '/billing/',
  '/admin',
  '/admin/'
];

// Auth pages
const authRoutes = [
  '/auth/sign-in',
  '/auth/sign-in/',
  '/auth/login',
  '/auth/login/',
  '/auth/sign-up',
  '/auth/sign-up/',
  '/auth/forgot-password',
  '/auth/forgot-password/'
];

// Admin pages require admin role
const adminRoutes = [
  '/admin',
  '/admin/'
];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Auth token check
  const token = request.cookies.get('token')?.value;
  const isAuthenticated = !!token;
  
  // Admin role check (in production this would be more robust)
  const isAdmin = request.cookies.get('isAdmin')?.value === 'true';
  
  // Protected page access control
  const isProtectedPage = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // Admin page access control
  const isAdminPage = adminRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // Auth page access control
  const isAuthPage = authRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // Request to a protected page and user is not logged in
  if (isProtectedPage && !isAuthenticated) {
    const redirectUrl = new URL('/auth/sign-in', request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Request to admin page but user is not an admin
  if (isAdminPage && (!isAuthenticated || !isAdmin)) {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      const redirectUrl = new URL('/auth/sign-in', request.url);
      redirectUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(redirectUrl);
    }
    
    // If authenticated but not admin, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // User is already logged in and trying to access an auth page
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/billing/:path*',
    '/auth/:path*',
    '/admin/:path*'
  ],
};
