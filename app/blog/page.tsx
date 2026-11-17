import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '../../lib/posts';

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();

  return {
    title: 'Blog',
    description: 'Writing on frontend engineering, Rust, and indie hacking.',
    alternates: {
      canonical: '/blog',
      types: { 'application/rss+xml': '/blog/rss.xml' },
    },
    // An empty blog is a soft 404. Keep it out of search until it has content.
    robots: posts.length
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-6">
        Blog
      </h1>
      <p className="text-[#1A1A1A] dark:text-[#EBEBEA] leading-[1.75] mb-8">
        Thoughts on frontend engineering, building with Rust, and indie
        hacking.{' '}
        <Link
          href="/blog/rss.xml"
          aria-label="Subscribe to the RSS feed"
          className="text-[#2563EB] hover:text-[#1A1A1A] dark:text-[#60A5FA] dark:hover:text-[#EBEBEA] transition-colors text-sm font-medium"
        >
          RSS
        </Link>
      </p>

      {posts.length === 0 ? (
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link
                href={`/blog/posts/${post.slug}`}
                className="text-[#2563EB] hover:text-[#1A1A1A] dark:text-[#60A5FA] dark:hover:text-[#EBEBEA] transition-colors font-medium"
              >
                {post.title}
              </Link>
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              {post.summary && (
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1 leading-[1.75]">
                  {post.summary}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
