// src/data/portfolio.ts
// ALL the text on the website lives in this one file.
// To update your portfolio, edit the values here. You do not need to touch the layout code.

import { SITE_NAME } from "../lib/site";

// ---------- Basics ----------

export const NAME = SITE_NAME;
export const ROLE = "Full-Stack Developer";
export const YEAR = 2026; // update once a year (used in the footer)

export const EMAIL = "prasadbangunde8@gmail.com";
export const GITHUB_URL = "https://github.com/prasadbangunde";
export const LINKEDIN_URL = "https://www.linkedin.com/in/prasad-bangunde/";

// The PDF must live in the project's "public" folder with exactly this file name.
export const RESUME_URL = "/Prasad-Bangunde-Resume.pdf";

// ---------- Navigation (same order as the sections on the page) ----------

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

// ---------- Hero ----------

export const heroHeadline = "Building web applications that solve real problems.";

export const heroStack = ["Next.js", "React", "TypeScript", "PostgreSQL"];

export const heroIntro =
  "Computer Science graduate from Pune. I build full-stack web applications end to end, and I'm currently interning as a software developer at Wyreflow Technologies.";

// ---------- About ----------

export const aboutParagraphs: string[] = [
  "I'm a B.Tech Computer Science graduate from D Y Patil International University, Pune. My interest is in full-stack and software development, and I've built practical web applications that cover authentication, databases, APIs and AI integrations.",
  "Since November 2026 I've been interning at Wyreflow Technologies, fixing bugs and contributing code through pull requests in an existing codebase. I'm now looking for a Software Developer, Full-Stack Developer or SDE role as a fresher.",
];

// ---------- Experience and education (newest first) ----------

export type ExperienceItem = {
  role: string;
  organisation: string;
  location?: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    organisation: "Wyreflow Technologies",
    location: "Remote",
    period: "November 2026 – Present",
    current: true,
    points: [
      "Contributing to HireShala, a hiring platform whose team repository is split into separate frontend and backend branches.",
      "Reproducing, diagnosing and fixing bugs in the Student Portal by tracing each issue through the existing codebase.",
      "Delivering every fix on its own feature branch and opening GitHub pull requests into the matching frontend or backend base branch.",
      "Reading, extending and debugging an established codebase while following the team's Git branching and pull request workflow.",
    ],
  },
  {
    role: "Web Development Trainee",
    organisation: "TechOctaNet Services Pvt. Ltd.",
    period: "May 2025 – July 2025",
    points: [
      "Built and shipped several responsive UI components and pages using React.js, HTML and CSS for internal web applications, following Agile SDLC practices.",
      "Debugged and resolved frontend issues during sprint cycles, working with a team of 4 to 6 developers using Git-based version control.",
      "Contributed to Agile sprint development and delivered 5+ production-ready features.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "D Y Patil International University, Pune",
    period: "2022 – 2026",
  },
];

// ---------- Projects (order on the page: ApniSec, PrepSync AI, Spendly) ----------

export type Project = {
  title: string;
  tagline: string; // one-line description
  features: string[]; // 3 to 4 real features, taken from your READMEs and resume
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // optional: a "Live demo" button appears only when this is set
};

export const projects: Project[] = [
  {
    title: "ApniSec",
    tagline:
      "Issue management system for tracking cloud security, red-team and VAPT work.",
    features: [
      "JWT authentication with HTTP-only cookies",
      "Create, filter, update and delete security issues",
      "Role and ownership-based access control",
      "Email notifications with Resend",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod", "Tailwind CSS"],
    githubUrl: "https://github.com/prasadbangunde/apnisec-issue-management-system",
  },
  {
    title: "PrepSync AI",
    tagline: "AI-powered voice interview coaching and ATS resume analysis platform.",
    features: [
      "AI-generated interview questions",
      "Voice-based mock interviews",
      "Resume analysis against job descriptions",
      "AI feedback on answers, with interview history and analytics",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini", "Groq", "Vapi"],
    githubUrl: "https://github.com/prasadbangunde/PrepSync-Ai-voice-interview-coach",
  },
  {
    title: "Spendly",
    tagline: "AI-powered personal finance dashboard.",
    features: [
      "Income and expense tracking",
      "Budget and savings goal tracking",
      "Automated expense categorisation",
      "AI-powered spending insights and interactive dashboards",
    ],
    tags: ["React", "FastAPI", "SQLite", "Groq", "Recharts"],
    githubUrl: "https://github.com/prasadbangunde/Spendly-AI-Powered-Finance-Dashboard",
  },
];

// ---------- Skills ----------

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["C++", "JavaScript", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "JWT"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman"] },
];

// ---------- GitHub section ----------

export type Repo = { name: string; description: string; url: string };

export const githubRepos: Repo[] = [
  ...projects.map((project) => ({
    name: project.title,
    description: project.tagline,
    url: project.githubUrl,
  })),
  {
    name: "This portfolio",
    description: "Built with Next.js, TypeScript and Tailwind CSS.",
    url: "https://github.com/prasadbangunde/prasad-portfolio",
  },
];
