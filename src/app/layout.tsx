// src/app/layout.tsx
// The root layout wraps every page. It sets the fonts and the SEO metadata
// (browser tab title, search result description and the preview shown when the link is shared).

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${SITE_NAME} | Full-Stack Developer`;
const DESCRIPTION =
  "Portfolio of Prasad Bangunde, a Computer Science graduate and software development intern. Full-stack projects built with Next.js, TypeScript and PostgreSQL: ApniSec, PrepSync AI and Spendly.";

export const metadata: Metadata = {
  // metadataBase turns relative URLs (like the share image) into full web addresses.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Prasad Bangunde",
    "Full-Stack Developer",
    "Software Developer",
    "SDE",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

// Structured data: helps search engines understand that this page is about a person.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/prasadbangunde",
    "https://www.linkedin.com/in/prasad-bangunde/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
