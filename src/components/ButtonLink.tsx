// src/components/ButtonLink.tsx
// One link component with three looks, so every button on the site is consistent.
// External links open in a new tab and get a hidden hint for screen-reader users.

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  size?: "md" | "sm";
  external?: boolean;
  download?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "border border-gray-300 bg-white text-black hover:border-black",
  link: "text-gray-700 underline-offset-4 hover:text-black hover:underline",
};

const sizes = {
  md: "px-5 py-3",
  sm: "px-4 py-2",
};

export default function ButtonLink({
  href,
  children,
  variant = "secondary",
  size = "md",
  external = false,
  download = false,
}: ButtonLinkProps) {
  const spacing = variant === "link" ? "px-1 py-3" : sizes[size];

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className={`${base} ${variants[variant]} ${spacing}`}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
