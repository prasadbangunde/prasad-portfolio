// src/app/icon.tsx
// Generates the browser tab icon (a black square with "PB"). No image file or dependency needed.
// Note: delete src/app/favicon.ico so browsers use this icon instead of the default one.

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
          fontSize: 30,
          fontWeight: 700,
          borderRadius: 12,
        }}
      >
        PB
      </div>
    ),
    { ...size },
  );
}
