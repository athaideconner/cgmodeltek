"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type MenuItem = { label: string; href: string };

const aboutItems: MenuItem[] = [
  { label: "About CG Model Tek", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Robotic Machine Tending", href: "/about-us/robotic-machine-tending" },
  { label: "Frequently Asked Questions", href: "/about-us/faq" },
  { label: "Customer Reviews", href: "/reviews" },
];

const serviceItems: MenuItem[] = [
  { label: "CNC Milling", href: "/services/cnc-milling" },
  { label: "CNC Turning", href: "/services/cnc-turning" },
  { label: "Precision CNC Machining", href: "/services/precision-cnc-machining" },
  { label: "Prototype Machining", href: "/services/prototype-machining" },
  { label: "Multi-Axis Machining", href: "/services/multi-axis-machining" },
  { label: "5-Axis Machining", href: "/services/5-axis-machining" },
  { label: "Wire EDM", href: "/services/wire-edm" },
  { label: "Aluminum CNC Machining", href: "/services/aluminum-cnc-machining" },
  { label: "Stainless Steel Machining", href: "/services/stainless-steel-machining" },
  { label: "Value Added Services", href: "/services/value-added-services" },
];

const industryItems: MenuItem[] = [
  { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
  { label: "Automotive", href: "/industries/automotive" },
  { label: "Food & Beverage", href: "/industries/food-and-beverage" },
  { label: "Packaging", href: "/industries/packaging" },
  { label: "Medical", href: "/industries/medical" },
  { label: "Oil & Energy", href: "/industries/oil-and-energy" },
  { label: "OEM & Other Industries", href: "/industries/oem-and-other" },
  { label: "Automation / Robotics", href: "/industries/automation-robotics" },
  { label: "Consumer & Commercial", href: "/industries/consumer-commercial" },
  { label: "Defense", href: "/industries/defense" },
  { label: "Electronics", href: "/industries/electronics" },
  { label: "Firearm", href: "/industries/firearm" },
];

const faqItems = [
  { title: "What is Multi Axis Machining?", href: "/about-us/faq" },
  { title: "What is CNC Milling?", href: "/about-us/faq#cnc-milling" },
  { title: "What is CNC Turning?", href: "/about-us/faq#cnc-turning" },
];

type DropdownKey = "about" | "services" | "industries" | null;

function MobileMenuItem({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  return (
    <li>
      <a
        href={item.href}
        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
        onClick={onClick}
      >
        {item.label}
      </a>
    </li>
  );
}

function Dropdown({
  label,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  panel,
}: {
  label: string;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  panel: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="inline-flex items-center gap-1 px-2 py-3 text-gray-800 hover:text-blue-700 transition-colors uppercase tracking-wide text-[13px]"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-semibold">{label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`pointer-events-none lg:pointer-events-auto absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[min(1100px,92vw)] rounded-md bg-white shadow-xl ring-1 ring-black/5 transition-opacity transition-transform duration-150 border-b-4 border-blue-700 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 invisible"
        }`}
      >
        {panel}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownKey>(null);

  const handleDesktopEnter = (key: DropdownKey) => () => setDesktopOpen(key);
  const handleDesktopLeave = () => setDesktopOpen(null);

  const toggleMobileDropdown = (key: Exclude<DropdownKey, null>) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <a href="/" className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
            <Image
              src="/images/Logo/logo_with_text.png"
              alt="cgmodeltek logo"
              width={200}
              height={50}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </a>

          {/* Right: Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/"
              className="inline-flex items-center px-2 py-3 text-gray-800 hover:text-blue-700 transition-colors uppercase tracking-wide text-[13px] font-semibold"
            >
              Home
            </a>
            <Dropdown
              label="About Us"
              isOpen={desktopOpen === "about"}
              onMouseEnter={handleDesktopEnter("about")}
              onMouseLeave={handleDesktopLeave}
              panel={
                <div className="grid grid-cols-12 gap-8 p-6">
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learn More About Us.</h3>
                    <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
                      {aboutItems.map((it) => (
                        <a
                          key={it.href}
                          href={it.href}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-800"
                        >
                          <span className="font-medium">{it.label}</span>
                          <span className="text-gray-400">›</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h4>
                    <div className="space-y-4">
                      {faqItems.map((q) => (
                        <a key={q.title} href={q.href} className="flex gap-3 group">
                          <Image src="/images/wind-tunnel-model.png" alt="FAQ" width={56} height={56} className="h-14 w-14 rounded-sm object-cover flex-none" />
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-800 group-hover:text-blue-700 truncate">{q.title}</p>
                            <p className="text-sm text-gray-500 truncate">Frequently Asked Questions</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
            <Dropdown
              label="Services"
              isOpen={desktopOpen === "services"}
              onMouseEnter={handleDesktopEnter("services")}
              onMouseLeave={handleDesktopLeave}
              panel={
                <div className="grid grid-cols-12 gap-8 p-6">
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Featured Service</h3>
                    <a href="/services/precision-cnc-machining" className="block group">
                      <div className="relative h-56 w-full rounded-sm overflow-hidden">
                        <Image src="/images/wind-tunnel-model.png" alt="Precision CNC Machining" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-3 left-3 text-white">
                          <div className="text-lg font-semibold">Precision CNC Machining</div>
                          <div className="text-sm opacity-90">Precision CNC Machining Services</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">Additional Services</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {serviceItems.map((s) => (
                        <a key={s.href} href={s.href} className="flex gap-3 items-start group">
                          <Image src="/images/wind-tunnel-model.png" alt={s.label} width={48} height={48} className="h-12 w-12 rounded-sm object-cover flex-none" />
                          <div>
                            <p className="font-semibold text-gray-800 group-hover:text-blue-700">{s.label}</p>
                            <p className="text-sm text-gray-500 line-clamp-1">{s.label} Services</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-gray-700">
                      Interested in a quote? <a href="/contact" className="text-blue-700 hover:underline">Get in touch!</a>
                    </div>
                  </div>
                </div>
              }
            />
            <Dropdown
              label="Industries"
              isOpen={desktopOpen === "industries"}
              onMouseEnter={handleDesktopEnter("industries")}
              onMouseLeave={handleDesktopLeave}
              panel={
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industries</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {industryItems.map((ind) => (
                      <a key={ind.href} href={ind.href} className="flex gap-3 group items-start">
                        <Image src="/images/wind-tunnel-model.png" alt={ind.label} width={48} height={48} className="h-12 w-12 rounded-sm object-cover flex-none" />
                        <div>
                          <p className="font-semibold text-gray-800 group-hover:text-blue-700">{ind.label}</p>
                          <p className="text-sm text-gray-500 line-clamp-1">{ind.label} at cgmodeltek</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              }
            />
            
            <a
              href="/blog"
              className="inline-flex items-center px-2 py-3 text-gray-800 hover:text-blue-700 transition-colors uppercase tracking-wide text-[13px] font-semibold"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-2 py-3 text-gray-800 hover:text-blue-700 transition-colors uppercase tracking-wide text-[13px] font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 border-t border-gray-100">
            {/* Home */}
            <div className="px-1">
              <a
                href="/"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Home
              </a>
            </div>
            {/* About Us */}
            <div className="px-1">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-800 hover:text-blue-600"
                onClick={() => toggleMobileDropdown("about")}
                aria-expanded={mobileDropdown === "about"}
              >
                <span className="font-medium">About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileDropdown === "about" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`pl-3 transition-[max-height,opacity] duration-300 ${
                  mobileDropdown === "about" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <ul className="py-1">
                  {aboutItems.map((item) => (
                    <MobileMenuItem key={item.href} item={item} onClick={() => {}} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="px-1">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-800 hover:text-blue-600"
                onClick={() => toggleMobileDropdown("services")}
                aria-expanded={mobileDropdown === "services"}
              >
                <span className="font-medium">Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileDropdown === "services" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`pl-3 transition-[max-height,opacity] duration-300 ${
                  mobileDropdown === "services" ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <ul className="py-1">
                  {serviceItems.map((item) => (
                    <MobileMenuItem key={item.href} item={item} onClick={() => {}} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Industries */}
            <div className="px-1">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-800 hover:text-blue-600"
                onClick={() => toggleMobileDropdown("industries")}
                aria-expanded={mobileDropdown === "industries"}
              >
                <span className="font-medium">Industries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileDropdown === "industries" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`pl-3 transition-[max-height,opacity] duration-300 ${
                  mobileDropdown === "industries" ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <ul className="py-1">
                  {industryItems.map((item) => (
                    <MobileMenuItem key={item.href} item={item} onClick={() => {}} />
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="px-1 mt-2">
              <a
                href="/blog"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Blog
              </a>
            </div>
            <div className="px-1 mt-2">
              <a
                href="/contact"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Desktop hover intent area: ensures dropdown closes when pointer leaves */}
        <div className="hidden lg:block" onMouseLeave={() => setDesktopOpen(null)} />
      </div>
    </nav>
  );
}
