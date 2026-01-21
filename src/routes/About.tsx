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
            I’m a Principal‑level Solutions Architect with deep engineering expertise, focused on 
            designing, modernizing, and guiding complex distributed systems. My strongest work has 
            always centered on system design, integration architecture, and leading technical 
            efforts that solve real‑world problems at scale.
          </p>

          <p>
            A significant part of my career was spent at Fiserv, where I architected and delivered 
            foundational systems across multiple product lines. That work shaped my architectural 
            approach and gave me hands‑on experience with modernization, performance optimization, 
            reliability engineering, and enterprise‑grade API ecosystems. It remains the core of 
            the architectural depth I bring to every role.
          </p>

          <p>
            In my more recent positions at AXIS Capital and Rightpoint, I expanded that foundation 
            into broader architecture and delivery leadership. At AXIS, I partnered closely with 
            business stakeholders, guided engineering teams, and ensured architectural alignment 
            across hybrid cloud and integration initiatives. At Rightpoint, I focused on CMS‑driven 
            web platforms, leading the architecture and delivery of large content‑centric sites and 
            complex integrations while maintaining a strong engineering presence.
          </p>

          <p>
            Across all of these roles, the common thread is architectural ownership. I thrive when 
            I’m designing systems, shaping integration patterns, solving hard technical challenges, 
            and helping teams deliver with clarity and confidence. I’m now seeking a Principal or 
            Staff Solutions Architect role where I can apply that depth to build systems that matter. 
            I’m also open to Principal or Staff Engineering roles that value strong architecture 
            leadership supported by hands‑on technical expertise.
          </p>

        </div>
      </div>
    </section>
  );
}