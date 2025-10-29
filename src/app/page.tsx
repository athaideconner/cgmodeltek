import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ArchitecturalBackground from '@/components/ui/ArchitecturalBackground';

export const metadata: Metadata = {
  title: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
  description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-16">
        {/* Background with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-orange-500/20 to-orange-500/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-[2000px] mx-auto">
          {/* Logo with enhanced styling */}
          <div className="mb-16 animate-slide-in-right">
            <Image
              src="/images/Logo/blue_logo.png"
              alt="CG Model Tek Logo"
              width={800}
              height={800}
              className="mx-auto w-auto h-72 sm:h-96 lg:h-[450px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Main heading with enhanced contrast */}
          <div className="animate-slide-in-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 font-michroma tracking-tight">
              Revolutionizing{' '}
              <span className="inline-block bg-gradient-to-r from-[#4da8ff] to-[#a5d4ff] text-transparent bg-clip-text">
                Aerospace
              </span>{' '}
              Innovation
            </h1>
          </div>

          {/* Subheading with enhanced contrast */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto font-light animate-fade-in">
            Transforming ideas into exceptional aerospace solutions through cutting-edge technology and expertise
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#4da8ff] hover:bg-[#4da8ff]/90 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#4da8ff] bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why CG Model Tek Section - Lighter */}
      <section className="w-full py-20 bg-gray-800 relative">
        <ArchitecturalBackground startIndex={1} count={6} opacity={0.3} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why CG Model Tek?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Unmatched Precision</h3>
              <p className="text-gray-200">Aerospace-grade precision for every prototype, ensuring accuracy in every detail.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Proven Expertise</h3>
              <p className="text-gray-200">Specialized in wind tunnel models, UAVs, and flight simulation with years of experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Rapid Innovation</h3>
              <p className="text-gray-200">Fast iteration cycles to accelerate your aerospace development process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Even Lighter */}
      <section className="w-full py-20 bg-gray-700 relative">
        <ArchitecturalBackground startIndex={7} count={6} opacity={0.3} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Prototyping & Scale Models</h3>
              <p className="text-gray-200">Custom scale models for testing and validation.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Aerodynamic Testing</h3>
              <p className="text-gray-200">Wind tunnel models for aerodynamic analysis.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Advanced Manufacturing</h3>
              <p className="text-gray-200">CNC & additive manufacturing solutions.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-white">Material Science</h3>
              <p className="text-gray-200">Expertise in composites and advanced materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section - Back to medium */}
      <section className="w-full py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Seamless Collaboration</h2>
          <p className="text-xl text-gray-200">
            From initial design to final validation, we work closely with engineers, manufacturers, and R&D teams to ensure aerospace-grade precision.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </main>
  );
} 