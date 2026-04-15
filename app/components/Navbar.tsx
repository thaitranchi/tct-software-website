"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <Image 
              src="/images/logo-cropped.png" 
              alt="TCT Softwares Logo" 
              fill 
              priority 
              className="object-contain rounded-xl"
            />
          </div>
          <span className="text-2xl font-bold">TCT Softwares</span>
        </div>

        {/* Navigation Links */}
        <ul className={`flex items-center space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex transition-all duration-300 ease-in-out font-medium`}>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link href="/" aria-label="Home">Home</Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link href="/projects" aria-label="Projects">Projects</Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link href="/about" aria-label="About">About</Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link href="/services" aria-label="Services">Services</Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link href="/contact" aria-label="Contact">Contact</Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <a href="https://founder.tctsoftwares.com" target="_blank" rel="noopener noreferrer" aria-label="Founder">Founder</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={35} /> : <HiMenu size={35} />}
        </div>
      </div>
    </nav>
  );
}
