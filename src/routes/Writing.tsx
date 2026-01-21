import Breadcrumb from "../components/Breadcrumb";

export default function Writing() {
  const posts = [
    {
      title: "Architecture Decision-Making & Tradeoff Frameworks",
      summary:
        "How I evaluate tradeoffs, document decisions, and guide teams toward the right architectural direction.",
      link: "/writing/architecture-decision-making-and-tradeoffs",
    },
    {
      title: "Stakeholder Alignment & Executive Communication",
      summary:
        "How I align business and engineering stakeholders through clear communication and structured decision-making.",
      link: "/writing/stakeholder-alignment-and-executive-communication",
    },
    {
      title: "Influencing Without Authority: How Principal Architects Lead Across Teams",
      summary:
        "How Principal Architects lead across teams by influencing decisions, resolving conflict, and driving alignment without relying on authority.",
      link: "/writing/influencing-without-authority",
    },
    {
      title: "How I Approach Distributed System Design",
      summary:
        "The principles, tradeoffs, and mental models I rely on when designing distributed systems at scale.",
      link: "/writing/distributed-system-design",
    },
    {
      title: "Cloud Architecture Fundamentals for Distributed Systems",
      summary:
        "How I design cloud‑native architectures by selecting the compute, messaging, and data patterns that keep distributed systems scalable and reliable.",
      link: "/writing/cloud-architecture-fundamentals-for-distributed-systems",
    },
    {
      title: "Architecting for Reliability: Patterns for High‑Volume Systems",
      summary:
        "How I architect systems for reliability using patterns that handle load, failures, and unpredictable runtime behavior.",
      link: "/writing/architecting-for-reliability",
    },
    {
      title: "Debugging Distributed Systems",
      summary:
        "How I diagnose failures, latency, and unexpected behavior in distributed, cloud-native systems.",
      link: "/writing/debugging-distributed-systems",
    },
    {
      title: "Practical API Design for Scalable Systems",
      summary:
        "How I design APIs that are predictable, evolvable, and resilient in distributed environments.",
      link: "/writing/api-design-principles",
    },
    {
      title: "Integration Patterns & API Strategy",
      summary:
        "How I design integration workflows, service boundaries, and long-term API evolution strategies.",
      link: "/writing/integration-patterns-and-api-strategy",
    },
    {
      title: "Event-Driven Patterns That Scale",
      summary:
        "A practical guide to the event-driven patterns I use to build reliable, decoupled, and scalable systems.",
      link: "/writing/event-driven-patterns",
    },
    {
      title: "Platform Thinking & Multi-Tenant Architecture",
      summary:
        "Principles for designing extensible, multi-tenant platforms that scale with business needs.",
      link: "/writing/platform-thinking-and-multi-tenant-architecture",
    },
    {
      title: "Modernizing Legacy Platforms",
      summary:
        "How I modernize legacy systems through incremental, low‑risk patterns that improve reliability, performance, and long‑term maintainability.",
      link: "/writing/modernizing-legacy-platforms",
    },
    {
      title: "Modernization Strategy & Legacy System Transformation",
      summary:
        "How I design modernization strategies, align stakeholders, and lead the transformation of large, legacy platforms.",
      link: "/writing/modernization-strategy-and-legacy-transformation",
    },
    {
      title: "Architecture Governance & Technical Review Leadership",
      summary:
        "How I establish architectural guardrails, lead review boards, and ensure production-ready solutions.",
      link: "/writing/architecture-governance-and-technical-review-leadership",
    },
    {
      title: "Security, Compliance & Regulated Environments",
      summary:
        "Architectural considerations for PCI, PII, HIPAA, and secure data flows in regulated industries.",
      link: "/writing/security-compliance-and-regulated-environments",
    },
    {
      title: "Discovery Frameworks & Requirements Clarification",
      summary:
        "My approach to running discovery, mapping current-state systems, and shaping future-state architectures.",
      link: "/writing/discovery-frameworks-and-requirements-clarification",
    },

    // ⭐ NEW ARTICLES (Coming Soon)
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        <h1 className="text-4xl font-bold mb-6">Writing</h1>

        <p className="max-w-5xl text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
          Short, focused pieces on system design, modernization, distributed workflows, and the 
          architecture patterns I use in real‑world platforms. These articles reflect the principles 
          and mental models I rely on to build reliable, scalable systems as a Principal‑level architect.
        </p>

        <p className="max-w-5xl text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
          I write about architecture the way I practice it: through trade‑offs, patterns, system 
          behavior, and the reasoning behind decisions. These aren’t tutorials, they’re the frameworks 
          I use to design, evaluate, and guide complex systems.
        </p>

        <div className="grid mb-8">
          <a
            href="/writing/glossary"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Glossary of Distributed Systems & Modern Architecture
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            A reference guide for terminology used throughout my writing.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {post.summary}
              </p>

              {post.link ? (
                <a
                  href={post.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More
                </a>
              ) : (
                <span className="text-gray-500 dark:text-gray-400 italic">
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