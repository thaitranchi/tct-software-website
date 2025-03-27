"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image 
              src="/images/logo.png" 
              alt="TCT Softwares Logo" 
              fill 
              priority 
              className="object-contain rounded-lg"
            />
          </div>
          <span className="text-2xl font-semibold">TCT Softwares</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg mt-4 md:mt-0">
          <li>
            <Link href="/" aria-label="Home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" aria-label="Services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
