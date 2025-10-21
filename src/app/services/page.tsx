import { Metadata } from 'next';
import {
  CubeTransparentIcon,
  ComputerDesktopIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Services - CG Model Tek',
  description: 'Explore our comprehensive range of aerospace engineering and modeling services.',
};

type ServiceItem = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  highlights: string[];
};

const services: ServiceItem[] = [
  {
    name: 'Wind Tunnel Model Design',
    description: 'Expert design of wind tunnel models using state-of-the-art CAD software and engineering principles. We ensure precise aerodynamic testing capabilities for your aerospace projects.',
    icon: CubeTransparentIcon,
    id: 'wind-tunnel-model-design',
    highlights: [
      'Aero, stability & control, propulsion‑integration models',
      'Similarity scaling for Reynolds/Mach targets',
      'Balance integration and instrumentation planning',
    ],
  },
  {
    name: 'Model Fabrication',
    description: 'High-precision manufacturing of wind tunnel models using advanced materials and techniques. Our experienced team delivers exceptional quality and attention to detail.',
    icon: CogIcon,
    id: 'model-fabrication',
    highlights: [
      'Aluminum, steel, titanium, polymer & composite work',
      'Tight‑tolerance, metrology‑verified components',
      'Surface finish optimized for test objectives',
    ],
  },
  {
    name: 'Engineering Analysis',
    description: 'Comprehensive engineering analysis including structural, thermal, and aerodynamic assessments to ensure your models meet all testing requirements.',
    icon: DocumentMagnifyingGlassIcon,
    id: 'engineering-analysis',
    highlights: [
      'Structural sizing and modal assessments',
      'Thermal analysis for cryo/high‑Re environments',
      'Design for measurement fidelity and repeatability',
    ],
  },
  {
    name: 'CAD/CAM Services',
    description: 'Advanced computer-aided design and manufacturing services utilizing the latest software tools to create precise technical drawings and manufacturing plans.',
    icon: ComputerDesktopIcon,
    id: 'cad-cam-services',
    highlights: [
      'Siemens NX modeling, surfacing, and toolpaths',
      'Associative drawings and PMI control',
      'CAM strategies tuned for complex aero geometry',
    ],
  },
  {
    name: 'Model Support Systems',
    description: 'Design and fabrication of custom support systems and instrumentation for wind tunnel testing, ensuring reliable and accurate data collection.',
    icon: WrenchScrewdriverIcon,
    id: 'model-support-systems',
    highlights: [
      'Stings, struts, and mounting hardware',
      'Balance interfaces and load paths',
      'Pressure taps, wiring, and rake integration',
    ],
  },
  {
    name: 'Project Management',
    description: 'End-to-end project management services to ensure your wind tunnel testing projects are completed on time and within budget while meeting all specifications.',
    icon: RocketLaunchIcon,
    id: 'project-management',
    highlights: [
      'Proposals, pricing, and schedule control',
      'Risk management and design‑to‑schedule tradeoffs',
      'Configuration/change control and QA coordination',
    ],
  },
];

const capabilities: string[] = [
  'Wind Tunnel Models',
  'Precision Machining',
  'Rapid Prototyping',
  'CAD/CAM (Siemens NX)',
  'QA & Metrology',
  'ITAR & Export Compliance',
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-800">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              CG Model Tek provides comprehensive wind tunnel model design, fabrication, and testing services for the aerospace industry. Our expertise ensures your projects achieve the highest standards of precision and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-4 sm:p-6 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {capabilities.map((cap) => (
              <span key={cap} className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 text-sm border border-gray-700">
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services detail layout */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-gray-900/60 border border-gray-700 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-3 font-semibold tracking-wide">Services</p>
              <nav className="space-y-2">
                {services.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-gray-200 hover:text-white text-sm">
                    {s.name}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <section className="lg:col-span-3 space-y-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600/10 flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                  </div>
                </div>
                {service.highlights?.length ? (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-gray-300">
                    {service.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Request a quote
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 font-semibold"
                  >
                    Speak with an engineer →
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Call to action section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to discuss your wind tunnel testing needs and discover how our expertise can benefit your aerospace projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 