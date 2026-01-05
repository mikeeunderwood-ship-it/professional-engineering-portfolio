import { NavLink } from "react-router-dom";

const articles = [
  {
    title: "How I Approach Distributed System Design",
    slug: "/writing/distributed-system-design",
  },
  {
    title: "Modernizing Legacy Platforms",
    slug: "/writing/modernizing-legacy-platforms",
  },
  {
    title: "Practical API Design for Scalable Systems",
    slug: "/writing/api-design-principles",
  },
  {
    title: "Event Driven Patterns That Scale",
    slug: "/writing/event-driven-patterns",
  },
  {
    title: "Debugging Distributed Systems",
    slug: "/writing/debugging-distributed-systems",
  },
  {
    title: "Glossary of Distributed Systems and Architecture Terms",
    slug: "/writing/glossary",
  },
];

export function WritingSidebar() {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-neutral-200 dark:border-neutral-800 pr-6">
      <nav className="sticky top-24">
        <h2 className="text-lg font-semibold mb-4">Writing Index</h2>
        <ul className="space-y-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <NavLink
                to={article.slug}
                className={({ isActive }) =>
                  `block px-2 py-1 rounded transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                {article.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}