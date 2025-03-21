"use client";

import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="hero min-h-[90vh] bg-base-200" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">ASP Solutions Cloud Portal</h1>
          <p className="mb-8 text-xl">
            Manage your sales, order management, consultancy and training services on a single platform.
            Simplify your operations with our cloud-based solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products" className="btn btn-primary">Explore Products</Link>
            <Link href="/consultancy" className="btn btn-outline btn-secondary">Consultancy Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
