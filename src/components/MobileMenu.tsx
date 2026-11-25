// src/components/MobileMenu.tsx
// The mobile navigation menu.
// It is a Client Component ("use client") because it needs state: whether the menu is open.
// Unlike the old <details> version, it closes after you tap a link, press Escape, or tap outside it.

"use client";

import { useEffect, useRef, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // While the menu is open, listen for Escape and for clicks outside the menu.
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    // Cleanup: remove the listeners when the menu closes.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
        className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:border-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <ul
          id="mobile-menu"
          className="absolute right-0 mt-2 w-44 rounded-md border border-gray-200 bg-white py-2 shadow-sm"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
