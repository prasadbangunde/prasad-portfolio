// src/app/page.tsx
// The portfolio homepage. This is a Server Component: it only arranges the pieces.
// - All text comes from src/data/portfolio.ts
// - Reusable pieces live in src/components/ (Section, ProjectCard, Timeline, ButtonLink, Tag, MobileMenu)

import ButtonLink from "../components/ButtonLink";
import MobileMenu from "../components/MobileMenu";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import Tag from "../components/Tag";
import Timeline from "../components/Timeline";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  NAME,
  RESUME_URL,
  ROLE,
  YEAR,
  aboutParagraphs,
  education,
  experience,
  githubRepos,
  heroHeadline,
  heroIntro,
  heroStack,
  navLinks,
  projects,
  skillGroups,
} from "../data/portfolio";

export default function Home() {
  return (
    // The [&_a:focus-visible] classes give every link a clear black outline for keyboard users.
    <div
      id="top"
      className="min-h-screen bg-white text-black [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-black"
    >
      {/* Skip link: invisible until a keyboard user presses Tab, then it jumps past the nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      {/* ---------- NAVIGATION ---------- */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        >
          <a href="#top" className="text-base font-semibold tracking-tight">
            {NAME}
          </a>

          {/* Desktop links (hidden on small screens) */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-gray-600 transition-colors hover:text-black after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu: a small client component that closes after a tap */}
          <MobileMenu links={navLinks} />
        </nav>
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        {/* ---------- HERO ---------- */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24"
        >
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open to opportunities
          </p>

          <p
            className="animate-fade-up mt-8 text-base font-medium text-gray-900"
            style={{ animationDelay: "60ms" }}
          >
            {NAME}
            <span className="text-gray-400"> · </span>
            <span className="text-gray-500">{ROLE}</span>
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {heroHeadline}
          </h1>

          <ul
            aria-label="Main technologies"
            className="animate-fade-up mt-6 flex flex-wrap gap-2"
            style={{ animationDelay: "180ms" }}
          >
            {heroStack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
            style={{ animationDelay: "240ms" }}
          >
            {heroIntro}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <ButtonLink href="#projects" variant="primary">
              View projects
            </ButtonLink>
            <ButtonLink href={RESUME_URL} variant="secondary" download>
              Download resume
            </ButtonLink>
            <ButtonLink href={GITHUB_URL} variant="secondary" external>
              GitHub
            </ButtonLink>
            <ButtonLink href={LINKEDIN_URL} variant="secondary" external>
              LinkedIn
            </ButtonLink>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <Section id="about" number="01" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-700">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        {/* ---------- EXPERIENCE AND EDUCATION ---------- */}
        <Section id="experience" number="02" title="Experience">
          <div className="grid gap-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
            <Timeline items={experience} />

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Education
              </h3>
              <ul className="mt-6 space-y-6">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="font-semibold tracking-tight">{item.degree}</p>
                    <p className="mt-1 text-gray-600">{item.school}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ---------- PROJECTS ---------- */}
        <Section id="projects" number="03" title="Projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* ---------- SKILLS ---------- */}
        <Section id="skills" number="04" title="Skills">
          <dl className="border-b border-gray-200">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="grid gap-3 border-t border-gray-200 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="text-sm font-medium text-gray-500">{group.category}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ---------- GITHUB ---------- */}
        <Section id="github" number="05" title="GitHub">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12">
            <div>
              <p className="max-w-md text-lg leading-relaxed text-gray-700">
                My projects are open on GitHub. Browse the repositories to see how
                they are built.
              </p>
              <div className="mt-6">
                <ButtonLink href={GITHUB_URL} variant="secondary" external>
                  View GitHub profile
                </ButtonLink>
              </div>
            </div>

            <ul className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200">
              {githubRepos.map((repo) => (
                <li key={repo.url}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-gray-50"
                  >
                    <span>
                      <span className="block font-medium">{repo.name}</span>
                      <span className="mt-0.5 block text-sm text-gray-500">
                        {repo.description}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-gray-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-black motion-reduce:transition-none"
                    >
                      &rarr;
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ---------- CONTACT ---------- */}
        <Section id="contact" number="06" title="Contact">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-12">
            <h3 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something useful together.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              I&apos;m open to Software Developer, Full-Stack Developer and SDE
              roles. Send me a message or connect with me online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${EMAIL}`} variant="primary">
                Email me
              </ButtonLink>
              <ButtonLink href={LINKEDIN_URL} variant="secondary" external>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={GITHUB_URL} variant="secondary" external>
                GitHub
              </ButtonLink>
              <ButtonLink href={RESUME_URL} variant="secondary" download>
                Download resume
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-sm text-gray-500">{EMAIL}</p>
          </div>
        </Section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-gray-500 sm:flex-row">
          <p>
            &copy; {YEAR} {NAME}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
