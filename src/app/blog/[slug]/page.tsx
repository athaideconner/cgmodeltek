import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/data/blog';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} — CG Model Tek Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <nav className="mb-6 text-sm">
        <Link href="/blog" className="text-gray-600 hover:underline">← Back to blog</Link>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">{post.title}</h1>
      <div className="mt-2 text-sm text-gray-500">
        <time>{new Date(post.date).toLocaleDateString()}</time>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      {post.heroImage ? (
        <div className="relative w-full h-64 mt-6">
          <Image src={post.heroImage} alt={post.title} fill className="object-cover rounded" />
        </div>
      ) : null}
      <div className="prose prose-gray max-w-none mt-8">
        {post.content.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}


