export interface Project {
  name: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
  imageAlt: string;
  imageFit: 'cover' | 'contain';
  imageBackground: string;
}

// Facts here are taken from the resume and the product sites. Keep them in
// sync with public/resume.pdf before adding a project.
const glassNudge: Project = {
  name: 'GlassNudge',
  year: '2026',
  tagline: 'macOS menu bar reminder app',
  description:
    'Designed, built, and shipped a native macOS app end to end — UI, code signing, notarization, and distribution — with a LemonSqueezy licensing and payment system covering direct and Setapp sales.',
  stack: ['Tauri v2', 'Rust', 'React', 'PostgreSQL'],
  href: 'https://glassnudge.app',
  image: '/projects/glassnudge.webp',
  imageAlt: 'GlassNudge reminder panel and upcoming reminders on macOS',
  imageFit: 'contain',
  imageBackground: 'bg-[#120F1C]',
};

const fedNews: Project = {
  name: 'FedNews',
  year: '2026',
  tagline: 'Daily frontend newsletter',
  description:
    'A daily frontend brief produced by an 8-agent editorial pipeline — server-side research, drafting, and a Reader Value Gatekeeper that blocks unsourced items before publish.',
  stack: ['Next.js', 'React', 'TypeScript'],
  href: 'https://fednews.fyi',
  image: '/projects/fednews.png',
  imageAlt: 'fednews.fyi — primary-source frontend briefs',
  imageFit: 'contain',
  imageBackground: 'bg-[#F7F5F2]',
};

export { glassNudge, fedNews };

export const projects: Project[] = [glassNudge, fedNews];
