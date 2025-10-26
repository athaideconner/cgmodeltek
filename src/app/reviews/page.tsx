import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews - CG Model Tek',
  description: 'What our customers say about our precision engineering and model fabrication.'
};

const sampleReviews = [
  {
    author: 'Aerospace Program Manager',
    text: 'CG Model Tek delivered on-time with outstanding quality. Their communication and attention to detail stood out.'
  },
  {
    author: 'Research Lead',
    text: 'The wind tunnel models performed flawlessly. Instrumentation and finishes matched our specs exactly.'
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <section className="pt-28 px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Customer Reviews</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {sampleReviews.map((r, idx) => (
            <blockquote key={idx} className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 text-gray-300">
              <p className="">“{r.text}”</p>
              <footer className="mt-4 text-sm text-gray-400">— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}


