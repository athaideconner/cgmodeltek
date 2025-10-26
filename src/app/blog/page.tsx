import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/data/blog';
import StarryBackground from '@/components/ui/StarryBackground';

export const metadata: Metadata = {
  title: 'Blog — Aerospace Engineering Insights',
  description: 'Articles on aerodynamics, wind tunnel testing, and aerospace engineering by CG Model Tek.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <StarryBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8">Aerospace Engineering Blog</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="group rounded-lg border border-gray-200 hover:shadow-md transition-shadow bg-white overflow-hidden">
              {post.heroImage ? (
                <div className="relative h-48 w-full">
                  <Image src={post.heroImage} alt={post.title} fill className="object-cover" />
                </div>
              ) : null}
              <div className="p-5">
                <time className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


