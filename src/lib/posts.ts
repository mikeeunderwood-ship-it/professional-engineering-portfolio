import { marked } from "marked";

// Load markdown files relative to the Vite project root
const files = import.meta.glob("/content/writing/*.md", {
  as: "raw",
  eager: true
});

export function getPost(slug: string) {
  const filePath = `/content/writing/${slug}.md`;
  const raw = (files as Record<string, string>)[filePath];

  if (!raw) {
    console.warn("Markdown not found:", { slug, filePath, files });
    return null;
  }

  return {
    html: marked.parse(raw),
    slug
  };
}