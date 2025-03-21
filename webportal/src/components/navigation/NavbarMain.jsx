"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ButtonCart from "../buttons/ButtonCart";

export default function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home Page", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Trainings", path: "/trainings" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={pathname === link.path ? "font-bold" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
            <span className="text-white font-bold">ASP</span>
          </div>
          <span className="text-lg font-bold">ASP Solutions</span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path} 
                className={pathname === link.path ? "font-bold" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end">
        <ButtonCart />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="bg-neutral-content h-full w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/profile">Profilim</Link></li>
            <li><Link href="/orders">Siparişlerim</Link></li>
            <li><Link href="/auth/login">Giriş Yap</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
