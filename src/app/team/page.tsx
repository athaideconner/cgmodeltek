import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Team - CG Model Tek',
  description: 'Meet the leadership and engineering team behind CG Model Tek.',
};

const teamMembers = [
  {
    name: 'John M. Nichols',
    role: 'Executive Advisor (Aerospace & Automotive)',
    imageSrc: '/images/team/john-m-nichols.jpg',
    bio:
      'John M. Nichols is a seasoned aerospace and automotive industry executive with more than 40 years of leadership experience spanning contracts, procurement, marketing, and program management. He has provided strategic oversight across multiple organizations, ensuring operational efficiency, regulatory compliance, and sustained growth while maintaining strong alignment with customer and industry expectations. Throughout his career, John has held key management roles with respected organizations including Cubic Corporation, Alliant Techsystems (ATK)/Micro Craft, Ford Aerospace, Bechtel Power Corporation, and the Ford Motor Company. His expertise encompasses all facets of contract management, supplier relations, strategic sourcing, and marketing, with a proven record of driving cost savings, improving performance metrics, and developing high-performing teams. John previously directed procurement operations for Cubic Defense Applications and contributed to advanced hypersonic testing initiatives at PERIKIN Enterprises, supporting projects aligned with the National Defense Strategy. He also founded Nichols Consulting, advising aerospace and automotive firms on program management, sourcing strategy, and compliance with federal acquisition regulations. A results-driven leader known for his integrity, professionalism, and hands-on management approach, John has consistently and successfully guided organizations through complex, time-sensitive projects while delivering measurable results. He remains dedicated to operational excellence, innovation, and strengthening America’s industrial and defense capabilities. John studied business and management at Golden Gate University and Mt. San Antonio College and completed the High Potential Management Development Program at the Ford Motor Company.',
  },
  {
    name: 'John Hill',
    role: 'Quality Manager',
    imageSrc: '/images/team/john-hill.jpg',
    bio:
      'With nearly two decades of experience in the Aerospace industry, John brings a wealth of hands-on expertise and strategic leadership to the role of Quality Manager. Over the past 19 years, he has built a multifaceted career spanning roles as a machinist, supervisor, quality inspector, planner, and program manager—each contributing to a deep understanding of precision manufacturing and operational excellence. John holds a Bachelor\'s degree in Business Management from Trevecca Nazarene University and is a certified Project Management Professional (PMP), blending technical insight with business acumen to drive quality initiatives and cross-functional collaboration. Known for a proactive approach to problem-solving and continuous improvement, he ensures that every project meets the highest standards of safety, compliance, and customer satisfaction. Outside of the professional sphere, John is a dedicated martial artist and holds a Black Belt in Isshin Ryu Karate, reflecting a lifelong commitment to discipline, focus, and personal growth. Whether leading quality audits, mentoring teams, or streamlining production workflows, John brings integrity, precision, and passion to every endeavor.',
  },
  {
    name: 'Ian Watts',
    role: 'IT & Information Systems Security Manager',
    imageSrc: '/images/team/ian-watts.jpg',
    bio:
      'Ian Watts is an experienced IT Manager and Information System Security Manager with a strong background in securing systems within the Aerospace industry. With over five years of experience in IT and multiple industry-recognized certifications—including ISC2 SSCP, CompTIA Security+, A+, and Network+—he brings a well-rounded technical skill set to every challenge. Ian is committed to upholding the values of Precision, Innovation, and Excellence, consistently aligning his work with the high standards of his organization.',
  },
  {
    name: 'Larry Phelps',
    role: 'Shop Supervisor',
    imageSrc: '/images/team/larry-phelps.jpg',
    bio:
      'Larry is the Shop Supervisor at CG Model Tek, bringing over 41 years of expertise in wind tunnel modeling and aerospace manufacturing to his role. Known for his creativity and strong team leadership, he has played a pivotal role in driving research and development and fostering innovation across complex projects. Passionately committed to his team, Larry leads with integrity and precision, continuously striving to elevate both performance and quality in every endeavor.',
  },
  {
    name: 'John Statum',
    role: 'Vice President of Operations',
    imageSrc: '/images/team/john-statum.jpg',
    bio:
      'John is the Vice President of Operations at CG Model Tek, bringing more than 20 years of experience in aerospace manufacturing to his leadership role. Known for being detail‑oriented and professional, he excels at guiding teams, optimizing processes, and ensuring high standards of precision in every project. Under his leadership, CG Model Tek is advancing cutting‑edge aerospace modeling and production, and John is deeply motivated by the company’s mission to deliver excellence in this critical sector.',
  },
];

function getInitials(name: string) {
  const parts = name.split(' ').filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts[parts.length - 1]?.[0] ?? '';
  return (first + last).toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="bg-gray-800">
      {/* Hero */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Team</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The people behind our precision engineering and world‑class wind tunnel models.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-900 rounded-2xl p-6 shadow-sm ring-1 ring-gray-800">
              {member.imageSrc ? (
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-64 w-full rounded-xl bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">{getInitials(member.name)}</span>
                </div>
              )}
              <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-primary-300 font-medium">{member.role}</p>
              <p className="mt-3 text-gray-300 text-sm leading-6">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Want to work with us?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us to learn how our team can support your next aerospace project.
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


