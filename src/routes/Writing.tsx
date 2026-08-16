import Breadcrumb from "../components/Breadcrumb";

export default function Writing() {
  const sections = [
    {
      title: "Architecture Leadership & Decision-Making",
      description:
        "How I approach architectural decisions, stakeholder alignment, governance, discovery, and technical leadership across organizations.",
      posts: [
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
          title:
            "Influencing Without Authority: How Principal Architects Lead Across Teams",
          summary:
            "How Principal Architects lead across teams by influencing decisions, resolving conflict, and driving alignment without relying on authority.",
          link: "/writing/influencing-without-authority",
        },
        {
          title: "Architecture Governance & Technical Review Leadership",
          summary:
            "How I establish architectural guardrails, lead review boards, and ensure production-ready solutions.",
          link: "/writing/architecture-governance-and-technical-review-leadership",
        },
        {
          title: "Discovery Frameworks & Requirements Clarification",
          summary:
            "My approach to running discovery, mapping current-state systems, and shaping future-state architectures.",
          link: "/writing/discovery-frameworks-and-requirements-clarification",
        },
      ],
    },
    {
      title: "Distributed Systems & Cloud Architecture",
      description:
        "Principles and patterns for designing scalable, resilient, cloud-native systems and distributed architectures.",
      posts: [
        {
          title: "How I Approach Distributed System Design",
          summary:
            "The principles, tradeoffs, and mental models I rely on when designing distributed systems at scale.",
          link: "/writing/distributed-system-design",
        },
        {
          title: "Cloud Architecture Fundamentals for Distributed Systems",
          summary:
            "How I design cloud-native architectures by selecting compute, messaging, and data patterns that keep distributed systems scalable and reliable.",
          link: "/writing/cloud-architecture-fundamentals-for-distributed-systems",
        },
        {
          title: "Platform Thinking & Multi-Tenant Architecture",
          summary:
            "Principles for designing extensible, multi-tenant platforms that scale with business needs.",
          link: "/writing/platform-thinking-and-multi-tenant-architecture",
        },
      ],
    },
    {
      title: "Integration & API Architecture",
      description:
        "Patterns for designing APIs, integration workflows, service boundaries, and event-driven architectures across enterprise platforms.",
      posts: [
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
      ],
    },
    {
      title: "Modernization & Legacy Transformation",
      description:
        "Approaches for modernizing legacy platforms while managing technical risk, business priorities, and long-term architectural direction.",
      posts: [
        {
          title: "Modernizing Legacy Platforms",
          summary:
            "How I modernize legacy systems through incremental, low-risk patterns that improve reliability, performance, and long-term maintainability.",
          link: "/writing/modernizing-legacy-platforms",
        },
        {
          title: "Modernization Strategy & Legacy System Transformation",
          summary:
            "How I design modernization strategies, align stakeholders, and lead the transformation of large, legacy platforms.",
          link: "/writing/modernization-strategy-and-legacy-transformation",
        },
      ],
    },
    {
      title: "Reliability, Performance & Operations",
      description:
        "Architectural approaches for building reliable systems, diagnosing complex distributed failures, and improving performance and operational resilience.",
      posts: [
        {
          title: "Architecting for Reliability: Patterns for High-Volume Systems",
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
      ],
    },
    {
      title: "Security & Regulated Environments",
      description:
        "Architectural considerations for security, compliance, and reliable data flows in enterprise and regulated environments.",
      posts: [
        {
          title: "Security, Compliance & Regulated Environments",
          summary:
            "Architectural considerations for PCI, PII, HIPAA, and secure data flows in regulated industries.",
          link: "/writing/security-compliance-and-regulated-environments",
        },
      ],
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        <h1 className="text-4xl font-bold mb-6">Writing</h1>

        <p className="max-w-5xl text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
          Architecture thinking, patterns, and decision frameworks developed
          through more than 35 years of software engineering and architecture.
        </p>

        <p className="max-w-5xl text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
          I write about enterprise architecture, distributed systems,
          modernization, cloud architecture, integration, reliability, and
          technical leadership. The focus is on architectural reasoning rather
          than tutorials—the tradeoffs, patterns, system behavior, and
          decision-making involved in designing, modernizing, and guiding
          complex technology platforms.
        </p>

        <div className="mb-10">
          <a
            href="/writing/glossary"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
          >
            Glossary of Distributed Systems & Modern Architecture
          </a>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            A reference guide to terminology used throughout my writing.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-3xl font-bold mb-2">
                {section.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-4xl">
                {section.description}
              </p>

              <div className="space-y-4">
                {section.posts.map((post) => (
                  <article key={post.title}>
                    <h3 className="text-xl font-semibold">
                      <a
                        href={post.link}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {post.title}
                      </a>
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-4xl">
                      {post.summary}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}