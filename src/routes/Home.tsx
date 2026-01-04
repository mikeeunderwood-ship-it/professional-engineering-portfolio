export default function Home() {
  return (
    <section className="bg-gradient-to-b bg-white to-gray-50 dark:bg-gray-900 py-5 sm:py-7 lg:py-10 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Mike Underwood
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-10">
          Principal Software Engineer & Solutions Architect
        </h2>

        {/* Summary */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-8">
          I’m a Principal Software Engineer with deep Solutions Architecture experience, 
          currently seeking a Principal or Staff Engineering role where I can design, 
          build, and lead complex systems. I’m also open to Solutions Architect positions 
          that value hands-on engineering and technical leadership.
        </p>

        {/* Top Skills Row */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Distributed Systems",
            "System Design",
            "Cloud‑Native Engineering",
            ".NET / C#",
            "API Engineering",
            "Event‑Driven Design",
            "Azure",
            "AWS Lambda (Serverless)",
            "Performance Optimization",
            "Reliability Engineering"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-0">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Current Focus
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
            What I’m actively sharpening and driving right now:
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Exploring Principal/Staff Software Engineer opportunities, with openness to hands-on Solutions Architect roles.</li>
            <li>• Deepening my Principal-level engineering practice across distributed systems, reliability, and performance.</li>
            <li>• Refining modern architecture patterns across event-driven workflows, API design, and cloud-native systems.</li>
            <li>• Strengthening hands-on engineering in .NET, C#, TypeScript, and modern web stacks.</li>
            <li>• Building polished, production-grade engineering assets that reflect senior-level ownership and technical clarity.</li>
          </ul>
        </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-6 text-lg mt-12">

        {/* Résumé Buttons */}
        <a
          href="/mikeeunderwood_software_engineer_resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border border-blue-600 dark:border-blue-400 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          Principal Software Engineer Résumé
        </a>

        <a
          href="/mikeeunderwood_solutions_architect_resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border border-blue-600 dark:border-blue-400 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          Principal Solutions Architect Résumé
        </a>

        {/* Secondary Links */}
        <a
          href="https://github.com/mikeeunderwood-ship-it"
          target="_blank"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mike-e-underwood-9251b64"
          target="_blank"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>

      </div>
    </section>
  );
}