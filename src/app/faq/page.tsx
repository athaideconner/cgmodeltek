import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - CG Model Tek',
  description: 'Answers to common questions about our services, models, and processes.'
};

const faqs = [
  {
    q: 'What industries do you serve?',
    a: 'Primarily aerospace and defense, with applications in automotive and research as well.'
  },
  {
    q: 'Do you support high Reynolds number testing?',
    a: 'Yes — we design for cryogenic/high-Re environments and coordinate with test facilities.'
  },
  {
    q: 'Can you assist with instrumentation?',
    a: 'We plan pressure taps, balance integration, wiring, and sensor routing for data quality.'
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <section className="pt-28 px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
        <div className="divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-900/60">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <h2 className="text-lg font-semibold text-white">{f.q}</h2>
              <p className="mt-2 text-gray-300">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


