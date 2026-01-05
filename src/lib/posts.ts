import { marked } from "marked";

// Load markdown files relative to this file's location
const files = import.meta.glob("../../content/writing/*.md", {
  as: "raw",
  eager: true
});

export function getPost(slug: string) {
  const match = Object.entries(files).find(([path]) =>
    path.endsWith(`${slug}.md`)
  );

  if (!match) return null;

  const raw = match[1];
  return {
    html: marked.parse(raw),
    slug
  };
}