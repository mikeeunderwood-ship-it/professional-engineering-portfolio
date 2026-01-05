import { marked } from "marked";

// Glob all markdown files under ../content/writing
// NOTE: This path is relative to the project root/src, not the file.
const files = import.meta.glob("../content/writing/*.md", {
  as: "raw",
  eager: true,
});

export function getPost(slug: string) {
  // Convert the glob result into an array of [path, rawContent]
  const entries = Object.entries(files as Record<string, string>);

  // Find the file whose name ends with `${slug}.md`
  const match = entries.find(([path]) => path.endsWith(`/${slug}.md`));

  if (!match) {
    console.warn("Markdown not found:", {
      slug,
      available: entries.map(([path]) => path),
    });
    return null;
  }

  const raw = match[1];

  return {
    html: marked.parse(raw),
    slug,
  };
}