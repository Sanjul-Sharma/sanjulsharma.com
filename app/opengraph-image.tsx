import { ImageResponse } from "next/og";
import { person } from "@/content/site";

export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social link-preview card (LinkedIn, X, etc.) in the site's Nocturne look.
export default async function Image() {
  // Try to load the site's display face; degrade gracefully if unavailable.
  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 700;
    style: "normal";
  }[] = [];
  try {
    const [bold, medium] = await Promise.all([
      fetch(
        "https://cdn.jsdelivr.net/npm/@fontsource/space-grotesk@5/files/space-grotesk-latin-700-normal.woff",
      ).then((r) => r.arrayBuffer()),
      fetch(
        "https://cdn.jsdelivr.net/npm/@fontsource/space-grotesk@5/files/space-grotesk-latin-500-normal.woff",
      ).then((r) => r.arrayBuffer()),
    ]);
    fonts.push({ name: "Space Grotesk", data: bold, weight: 700, style: "normal" });
    fonts.push({ name: "Space Grotesk", data: medium, weight: 500, style: "normal" });
  } catch {
    // fall back to the default font
  }

  const family = fonts.length ? "Space Grotesk" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          backgroundColor: "#0a0c11",
          backgroundImage:
            "linear-gradient(135deg, rgba(47,177,255,0.22), rgba(47,177,255,0) 44%), linear-gradient(315deg, rgba(138,255,193,0.13), rgba(138,255,193,0) 46%)",
          color: "#eaedf4",
          fontFamily: family,
        }}
      >
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#8affc1",
            }}
          />
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 5,
              color: "#2fb1ff",
            }}
          >
            SENIOR PLATFORM PRODUCT MANAGER
          </div>
        </div>

        {/* name + subline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 132,
              height: 6,
              borderRadius: 999,
              marginBottom: 30,
              backgroundImage: "linear-gradient(90deg, #2fb1ff, #8affc1)",
            }}
          />
          <div
            style={{
              fontSize: 118,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            {person.name}
          </div>
          <div style={{ fontSize: 33, fontWeight: 500, color: "#a2aabd", marginTop: 22 }}>
            ML &amp; data platforms · PepsiCo · California
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 27, color: "#cfd6e4" }}>sanjul-sharma.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 2,
              color: "#8affc1",
              border: "1px solid #2b3350",
              borderRadius: 999,
              padding: "8px 18px",
            }}
          >
            PORTFOLIO
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
