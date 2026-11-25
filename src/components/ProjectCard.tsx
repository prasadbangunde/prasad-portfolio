// src/components/ProjectCard.tsx
// One compact project card: name, description, technologies, features and links.
// The "Live demo" button only appears when a project has a liveUrl in src/data/portfolio.ts.

import type { Project } from "../data/portfolio";
import ButtonLink from "./ButtonLink";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 leading-relaxed text-gray-600">{project.tagline}</p>

      <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2.5 text-[15px] leading-relaxed text-gray-700">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gray-400"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* mt-auto pins the buttons to the bottom so all cards line up */}
      <div className="mt-8 flex flex-wrap gap-3 pt-2 md:mt-auto md:pt-8">
        <ButtonLink href={project.githubUrl} variant="secondary" size="sm" external>
          GitHub
        </ButtonLink>
        {project.liveUrl && (
          <ButtonLink href={project.liveUrl} variant="primary" size="sm" external>
            Live demo
          </ButtonLink>
        )}
      </div>
    </article>
  );
}
