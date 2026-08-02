import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default async function OpengraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "src/app/_og/familjen-bold.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          backgroundColor: "#061309",
          backgroundImage:
            "radial-gradient(circle at 82% 8%, rgba(36,142,68,0.55) 0%, rgba(6,19,9,0) 55%)",
          fontFamily: "Familjen",
        }}
      >
        {/* flame-gradient "A" mark, top right */}
        <svg
          width="230"
          height="206"
          viewBox="0 0 423.65 379.12"
          style={{ position: "absolute", top: 64, right: 76 }}
        >
          <defs>
            <linearGradient id="og-flame" x1="82.29" y1="26.1" x2="256.7" y2="439.32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f37621" />
              <stop offset="1" stopColor="#f8bc3e" />
            </linearGradient>
          </defs>
          <path
            fill="url(#og-flame)"
            d="M377.48,379.12H293.77v-80.7a78.31,78.31,0,0,0-78.32-78.31H134.76v80.7a78.3,78.3,0,0,0,78.31,78.31H46.21c-35.55,0-57.7-38.42-40-69.2L171.92,23C189.65-7.68,234-7.68,251.77,23l165.6,286.89C435.18,340.7,413,379.12,377.48,379.12Z"
          />
        </svg>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#63c481",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Ahmedabad · India
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
          <div style={{ display: "flex", color: "#fdfceb", fontSize: 76, lineHeight: 1.05 }}>
            Infinite Energy,
          </div>
          <div
            style={{
              display: "flex",
              backgroundImage: "linear-gradient(112deg, #f37621, #f8bc3e)",
              backgroundClip: "text",
              color: "transparent",
              fontSize: 76,
              lineHeight: 1.05,
            }}
          >
            Sustainable Future.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "rgba(253,252,235,0.7)",
              fontSize: 30,
              fontFamily: "sans-serif",
              maxWidth: 760,
            }}
          >
            CBG plants · Carbon credits · Agroforestry
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Familjen", data: fontData, weight: 700, style: "normal" }],
    },
  );
}
