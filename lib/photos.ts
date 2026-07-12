import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
]);

/**
 * Reads /public/photography and returns web paths for every image found,
 * sorted by filename (numeric-aware, so 2.jpg comes before 10.jpg).
 *
 * This runs on the server at build time, so adding photos is just: drop the
 * files into public/photography/ — no code changes needed. Prefix filenames
 * (01_, 02_, …) if you want to control the order.
 */
export function getPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "photography");
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return []; // folder missing / empty → placeholders shown
  }
  return files
    .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/photography/${f}`);
}
