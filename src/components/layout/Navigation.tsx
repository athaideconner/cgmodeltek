'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ArchitecturalBackground from '@/components/ui/ArchitecturalBackground';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-700 shadow-lg">
      <div className="absolute inset-0 overflow-hidden">
        <ArchitecturalBackground startIndex={1} count={3} opacity={0.15} />
      </div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center h-24">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group py-2"
            >
              <Image
                src="/images/Logo/banner_logo.png"
                alt="CG Model Tek Logo"
                width={90}
                height={90}
                className="w-auto h-16 sm:h-20 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 justify-end flex-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg"
              >
                <div className={`
                  relative px-4 py-3 font-michroma text-base tracking-wide font-bold
                  transition-all duration-300 group
                  ${pathname === item.href 
                    ? 'text-[#4da8ff]' 
                    : 'text-white hover:text-[#4da8ff]'}
                `}>
                  {item.label}
                  <span className={`
                    absolute bottom-0 left-0 h-0.5 bg-[#4da8ff]
                    transition-all duration-300 ease-in-out w-full opacity-0
                    ${pathname === item.href ? 'opacity-100' : 'group-hover:opacity-100'}
                  `} />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-gray-800/98 backdrop-blur-xl transform transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-between items-center p-3 border-b border-gray-700/50">
            <Link
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/images/Logo/banner_logo.png"
                alt="CG Model Tek Logo"
                width={90}
                height={90}
                className="w-auto h-10 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-start items-center space-y-4 py-6 px-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-lg font-michroma text-center w-full py-2
                  transition-all duration-300 relative group
                  ${pathname === item.href 
                    ? 'text-[#4da8ff] font-semibold' 
                    : 'text-white hover:text-[#4da8ff]'}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-[#4da8ff]
                  transition-all duration-300 ease-in-out
                  ${pathname === item.href ? 'w-full' : 'w-0'}
                  group-hover:w-full
                `} />
              </Link>
            ))}
          </div>
          <div className="mt-auto p-3 border-t border-gray-700/50">
            <div className="flex justify-center space-x-6">
              <a href="tel:+1234567890" className="text-white hover:text-[#4da8ff] transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:contact@cgmodeltek.com" className="text-white hover:text-[#4da8ff] transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 