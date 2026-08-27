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
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          Technology Leader | Transformation • Architecture • Consulting
        </h2>

        {/* Summary */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
          Technology transformation and consulting leader with 35+ years of
          experience helping complex organizations modernize applications,
          adopt cloud technologies, integrate enterprise systems, and improve
          technology delivery.
        </p>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
          I combine deep software engineering and architecture expertise with
          technology strategy, client consulting, technical leadership,
          stakeholder alignment, and hands-on implementation experience to
          translate business objectives into practical technology solutions.
        </p>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
          My career spans financial services, insurance, healthcare, retail,
          entertainment, and digital commerce, including 18 years at Fiserv
          leading technology modernization and engineering initiatives for
          high-volume payment, billing, and money-movement platforms serving
          thousands of financial institutions.
        </p>

        {/* Areas of Expertise */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          Areas of Expertise
        </h2>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Technology Transformation & Strategy
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Technology Transformation • Digital Transformation • Technology
            Strategy • Architecture Roadmaps • Application Modernization •
            Business-to-Technology Translation
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Architecture & Modernization
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Enterprise Architecture • Solutions Architecture • Cloud
            Architecture • Cloud Adoption & Modernization • Distributed Systems
            • Microservices
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Consulting & Technical Delivery
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Client & Stakeholder Consulting • Implementation & Technical
            Delivery • API & Integration Architecture • Integration Patterns •
            Technical Problem Solving
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Technical Leadership
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Technical Leadership • Engineering Leadership • Team Mentoring •
            Architecture Governance • Reliability & Resilience • Performance
            Optimization
          </p>
        </div>

        {/* Selected Experience */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          Selected Experience
        </h2>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Rightpoint — Solutions Architect
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Consulted with enterprise clients across healthcare, financial
            services, entertainment, retail, and ecommerce on digital
            transformation, application modernization, cloud adoption, and
            integration initiatives. Partnered with business and technology
            stakeholders to translate objectives into practical technology
            solutions and delivery plans.
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            AXIS Capital — Application Delivery Lead, Enterprise Architecture
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Led enterprise technology delivery and application modernization
            initiatives, translating business requirements into application and
            integration solutions while coordinating distributed teams and
            strengthening development and delivery practices.
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Fiserv — Technology Architecture & Engineering Leadership
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-5">
            Progressed through software engineering, architecture, and
            technology leadership roles over 18 years. Led technology
            modernization initiatives, established business and technology
            roadmaps, managed architecture teams, and modernized high-volume
            payment, billing, and money-movement platforms serving thousands of
            financial institutions.
          </p>
        </div>

        {/* What I Bring */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          What I Bring
        </h2>

        <div className="mt-0">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            I bridge the gap between{" "}
            <strong>
              business strategy, technology transformation, architecture, and
              engineering execution
            </strong>
            . My approach combines strategic thinking with practical
            implementation experience—helping organizations modernize legacy
            platforms, adopt cloud-native technologies, improve reliability and
            performance, and establish sustainable technology direction.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            <strong>Professional Focus</strong>: Technology transformation,
            technical consulting, implementation and delivery, enterprise and
            solutions architecture, and technical leadership for organizations
            undergoing modernization and digital transformation.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-lg mt-6">
          <a
            href="https://github.com/mikeeunderwood-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mike-e-underwood-9251b64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}