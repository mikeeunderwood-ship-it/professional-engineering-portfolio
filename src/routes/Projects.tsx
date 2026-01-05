export default function Projects() {
  const projects = [
    {
      title: "Professional Engineering Portfolio",
      status: "Live",
      description:
        "A modern, production-grade engineering portfolio built with Vite, React, TypeScript, and TailwindCSS. Includes custom routing, markdown-driven content, dark mode, responsive layout, and a clean component architecture.",
      tech: "Vite, React, TypeScript, TailwindCSS, Netlify",
      link: "https://mikeeunderwood.dev"
    },
    {
      title: "SEO Lead Generator",
      status: "Live",
      description:
        "A TypeScript-based tool deployed on Netlify for generating SEO-optimized content and leads. Demonstrates modern tooling, DX focus, and clean UI engineering.",
      tech: "TypeScript, Vite, Netlify",
      link: "https://mikeeunderwood-seo-lead-generator.netlify.app/"
    },
    {
      title: "Async & Concurrency Playground",
      status: "Under Construction",
      description:
        "A hands-on demo showcasing async/await, Tasks, ValueTask, cancellation, parallelism, and performance patterns. Maps directly to Phase 1 of the Bootcamp.",
      tech: "C#, .NET 8",
      link: null
    },
    {
      title: "Distributed API Service (Demo)",
      status: "Under Construction",
      description:
        "A clean .NET API demonstrating layered architecture, async workflows, and containerized deployment. Designed as a focused demo of modern API engineering patterns.",
      tech: "C#, .NET 8, Docker",
      link: null
    },
    {
      title: "Event-Driven Workflow Example",
      status: "Under Construction",
      description:
        "A small event-driven demo using queues, background processing, and retry logic to illustrate cloud-native patterns and distributed workflow design.",
      tech: "C#, Messaging, Worker Services",
      link: null
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Projects
        </h1>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Title + Status */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h2>

                {project.status === "Live" && (
                  <span className="text-sm px-2 py-1 rounded bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100">
                    Live
                  </span>
                )}

                {project.status === "Under Construction" && (
                  <span className="text-sm px-2 py-1 rounded bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100">
                    Under Construction
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>

              {/* Link (only if live) */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              ) : (
                <span className="text-sm italic text-gray-500 dark:text-gray-600">
                  Coming soon
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}