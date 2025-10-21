'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IndustriesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="font-cairo text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Delivering precision engineering and prototyping solutions across aerospace, defense, and automotive sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aerospace/Aircraft Systems */}
          <motion.div 
            className="mb-24"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <h2 id="aerospace" className="font-cairo text-3xl md:text-4xl font-bold text-white mb-12 border-l-4 border-blue-400 pl-4">
              Aerospace/Aircraft Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                  Tail & Wing Models
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• High-precision wind tunnel models</li>
                  <li>• Aerodynamic testing prototypes</li>
                  <li>• Scale model manufacturing</li>
                  <li>• Custom design solutions</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                  Aircraft Components
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Control surface models</li>
                  <li>• Fuselage sections</li>
                  <li>• Landing gear assemblies</li>
                  <li>• Interior system mockups</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Space, Launch & Missile Systems */}
          <motion.div 
            className="mb-24"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <h2 id="space" className="font-cairo text-3xl md:text-4xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-4">
              Space, Launch & Missile Systems
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-400 mb-4">
                    Launch Vehicles
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Scale rocket models</li>
                    <li>• Propulsion system mockups</li>
                    <li>• Integration testing models</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-400 mb-4">
                    Spacecraft
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Satellite prototypes</li>
                    <li>• Deployment mechanisms</li>
                    <li>• Thermal system models</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-400 mb-4">
                    Defense Systems
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Guidance system models</li>
                    <li>• Aerodynamic components</li>
                    <li>• Integration test units</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prototype & Automotive */}
          <motion.div 
            className="mb-24"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <h2 id="prototype" className="font-cairo text-3xl md:text-4xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-4">
              Prototype & Automotive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                  Rapid Prototyping
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Concept validation models</li>
                  <li>• Functional prototypes</li>
                  <li>• Design iteration support</li>
                  <li>• Manufacturing feasibility studies</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                  Automotive Applications
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Aerodynamic components</li>
                  <li>• Wind tunnel models</li>
                  <li>• Performance testing units</li>
                  <li>• Design validation models</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Who We Work With */}
          <motion.div 
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
          >
            <h2 id="who-we-work-with" className="font-cairo text-3xl md:text-4xl font-bold text-white mb-12 border-l-4 border-blue-500 pl-4">
              Who We Work With
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                    Manufacturers
                  </h3>
                  <p className="text-gray-300">
                    Leading aerospace and automotive manufacturers requiring precision prototypes and testing models.
                  </p>
                </div>
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                    Research Institutions
                  </h3>
                  <p className="text-gray-300">
                    Universities and research facilities conducting aerodynamic studies and materials research.
                  </p>
                </div>
                <div>
                  <h3 className="font-cairo text-2xl font-semibold text-blue-300 mb-4">
                    Defense Contractors
                  </h3>
                  <p className="text-gray-300">
                    Defense industry partners requiring high-precision models for testing and validation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 1 }}
          >
            <h2 className="font-cairo text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help bring your aerospace or automotive vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Contact Us Today →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 