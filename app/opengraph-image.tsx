import { ImageResponse } from "next/og";
import { person } from "@/content/site";
import { builds, games } from "@/content/entries";

export const alt = `${person.name} — ${person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f4f4f1";
const INK = "#15171c";
const MUTED = "#585d66";
const MUTED2 = "#8a8f98";
const RULE = "#d6d7d1";
const LIVE = "#0b7a55";
const DEV = "#b26b0a";

// Social link-preview card: the ledger, on paper.
export default async function Image() {
  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 700;
    style: "normal";
  }[] = [];
  try {
    const [bold, mono] = await Promise.all([
      fetch(
        "https://cdn.jsdelivr.net/npm/@fontsource/bricolage-grotesque@5/files/bricolage-grotesque-latin-700-normal.woff",
      ).then((r) => r.arrayBuffer()),
      fetch(
        "https://cdn.jsdelivr.net/npm/@fontsource/ibm-plex-mono@5/files/ibm-plex-mono-latin-500-normal.woff",
      ).then((r) => r.arrayBuffer()),
    ]);
    fonts.push({ name: "Bricolage", data: bold, weight: 700, style: "normal" });
    fonts.push({ name: "Plex", data: mono, weight: 500, style: "normal" });
  } catch {
    // fall back to the default font
  }
  const display = fonts.length ? "Bricolage" : "sans-serif";
  const mono = fonts.length ? "Plex" : "monospace";

  const rows = [...builds, ...games]
    .filter((e) => e.status === "live" || e.status === "in-dev")
    .slice(0, 5);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          backgroundColor: PAPER,
          color: INK,
          fontFamily: display,
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 20,
            letterSpacing: 3,
            color: MUTED2,
            textTransform: "uppercase",
          }}
        >
          {`${person.name} · ${person.role}`}
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginTop: 18,
            maxWidth: 1000,
          }}
        >
          Side projects that run themselves.
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            borderTop: `2px solid ${INK}`,
            fontFamily: mono,
            fontSize: 22,
          }}
        >
          {rows.map((e) => (
            <div
              key={e.slug}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "11px 0",
                borderBottom: `1px solid ${RULE}`,
              }}
            >
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    backgroundColor: e.status === "live" ? LIVE : DEV,
                  }}
                />
                <div style={{ fontFamily: display, fontWeight: 700, fontSize: 24 }}>
                  {e.name}
                </div>
                <div style={{ color: MUTED }}>{e.running ?? ""}</div>
              </div>
              <div style={{ color: e.status === "live" ? LIVE : DEV }}>
                {e.status === "live" ? "Live" : "In development"}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            fontFamily: mono,
            fontSize: 20,
            color: MUTED2,
          }}
        >
          <div>sanjul-sharma.com</div>
          <div>Games as Splitz Interactive</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
