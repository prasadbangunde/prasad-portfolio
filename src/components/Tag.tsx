// src/components/Tag.tsx
// A small rounded label, used for technologies and skills.

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}
