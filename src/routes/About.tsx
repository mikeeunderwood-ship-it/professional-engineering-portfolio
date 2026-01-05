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
            I’m a Principal-level Software Engineer with deep experience in distributed systems,
            API design, and large-scale platform architecture. My strongest work has always centered
            on building reliable, scalable systems and leading engineering efforts that solve complex,
            real-world problems.
          </p>

          <p>
            A significant part of my career was spent at Fiserv, where I designed and delivered
            foundational systems across multiple product lines. This work shaped my engineering
            identity and gave me hands-on experience with platform modernization, performance
            optimization, reliability engineering, and enterprise-grade API ecosystems. It remains
            the core of the technical depth I bring to every role.
          </p>

          <p>
            In my more recent positions at AXIS Capital and Rightpoint, I expanded that foundation
            into broader architecture and delivery leadership. At AXIS, I partnered closely with
            business stakeholders, guided engineering teams, and ensured architectural alignment
            across hybrid cloud and integration initiatives. At Rightpoint, I focused on CMS-driven
            web platforms, leading the delivery of large content-centric sites and complex
            integrations while maintaining a strong engineering presence.
          </p>

          <p>
            Across all of these roles, the common thread is technical ownership. I thrive when I’m
            designing systems, writing code, solving hard engineering challenges, and helping teams
            deliver with clarity and confidence. I’m now looking for a Principal or Staff Engineering
            role where I can apply that depth again and contribute to building systems that matter. 
            I’m also open to Principal or Senior Solutions Architect roles that prioritize strong 
            engineering depth and hands‑on technical ownership.
          </p>

        </div>
      </div>
    </section>
  );
}