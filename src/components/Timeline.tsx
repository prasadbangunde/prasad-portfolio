// src/components/Timeline.tsx
// The experience list: a vertical line with a dot for each role.
// The current role gets a solid black dot.

import type { ExperienceItem } from "../data/portfolio";

export default function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-12 border-l border-gray-200 pl-8">
      {items.map((item) => (
        <li key={`${item.organisation}-${item.period}`} className="relative">
          {/* The dot sits on the vertical line */}
          <span
            aria-hidden="true"
            className={`absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-white ${
              item.current ? "bg-black" : "bg-gray-300"
            }`}
          />

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
            <p className="text-sm text-gray-500">{item.period}</p>
          </div>

          <p className="mt-1 text-gray-600">
            {item.organisation}
            {item.location ? ` · ${item.location}` : ""}
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-gray-700 marker:text-gray-400">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
