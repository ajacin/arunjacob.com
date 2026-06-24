import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts');

  try {
    await fs.access(postsDir);
  } catch {
    return [];
  }

  const entries = await fs.readdir(postsDir, { withFileTypes: true });
  const slugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts: Post[] = [];

  for (const slug of slugs) {
    try {
      const { metadata } = await import(`./posts/${slug}/page.mdx`);
      posts.push({
        slug,
        title: metadata.title,
        publishedAt: metadata.publishedAt,
        summary: metadata.summary,
      });
    } catch {
      // Skip posts that fail to load
    }
  }

  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return posts;
}

export const metadata = {
  title: 'Blog',
  description: 'Writing on frontend engineering, Rust, and indie hacking.',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-[22px] font-medium text-[#1A1A1A] dark:text-[#EBEBEA] mb-6">
        Blog
      </h1>
      <p className="text-[#1A1A1A] dark:text-[#EBEBEA] leading-[1.75] mb-8">
        Thoughts on frontend engineering, building with Rust, and indie
        hacking.
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
