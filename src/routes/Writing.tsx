export default function Writing() {
  const posts = [
    {
        title: "How I Approach Distributed System Design",
        summary: "The principles, tradeoffs, and mental models I rely on when designing distributed systems at scale.",
        link: "/writing/distributed-system-design"
    },
    {
        title: "Modernizing Legacy Platforms",
        summary: "Lessons learned from migrating monolithic enterprise systems into scalable, cloud-native architectures.",
        link: "/writing/modernizing-legacy-platforms"
    },
    {
        title: "Practical API Design for Scalable Systems",
        summary: "How I design APIs that are predictable, evolvable, and resilient in distributed environments.",
        link: "/writing/api-design-principles"
    },
    {
        title: "Event-Driven Patterns That Scale",
        summary: "A practical guide to the event-driven patterns I use to build reliable, decoupled, and scalable systems.",
        link: "/writing/event-driven-patterns"
    },
    {
        title: "Debugging Distributed Systems",
        summary: "How I diagnose failures, latency, and unexpected behavior in distributed, cloud-native systems.",
        link: "/writing/debugging-distributed-systems"
    }
  ];

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Writing</h1>

      <p className="max-w-3xl text-lg leading-relaxed mb-10 text-gray-700 dark:text-gray-300">
        Short, focused write-ups on system design, modernization, distributed workflows, and the engineering
        patterns I use in real-world platforms. These pieces reflect how I think about building reliable,
        scalable systems as a Principal-level engineer.
      </p>

      <div className="grid gap-8">
        {posts.map((post) => (
          <div
            key={post.title}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
            <a
              href={post.link}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}