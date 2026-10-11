// src/app/page.tsx
// Portfolio homepage for Prasad Bangunde.
// This is a Next.js App Router Server Component: no hooks, no "use client" needed.
// All the content lives in the plain arrays below, so you can edit text without touching the layout.

// ---------- 1. CONTENT (edit this part to update your site) ----------

const NAME = "Prasad Bangunde";
const YEAR = 2026; 

const GITHUB_URL = "https://github.com/prasadbangunde";
const LINKEDIN_URL = "https://www.linkedin.com/in/prasad-bangunde/";
const EMAIL = "prasadbangunde8@gmail.com";

// The resume PDF must be saved in the project's "public" folder with exactly this name.
const RESUME_URL = "/Prasad-Bangunde-Resume.pdf";

type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Git & GitHub",
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string; // "#" is a placeholder until you verify the live demo
};

const projects: Project[] = [
  {
    title: "PrepSync AI",
    description:
      "An AI voice interview coach. It lets you practise interviews by speaking out loud, and it can use your resume to shape the questions.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini", "Groq", "Vapi"],
    githubUrl: "https://github.com/prasadbangunde/PrepSync-Ai-voice-interview-coach",
    liveUrl: "#", // TODO: replace with your verified live demo link
  },
  {
    title: "Spendly",
    description:
      "A personal finance dashboard with AI-powered features such as a spending coach, receipt scanning and budget generation.",
    tags: ["React", "FastAPI", "SQLite", "Groq", "Recharts"],
    githubUrl: "https://github.com/prasadbangunde/Spendly-AI-Powered-Finance-Dashboard",
    liveUrl: "#", // TODO: replace with your verified live demo link
  },
  {
    title: "ApniSec",
    description:
      "An issue management system with secure login, role and ownership-based access, and API routes for creating, filtering, updating and deleting issues.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/prasadbangunde/apnisec-issue-management-system",
    liveUrl: "#", // TODO: replace with your verified live demo link
  },
];

type TimelineItem = {
  title: string;
  place: string;
  period: string;
};

const education: TimelineItem[] = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "D Y Patil International University, Pune",
    period: "2022 – 2026",
  },
];

const experience: TimelineItem[] = [
  {
    title: "Web Development Trainee",
    place: "TechOctaNet Services",
    period: "May 2025 – Jul 2025",
  },
];

// ---------- 2. SMALL REUSABLE PIECES ----------
// Reusing small components keeps the page short and easy to explain.

// A shared wrapper so every section has the same width, padding and spacing.
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-gray-200 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

// A small rounded label, used for skills and project technologies.
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

// One entry in the education / experience lists.
function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.title} className="border-l border-gray-200 pl-5">
          <p className="font-medium text-black">{item.title}</p>
          <p className="mt-1 text-gray-600">{item.place}</p>
          <p className="mt-1 text-sm text-gray-500">{item.period}</p>
        </li>
      ))}
    </ul>
  );
}

// ---------- 3. THE PAGE ----------

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-base font-semibold tracking-tight">
            {NAME}
          </a>

          {/* Desktop links (hidden on small screens) */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu: the native <details> element needs no JavaScript */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:border-gray-400">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-44 rounded-md border border-gray-200 bg-white py-2 shadow-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      </header>

      <main id="top">
        {/* HERO + INTRODUCTION */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <p className="text-sm font-medium text-gray-500">Hi, I&apos;m {NAME}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building thoughtful digital experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            I&apos;m a Computer Science graduate pursuing Software Developer and
            Full-Stack Developer roles.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black"
            >
              Get in touch
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-black transition-colors hover:border-black"
            >
              Resume
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              I recently completed my B.Tech in Computer Science and Engineering at
              D Y Patil International University, Pune. I enjoy building web
              applications from the database to the user interface.
            </p>
            <p>
              My main projects, PrepSync AI and Spendly, are full-stack applications
              that use AI features. I&apos;m now looking for an entry-level role in
              India where I can keep learning and contribute to a real product.
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-gray-200 px-4 py-4 text-sm font-medium transition-colors hover:border-black"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-xl border border-gray-200 p-6 transition-colors hover:border-black"
              >
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex gap-5 text-sm font-medium">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    GitHub &rarr;
                  </a>
                  {/* Placeholder link: replace liveUrl in the projects array above */}
                  <a
                    href={project.liveUrl}
                    className="text-gray-500 underline-offset-4 hover:text-black hover:underline"
                  >
                    Live demo (coming soon)
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* EDUCATION & EXPERIENCE */}
        <Section id="experience" title="Education & Experience">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-semibold tracking-tight">Education</h3>
              <Timeline items={education} />
            </div>
            <div>
              <h3 className="mb-6 text-xl font-semibold tracking-tight">Experience</h3>
              <Timeline items={experience} />
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <h3 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about opportunities.
          </h3>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            I&apos;m open to Software Developer and Full-Stack Developer roles. The
            best way to reach me is through any of the links below.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Resume
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              Email
            </a>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8">
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