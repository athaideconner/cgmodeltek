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

const services = [
  {
    name: 'Wind Tunnel Model Design',
    description: 'Expert design of wind tunnel models using state-of-the-art CAD software and engineering principles. We ensure precise aerodynamic testing capabilities for your aerospace projects.',
    icon: CubeTransparentIcon,
    id: 'wind-tunnel-model-design',
  },
  {
    name: 'Model Fabrication',
    description: 'High-precision manufacturing of wind tunnel models using advanced materials and techniques. Our experienced team delivers exceptional quality and attention to detail.',
    icon: CogIcon,
    id: 'model-fabrication',
  },
  {
    name: 'Engineering Analysis',
    description: 'Comprehensive engineering analysis including structural, thermal, and aerodynamic assessments to ensure your models meet all testing requirements.',
    icon: DocumentMagnifyingGlassIcon,
    id: 'engineering-analysis',
  },
  {
    name: 'CAD/CAM Services',
    description: 'Advanced computer-aided design and manufacturing services utilizing the latest software tools to create precise technical drawings and manufacturing plans.',
    icon: ComputerDesktopIcon,
    id: 'cad-cam-services',
  },
  {
    name: 'Model Support Systems',
    description: 'Design and fabrication of custom support systems and instrumentation for wind tunnel testing, ensuring reliable and accurate data collection.',
    icon: WrenchScrewdriverIcon,
    id: 'model-support-systems',
  },
  {
    name: 'Project Management',
    description: 'End-to-end project management services to ensure your wind tunnel testing projects are completed on time and within budget while meeting all specifications.',
    icon: RocketLaunchIcon,
    id: 'project-management',
  },
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

      {/* Services grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col bg-gray-900 rounded-2xl p-8 transition duration-300 ease-in-out hover:bg-gray-700"
                id={service.id}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600/10">
                  <service.icon className="h-8 w-8 text-primary-400" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <p className="mt-4 flex-1 text-base text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
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