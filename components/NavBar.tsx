'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Platform Logo"
            width={30}
            height={30}
          />
          <span className="text-white font-bold text-lg">Hire A Tutor</span>
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-black/90 md:static md:flex md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/tWXsGZrUX9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-2 md:mt-0"
              >
                Join Discord
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

