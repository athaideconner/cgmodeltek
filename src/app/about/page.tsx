import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - CG Model Tek',
  description: 'Learn about our expertise in aerospace engineering and wind tunnel model manufacturing.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About CG Model Tek</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At CG Model Tek, where precision, innovation, and excellence are at the heart of everything we do, 
            we strive to provide exceptional quality to our customers.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-primary-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-white">
                <p>
                  "Our commitment to precision and innovation drives us to deliver exceptional results
                  for our clients in the aerospace industry."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-white">John Smith</div>
                  <div className="text-gray-400">CEO at CG Model Tek</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[16/9] sm:aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src="/images/Wind tunnel img/crop-0-0-2214-2472-0-Tunnel-model-1.jpg"
                alt="CG Model Tek facility"
                fill
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="mt-8 space-y-6 text-base leading-7 text-gray-300">
              <p>
                <span id="mission" className="block text-xl text-white font-semibold mb-2">Mission & Values</span>
                Recently established through the acquisition of assets from a renowned manufacturing company, 
                we are proud to offer a range of manufactured products that stand out for their uniqueness 
                and distinction in the industry.
              </p>
              <p>
                <span id="experience" className="block text-xl text-white font-semibold mb-2">Experience</span>
                Our mission is to deliver top-quality products that meet the highest standards of precision 
                and innovation, ensuring excellence in every aspect of our operations.
              </p>
              <p>
                <span id="craftsmanship" className="block text-xl text-white font-semibold mb-2">Craftsmanship</span>
                With over two decades of experience, we've established ourselves as a trusted partner
                in the aerospace industry. Our state-of-the-art facility and expert team enable us
                to tackle complex engineering challenges and deliver innovative solutions.
              </p>
              <p>
                We combine cutting-edge technology with traditional craftsmanship to create
                high-precision wind tunnel models and components that meet the exacting standards
                of the aerospace industry. Join us on our journey as we continue to set new benchmarks 
                in the manufacturing field of aerospace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 