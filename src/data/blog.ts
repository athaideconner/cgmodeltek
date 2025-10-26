export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  author: string;
  tags: string[];
  heroImage?: string;
  content: string; // markdown
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'fundamentals-of-aerodynamics-for-engineers',
    title: 'Fundamentals of Aerodynamics for Engineers',
    description: 'Key principles of lift, drag, and flow regimes every aerospace engineer uses.',
    date: '2024-06-15',
    author: 'CG Model Tek Editorial',
    tags: ['aerodynamics', 'basics', 'education'],
    heroImage: '/images/blog/aero-fundamentals.jpg',
    content: `
Aerodynamics governs how bodies move through air. Core ideas:

- Lift results from pressure differences and flow turning around an airfoil.
- Drag includes parasite (form + skin friction) and induced components.
- Flow regimes: laminar vs turbulent; subsonic, transonic, supersonic.
- Non-dimensional numbers like Re and Ma dictate similarity.

Engineers use wind tunnel testing, CFD, and flight tests together. Wind tunnels provide controlled, repeatable conditions to de-risk designs before flight.
`
  },
  {
    slug: 'wind-tunnel-models-why-scale-models-matter',
    title: 'Wind Tunnel Models: Why Scale Models Matter',
    description: 'How properly scaled models accelerate aerospace development and reduce risk.',
    date: '2024-08-02',
    author: 'CG Model Tek Team',
    tags: ['wind-tunnel', 'testing', 'prototyping'],
    heroImage: '/images/blog/wind-tunnel-models.jpg',
    content: `
Scale models enable rapid iteration:

- Test configuration changes cheaply and quickly.
- Validate CFD and refine boundary conditions.
- Instrumentation (pressure taps, balances) yields high-fidelity data.

Matching similarity parameters (Re, Ma) and proper surface finish are critical. Precision manufacturing and metrology ensure that model geometry reflects the design intent within tight tolerances.
`
  },
  {
    slug: 'introduction-to-flight-stability-and-control',
    title: 'Introduction to Flight Stability and Control',
    description: 'Static and dynamic stability concepts, control derivatives, and test methods.',
    date: '2024-11-20',
    author: 'CG Model Tek Editorial',
    tags: ['stability', 'controls', 'education'],
    heroImage: '/images/blog/flight-stability.jpg',
    content: `
Aircraft stability involves restoring moments after perturbations.

- Static stability: initial tendency (Cm_alpha, Cl_beta).
- Dynamic stability: time response (phugoid, Dutch roll).
- Control effectiveness: derivatives like Cm_delta_e.

Wind tunnel free-to-oscillate rigs and forced oscillation tests quantify these properties before flight testing.
`
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}


