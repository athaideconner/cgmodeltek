'use client';

import Link from 'next/link';
import Image from 'next/image';

// Contact information
const CONTACT_INFO = {
  phone: '+1234567890',
  email: 'contact@cgmodeltek.com',
  address: '123 Innovation Way, Aerospace Park, CA 90210'
};

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Wind Tunnel Models', href: '/services#wind-tunnel-models' },
    { name: 'Prototype Development', href: '/services#prototype-development' },
    { name: 'Engineering Support', href: '/services#engineering-support' },
    { name: 'Quality Control', href: '/services#quality-control' }
  ],
  industries: [
    { name: 'Aerospace', href: '/industries#aerospace' },
    { name: 'Defense', href: '/industries#defense' },
    { name: 'Automotive', href: '/industries#automotive' },
    { name: 'Research', href: '/industries#research' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/images/Logo/blue_logo.png"
                alt="CG Model Tek"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm">
              Pioneering the future of aerospace and automotive prototyping with precision and innovation.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary-300">{CONTACT_INFO.phone}</a>
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-300">{CONTACT_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-michroma text-lg text-primary-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-michroma text-lg text-primary-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-michroma text-lg text-primary-400 mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} CG Model Tek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 