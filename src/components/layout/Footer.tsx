'use client';

import Link from 'next/link';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Team', href: '/team' },
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
            <h3 className="font-michroma text-lg text-blue-400 mb-4">CG MODEL TEK</h3>
            <p className="text-sm">
              Pioneering the future of aerospace and automotive prototyping with precision and innovation.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-michroma text-lg text-blue-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-michroma text-lg text-blue-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-michroma text-lg text-blue-400 mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-blue-300 transition-colors">
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