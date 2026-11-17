import { getPosts } from '../../../lib/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://arunjacob.com';
const FEED_PATH = '/blog/rss.xml';

// Escapes text for XML element content and attributes: a summary containing
// an ampersand or angle bracket must not break the document.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/posts/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.summary)}</description>
    </item>`;
    })
    .join('\n');

  // With no posts there is no date to report, so leave it out rather than
  // claim the feed changed at build time.
  const lastBuildDate = posts.length
    ? `    <lastBuildDate>${new Date(posts[0].publishedAt).toUTCString()}</lastBuildDate>\n`
    : '';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml('Arun Jacob — Blog')}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml('Writing on frontend engineering, Rust, and indie hacking.')}</description>
    <language>en-ca</language>
${lastBuildDate}    <atom:link href="${SITE_URL}${FEED_PATH}" rel="self" type="application/rss+xml" />
${items ? `${items}\n` : ''}  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
