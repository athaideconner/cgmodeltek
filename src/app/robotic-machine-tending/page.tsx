import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robotic Machine Tending - CG Model Tek',
  description: 'Overview of robotic machine tending capabilities and integration at CG Model Tek.'
};

export default function RoboticMachineTendingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <section className="pt-28 px-6 lg:px-8 max-w-5xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Robotic Machine Tending</h1>
        <p className="text-gray-300 text-lg">
          We integrate robotic machine tending for repeatability, throughput, and safety. Our team evaluates
          part flow, workholding, metrology, and controls to deliver robust cells tuned for aerospace tolerances.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 list-disc list-inside">
          <li>End-of-arm tooling design and validation</li>
          <li>Vision, probing, and part identification</li>
          <li>Machine interfaces and safety interlocks</li>
          <li>Cycle-time analysis and OEE improvements</li>
        </ul>
      </section>
    </div>
  );
}


