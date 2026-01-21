import Breadcrumb from "../components/Breadcrumb";

export default function Home() {
  return (
    <section className="bg-gradient-to-b bg-white to-gray-50 dark:bg-gray-900 py-5 sm:py-7 lg:py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Mike E Underwood
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-4">
          Principal Solutions Architect & Staff-Level Engineering Leader
        </h2>

        {/* Summary */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-8">
          Principal‑level Solutions Architect with deep engineering expertise, focused on designing, modernizing, 
          and guiding complex distributed systems. Currently exploring Principal or Staff Solutions Architect 
          roles where architectural leadership, system design, and cross‑team technical direction drive meaningful 
          impact. Also open to Principal/Staff Engineering positions that value strong architecture ownership 
          supported by hands‑on technical depth.
        </p>

        {/* Top Skills Row */}
        <div className="flex flex-wrap gap-3 mb-4">
          {[
            "Distributed Systems",
            "System Design",
            "Cloud‑Native Engineering",
            "Event‑Driven Design",
            "API Architecture",
            "Cloud-Native Architecture",
            "Azure",
            "AWS Lambda (Serverless)",
            "Modernization & Legacy Transformation",
            "Reliability & Performance Engineering"
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

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
            What I’m actively sharpening and driving right now:
          </p>

          <ul className="space-y-0 text-gray-700 dark:text-gray-300">
            <li>• Deepening my Principal‑level architecture practice across distributed systems, integration patterns, and event‑driven workflows</li>
            <li>• Driving modernization across API design, cloud‑native systems, and high‑volume platforms</li>
            <li>• Re‑engaging hands‑on engineering in .NET, C#, TypeScript, and modern web stacks to sharpen architectural decision‑making</li>
            <li>• Producing polished, production‑grade architectural assets that demonstrate senior‑level clarity and system‑wide reasoning</li>
            <li>• Exploring Principal/Staff Solutions Architect opportunities, with openness to Principal/Staff Engineering roles that value architecture leadership</li>
          </ul>
        </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-6 text-lg mt-6">

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