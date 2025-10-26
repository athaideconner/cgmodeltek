'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ArchitecturalBackground from '@/components/ui/ArchitecturalBackground';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const dropdowns: Record<string, { label: string; href: string }[]> = {
    About: [
      { label: 'About CG Model Tek', href: '/about' },
      { label: 'Robotic Machine Tending', href: '/robotic-machine-tending' },
      { label: 'Customer Reviews', href: '/reviews' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Follow us', href: '/contact#follow' },
    ],
    Services: [
      { label: 'Wind Tunnel Model Design', href: '/services#wind-tunnel-model-design' },
      { label: 'Model Fabrication', href: '/services#model-fabrication' },
      { label: 'Engineering Analysis', href: '/services#engineering-analysis' },
      { label: 'CAD/CAM Services', href: '/services#cad-cam-services' },
      { label: 'Model Support Systems', href: '/services#model-support-systems' },
      { label: 'Project Management', href: '/services#project-management' },
    ],
    Industries: [
      { label: 'Aerospace/Aircraft Systems', href: '/industries#aerospace' },
      { label: 'Space, Launch & Missile', href: '/industries#space' },
      { label: 'Prototype & Automotive', href: '/industries#prototype' },
      { label: 'Who We Work With', href: '/industries#who-we-work-with' },
    ],
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!openDropdown) return;
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenDropdown((current) => {
          if (current) {
            const btn = buttonRefs.current[current];
            btn?.focus();
          }
          return null;
        });
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [openDropdown]);

  useEffect(() => {
    // Close dropdowns when navigating to a new route
    setOpenDropdown(null);
    setIsOpen(false);
    setMobileOpen(null);
    // Clear any pending timers
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, [pathname]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-gray-700 shadow-lg">
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
                src="/images/Logo/blue_logo.png"
                alt="CG Model Tek Logo"
                width={90}
                height={90}
                className="w-auto h-16 sm:h-20 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:space-x-2 justify-end flex-1" role="menubar" aria-label="Main navigation">
            {navigation.map((item) => {
              const items = dropdowns[item.label as keyof typeof dropdowns];
              if (items && items.length) {
                const isOpen = openDropdown === item.label;
                const menuId = `menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
                const accessibleLabel = `${isOpen ? 'Close' : 'Open'} submenu: ${item.label}`;
                return (
                  <li
                    key={item.href}
                    className="relative group list-none"
                    onMouseEnter={() => {
                      if (closeTimerRef.current) {
                        window.clearTimeout(closeTimerRef.current);
                        closeTimerRef.current = null;
                      }
                      openTimerRef.current = window.setTimeout(() => {
                        setOpenDropdown(item.label);
                      }, 120);
                    }}
                    onMouseLeave={() => {
                      if (openTimerRef.current) {
                        window.clearTimeout(openTimerRef.current);
                        openTimerRef.current = null;
                      }
                      closeTimerRef.current = window.setTimeout(() => {
                        setOpenDropdown(null);
                      }, 150);
                    }}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      aria-label={accessibleLabel}
                      role="menuitem"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOpenDropdown(item.label);
                          requestAnimationFrame(() => {
                            const first = menuRefs.current[item.label]?.querySelector('a');
                            (first as HTMLElement | null)?.focus();
                          });
                        }
                        if (e.key === 'Escape') {
                          e.preventDefault();
                          setOpenDropdown(null);
                        }
                      }}
                      ref={(el) => (buttonRefs.current[item.label] = el)}
                      className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg"
                    >
                      <div className={`
                        relative px-4 py-3 font-michroma text-base tracking-wide font-bold
                        transition-all duration-300 flex items-center gap-1
                        ${pathname === item.href 
                          ? 'text-[#4da8ff]'
                          : 'text-white hover:text-[#4da8ff]'}
                      `}>
                        <span className="select-none">{item.label}</span>
                        <span className="sr-only">{isOpen ? 'Close submenu' : 'Open submenu'}</span>
                        <svg className={`w-3.5 h-3.5 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.104l3.71-3.873a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                        <span className={`
                          absolute bottom-0 left-0 h-0.5 bg-[#4da8ff]
                          transition-all duration-300 ease-in-out w-full opacity-0
                          ${pathname === item.href ? 'opacity-100' : 'group-hover:opacity-100'}
                        `} />
                      </div>
                    </button>
                    <div
                      className={`absolute left-0 top-full mt-2 ${isOpen ? 'block' : 'hidden'} group-hover:block`}
                    > 
                      {/* pointer arrow */}
                      <span className="absolute -top-2 left-6 h-4 w-4 rotate-45 bg-white border border-gray-200 rounded-sm shadow-sm" aria-hidden="true" />
                      <ul
                        className="bg-white rounded-xl shadow-2xl border border-gray-200 min-w-[18rem] py-2 divide-y divide-gray-100 ring-1 ring-black/5"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                        id={menuId}
                        ref={(el) => (menuRefs.current[item.label] = el)}
                        onKeyDown={(e) => {
                          const links = Array.from(menuRefs.current[item.label]?.querySelectorAll('a') || []);
                          const idx = links.indexOf(document.activeElement as Element);
                          if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            const next = links[(idx + 1) % links.length] as HTMLElement | undefined;
                            next?.focus();
                          }
                          if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            const prev = links[(idx - 1 + links.length) % links.length] as HTMLElement | undefined;
                            prev?.focus();
                          }
                          if (e.key === 'Home') {
                            e.preventDefault();
                            (links[0] as HTMLElement | undefined)?.focus();
                          }
                          if (e.key === 'End') {
                            e.preventDefault();
                            (links[links.length - 1] as HTMLElement | undefined)?.focus();
                          }
                          if (e.key === 'Escape') {
                            e.preventDefault();
                            setOpenDropdown(null);
                            buttonRefs.current[item.label]?.focus();
                          }
                        }}
                      >
                        {items.map((sub) => (
                          <li key={sub.href} role="none">
                            <Link
                              href={sub.href}
                              className="flex items-center justify-between gap-4 px-4 py-3 text-[0.95rem] text-gray-800 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                              role="menuitem"
                              tabIndex={-1}
                            >
                              <span className="font-medium">{sub.label}</span>
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href} className="list-none">
                  <Link
                    href={item.href}
                    className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg"
                    role="menuitem"
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
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
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
                src="/images/Logo/blue_logo.png"
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
          <div className="flex flex-col justify-start items-center space-y-2 py-6 px-4">
            {navigation.map((item) => {
              const items = dropdowns[item.label as keyof typeof dropdowns];
              if (items && items.length) {
                const isSectionOpen = mobileOpen === item.label;
                return (
                  <div key={item.href} className="w-full">
                    <button
                      className={`
                        flex w-full items-center justify-between text-lg font-michroma text-left py-3 px-2 rounded-md
                        transition-all duration-300
                        ${pathname === item.href ? 'text-[#4da8ff] font-semibold' : 'text-white hover:text-[#4da8ff]'}
                      `}
                      onClick={() => setMobileOpen(isSectionOpen ? null : item.label)}
                      aria-expanded={isSectionOpen}
                      aria-controls={`m-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      aria-label={`${isSectionOpen ? 'Close' : 'Open'} submenu: ${item.label}`}
                    >
                      <span>{item.label}</span>
                      <svg className={`w-4 h-4 transition-transform ${isSectionOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.104l3.71-3.873a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div id={`m-${item.label.toLowerCase().replace(/\s+/g, '-')}`} className={`${isSectionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}> 
                      <div className="pl-3 py-1 space-y-1">
                        {items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block text-sm text-gray-200 hover:text-[#4da8ff] py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
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
              );
            })}
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