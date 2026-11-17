import { promises as fs } from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
}

// Reads the small YAML frontmatter block at the top of a post: flat
// `key: value` pairs, optionally quoted.
export function parseFrontmatter(source: string): Record<string, string> {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
  if (!block) return {};

  const data: Record<string, string> = {};

  for (const line of block[1].split('\n')) {
    const pair = /^(\w+):\s*(.*)$/.exec(line);
    if (!pair) continue;

    let value = pair[2].trim();
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }
    data[pair[1]] = value;
  }

  return data;
}

export async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts');

  const entries = await fs
    .readdir(postsDir, { withFileTypes: true })
    .catch(() => null);
  if (!entries) return [];

  const slugs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts: Post[] = [];

  for (const slug of slugs) {
    try {
      const source = await fs.readFile(
        path.join(postsDir, slug, 'page.mdx'),
        'utf-8'
      );
      const metadata = parseFrontmatter(source);
      if (!metadata.title || !metadata.publishedAt) continue;

      posts.push({
        slug,
        title: metadata.title,
        publishedAt: metadata.publishedAt,
        summary: metadata.summary ?? '',
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
