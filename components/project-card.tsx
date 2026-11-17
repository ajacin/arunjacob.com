import Image from 'next/image';
import type { Project } from '../lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-[#E7E5E4] dark:border-[#2A2A27] rounded-lg overflow-hidden">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`${project.name} — ${project.tagline} (opens in a new tab)`}
      >
        <div
          className={`relative aspect-[16/9] ${project.imageBackground}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className={
              project.imageFit === 'contain'
                ? 'object-contain'
                : 'object-cover'
            }
          />
        </div>
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-medium text-[#1A1A1A] dark:text-[#EBEBEA] group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
              {project.name}
            </h3>
            <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
              {project.year}
            </span>
          </div>
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">
            {project.tagline}
          </p>
          <p className="text-sm leading-[1.75] mt-3">{project.description}</p>
        </div>
      </a>
      <div className="px-4 pb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B7280] dark:text-[#9CA3AF]">
        {project.stack.map((item, i) => (
          <span key={item}>
            {i > 0 && <span aria-hidden="true">· </span>}
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
