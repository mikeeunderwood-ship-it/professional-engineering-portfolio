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
          Principal Solutions Architect & Technology Leader
        </h2>

        {/* Summary */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-3">
          Principal Solutions Architect and technology leader with 35+ years of experience designing, modernizing, 
          and delivering enterprise technology solutions across complex, distributed environments.
        </p>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-3">
          I specialize in enterprise architecture, application modernization, cloud adoption, API and integration 
          architecture, distributed systems, and technology strategy, combining strategic architecture leadership 
          with deep technical experience to turn business objectives into scalable, practical solutions.
        </p>

        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-3">
          My career spans financial services, insurance, healthcare, retail, entertainment, and digital commerce, 
          including 18 years at Fiserv architecting high-volume payment, billing, and money-movement platforms 
          serving thousands of financial institutions.
        </p>

        {/* Areas of Expertise */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          Areas of Expertise
        </h2>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Enterprise Architecture
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Enterprise &Solutions Architecture • Technology Strategy • Architecture Roadmaps • Modernization Strategy
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Cloud & Modernization
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Microsoft Azure • AWS • Kubernetes • Docker • Cloud-Native Architecture • CI/CD
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Integration & Distributed Systems
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            API Architecture • REST APIs • Microservices • Event-Driven Architecture • Distributed Systems • Integration Patterns
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Reliability & Technical Leadership
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Reliability & Resilience • Performance Optimization • Architecture Governance • Stakeholder Alignment • Engineering Leadership • Technical Mentoring
          </p>
        </div>

        {/* <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Emerging AI Architecture
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Generative AI • RAG • Agentic AI • AI Application Architecture • AI Integration
          </p>
        </div> */}

        {/* Selected Experience */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          Selected Experience
        </h2>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Rightpoint — Solutions Architect
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Led technology architecture and technical delivery for enterprise clients across healthcare, financial 
            services, entertainment, retail, and ecommerce, with a focus on digital transformation, cloud adoption, 
            application modernization, and integration architecture.
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            AXIS Capital — Application Delivery Lead, Enterprise Architecture
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            Provided architectural leadership for enterprise initiatives, translating business requirements into 
            application and integration architectures while guiding distributed teams through modernization and 
            delivery.
          </p>
        </div>

        <div className="mt-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-0">
            Fiserv — Principal Solutions Architect & Architecture Leadership
          </h3>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            18-year progression through software engineering, architecture, and technology leadership roles 
            supporting high-volume payment, billing, and money-movement platforms. Led modernization initiatives, 
            technology roadmaps, distributed systems architecture, and API strategy serving thousands of financial institutions.
          </p>
        </div>

        {/* What I Bring */}
        <h2 className="text-xl font-semibold lg:text-3xl text-gray-900 dark:text-gray-100 mb-3">
          What I Bring
        </h2>

        <div className="mt-0">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            I bridge the gap between <strong>business strategy, enterprise architecture, and engineering execution</strong>. My approach 
            combines architectural vision with practical implementation experience—helping organizations modernize legacy 
            platforms, adopt cloud-native technologies, improve reliability and performance, and establish sustainable 
            technology direction.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-200 mb-3">
            <strong>Professional Focus</strong>: Principal and Senior Solutions Architecture, Enterprise Architecture, and 
            technology leadership for organizations undergoing modernization and digital transformation.
          </p>
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