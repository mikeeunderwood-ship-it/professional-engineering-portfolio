import fm from "front-matter";
import { marked } from "marked";

const files = import.meta.glob("../content/writing/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getPost(slug: string) {
  const entries = Object.entries(files as Record<string, string>);
  const match = entries.find(([path]) => path.endsWith(`/${slug}.md`));

  if (!match) return null;

  const raw = match[1];
  const parsed = fm(raw);

  return {
    html: marked.parse(parsed.body),
    meta: parsed.attributes,
    slug,
  };
}