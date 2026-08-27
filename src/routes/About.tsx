import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <Breadcrumb />

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          About Me
        </h1>

        {/* About Content */}
        <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">

          <p className="mb-6">
            I’m a <strong>technology transformation and consulting leader with
            more than 35 years of experience</strong> designing, modernizing,
            and delivering software and technology solutions across complex
            enterprise environments. My career has spanned technology
            transformation, enterprise and solutions architecture, application
            modernization, cloud adoption, API and integration architecture,
            distributed systems, and technology strategy, combining strategic
            leadership with deep hands-on technical experience.
          </p>

          <p className="mb-6">
            I spent <strong>18 years at Fiserv</strong>, progressing through
            software engineering, architecture, and technology leadership roles
            while delivering technology solutions for high-volume payment,
            billing, and money-movement platforms used by thousands of financial
            institutions. That experience shaped my approach to technology
            transformation and gave me extensive hands-on experience with
            distributed systems, enterprise integration, legacy modernization,
            performance optimization, reliability, and large-scale transaction
            processing.
          </p>

          <p className="mb-6">
            At <strong>AXIS Capital</strong>, I expanded into enterprise
            technology and application delivery leadership, translating
            business requirements into application and integration solutions
            aligned with enterprise standards and technology strategy. I also
            guided distributed teams through application modernization,
            implementation, and delivery while establishing practices that
            improved consistency, reliability, and technical quality.
          </p>

          <p className="mb-6">
            At <strong>Rightpoint</strong>, I brought that technical and
            enterprise experience into a client consulting environment,
            working with organizations across healthcare, financial services,
            entertainment, retail, and ecommerce. I consulted with clients on
            digital transformation, application modernization, cloud adoption,
            integration, and technology architecture, partnering with business
            and technology stakeholders to translate objectives into practical
            solutions and delivery approaches.
          </p>

          <p className="mb-6">
            Across these roles, the common thread has been{" "}
            <strong>
              turning complex business and technology challenges into practical
              strategies, architectures, and solutions
            </strong>
            . I enjoy working at the intersection of strategy and engineering—
            understanding business objectives, establishing technical
            direction, evaluating tradeoffs, solving difficult technical
            problems, and helping teams move from strategy and architecture
            through implementation and delivery.
          </p>

          <p className="mb-6">
            My approach combines <strong>technology strategy, architecture,
            consulting, implementation, and technical leadership</strong>. I
            believe the most effective technology solutions balance business
            objectives with practical engineering considerations and can evolve
            as organizations, technologies, and requirements change.
          </p>

          <p>
            I’m currently pursuing opportunities where I can apply that
            experience as a <strong>Technology Transformation & Consulting
            Leader, Principal or Senior Solutions Architect, Enterprise
            Architect, or technical leader</strong>—particularly with
            organizations modernizing legacy platforms, adopting cloud-native
            technologies, transforming digital capabilities, and evolving their
            technology strategy.
          </p>

        </div>
      </div>
    </section>
  );
}