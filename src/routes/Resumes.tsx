import Breadcrumb from "../components/Breadcrumb";

export default function Resumes() {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Resumes
        </h1>

        <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">

          {/* Solutions Architect */}
          <div className="mb-10">
            <a
              href="/mikeeunderwood_resume_solutions_architect.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-blue-600 dark:border-blue-400 px-3.5 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Solutions Architect
            </a>

            <p className="mt-2">
              For opportunities focused on solutions architecture, enterprise architecture, cloud architecture, application modernization, and technical strategy.
            </p>
          </div>

          {/* Technology Transformation & Consulting */}
          <div>
            <a
              href="/mikeeunderwood_resume_technology_transformation_consulting_leader.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-blue-600 dark:border-blue-400 px-3.5 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Technology Transformation & Consulting
            </a>

            <p className="mt-2">
              For opportunities focused on technology transformation, consulting, implementation, technical delivery, and technical leadership.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}