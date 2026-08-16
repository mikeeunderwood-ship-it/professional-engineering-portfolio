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
        <div className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">

          <p>
            I’m a <strong>Principal Solutions Architect and technology leader with more than 35 years of 
            experience</strong> designing, modernizing, and delivering software and technology solutions 
            across complex enterprise environments. My career has spanned enterprise architecture, 
            application modernization, cloud adoption, API and integration architecture, distributed 
            systems, and technology strategy, combining strategic leadership with deep technical 
            experience.
          </p>

          <p>
            I spent <strong>18 years at Fiserv</strong>, progressing through software engineering and architecture 
            leadership roles while supporting high-volume payment, billing, and money-movement 
            platforms used by thousands of financial institutions. That experience shaped my approach 
            to architecture and gave me extensive hands-on experience with distributed systems, 
            enterprise integration, legacy modernization, performance optimization, reliability, 
            and large-scale transaction processing.
          </p>

          <p>
            At <strong>AXIS Capital</strong>, I expanded into enterprise architecture and application delivery 
            leadership, translating business requirements into application and integration 
            architectures and guiding distributed teams through modernization and implementation. 
          </p>

          <p>
            At <strong>Rightpoint</strong>, I provided technology architecture and technical leadership for enterprise 
            clients across healthcare, financial services, entertainment, retail, and ecommerce, with 
            a focus on digital transformation, cloud adoption, application modernization, APIs, 
            integration, and cloud-native architecture.
          </p>

          <p>
            Across these roles, the common thread has been <strong>turning complex business and technology 
            challenges into practical architectural solutions</strong>. I enjoy working at the intersection 
            of strategy and engineering—defining technical direction, establishing architecture 
            patterns and roadmaps, solving difficult technical problems, and helping teams move 
            from architecture and design through implementation and delivery.
          </p>

          <p>
            I’m currently pursuing opportunities where I can apply that experience as a <strong>Principal 
            Solutions Architect, Senior Solutions Architect, Enterprise Architect, or technology 
            leader</strong>, particularly in organizations modernizing legacy platforms, adopting cloud-native 
            technologies, and evolving their technology strategy.
          </p>

        </div>
      </div>
    </section>
  );
}