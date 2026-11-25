// src/app/opengraph-image.tsx
// Generates the preview image shown when your link is shared on LinkedIn, WhatsApp, X and so on.
// It is drawn with plain text on a white background to match the site design.

import { ImageResponse } from "next/og";

export const alt = "Prasad Bangunde, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "white",
          color: "black",
          border: "2px solid #e5e7eb",
        }}
      >
        <div style={{ fontSize: 30, color: "#6b7280", letterSpacing: 2 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, marginTop: 24 }}>
          Prasad Bangunde
        </div>
        <div style={{ fontSize: 44, color: "#374151", marginTop: 16 }}>
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 30, color: "#6b7280", marginTop: 48 }}>
          Next.js · TypeScript · PostgreSQL
        </div>
      </div>
    ),
    { ...size },
  );
}
