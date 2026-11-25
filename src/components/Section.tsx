// src/components/Section.tsx
// A shared wrapper so every section has the same width, spacing, numbered label and heading.

type SectionProps = {
  id: string; // used by the nav links, e.g. "about" matches href="#about"
  number: string; // small label above the heading, e.g. "01"
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-16 border-t border-gray-200 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs text-gray-500" aria-hidden="true">
          {number}
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
