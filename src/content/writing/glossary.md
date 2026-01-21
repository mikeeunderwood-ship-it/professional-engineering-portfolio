# Glossary of Distributed Systems, Architecture, and Platform Terms

This glossary defines the key terms used across my writing on distributed system design, modernization, API strategy, reliability engineering, platform architecture, governance, cloud fundamentals, and discovery. Each definition is intentionally short, practical, and focused on how the term is used in real systems.

---

## A

### **Action Endpoint**  
An API endpoint that performs an operation on a resource (e.g., `POST /orders/{id}:cancel`).

### **Additive Change**  
A backward‑compatible API change that adds fields or capabilities without breaking consumers.

### **Anti‑Corruption Layer (ACL)**  
A boundary that shields modern systems from legacy complexity by translating formats, normalizing data, and preventing domain leakage.

### **Architectural Guardrail**  
A lightweight rule that guides teams toward consistent, safe decisions without blocking autonomy.

### **Architectural Integrity**
The long‑term consistency, coherence, and reliability of a system’s design, protected through governance, standards, and influence.

### **Architectural Narrative**
The consistent, repeated messaging that explains why the architecture exists, what it protects, and how teams should apply it.

### **Architecture Decision Record (ADR)**  
A short document capturing a significant architectural decision and its rationale.

### **Assumption Validation**
Testing or prototyping to confirm whether a technical or architectural assumption is true before making a decision.

### **Async Workflow**  
A workflow where operations run independently and do not block the caller.

### **Authentication Boundary**  
A clear separation between identity verification and downstream service logic, ensuring consistent security enforcement.

---

## B

### **Backoff**  
A retry strategy where clients wait progressively longer between attempts.

### **Blast Radius**  
The scope of impact when a component fails; minimized through isolation.

### **Bounded Context**  
A domain boundary with its own model and language.

### **Bulkhead**  
A reliability pattern that isolates resources (threads, pools, queues) to prevent cascading failures.

---

## C

### **Capability Mapping**  
Identifying the core capabilities a system must support, used to guide modernization and platform design.

### **Change Surface Area**  
The amount of the system affected by a change.

### **Chaos Testing**  
Controlled failure injection to validate resilience.

### **Circuit Breaker**  
A pattern that stops calls to an unhealthy dependency.

### **Cloud Native**  
Architectural principles optimized for cloud environments: elasticity, automation, distributed workflows.

### **Configuration Over Customization**  
A platform principle where tenants configure behavior instead of forking code.

### **Conflict Decomposition**
Breaking down architectural disagreements into their underlying causes (risk, incentives, constraints) to resolve them effectively.

### **Correlation ID**  
A unique identifier used to trace a request across services.

### **Cross‑Team Alignment**
The process of ensuring multiple teams share the same architectural direction, assumptions, and long‑term goals.

### **Cross‑Tenant Isolation**  
Ensuring one tenant’s data, performance, or failures cannot impact another.

---

## D

### **Dead Letter Queue (DLQ)**  
A queue for messages that repeatedly fail processing.

### **Decision Framework**  
A structured approach for evaluating architectural options.

### **Decision Log**  
A running record of architectural decisions.

### **Discovery Framework**  
A structured method for clarifying requirements, constraints, and risks before design begins.

### **Distributed Tracing**  
Tracking a request across multiple services using spans and trace IDs.

### **Domain Mapping**  
Identifying domains and boundaries during modernization or decomposition.

---

## E

### **Elastic Scaling**  
Automatically adjusting compute capacity based on load.

### **Event Carried State Transfer**  
Events include the state consumers need, reducing lookups.

### **Event Notification**  
A lightweight event signaling that something happened.

### **Event Sourcing**  
State derived from a sequence of events.

### **Evolvability**  
A system’s ability to change without breaking consumers.

### **Executive Summary (Technical)**  
A concise explanation of a proposal for non‑technical leaders.

---

## F

### **Fan Out**  
A single event triggers multiple downstream actions.

### **Fault Isolation**  
Containing failures within a small area.

### **Feature Flag**  
A mechanism for enabling or disabling functionality at runtime.

### **Future‑State Architecture**  
The target architecture a modernization effort aims to achieve.

---

## G

### **Governance Model**  
The structure used to ensure architectural consistency and quality.

### **Guardrails, Not Gates**  
A governance philosophy that guides teams without blocking delivery.

---

## H

### **Health Check**  
A signal indicating whether a service is functioning correctly.

### **Horizontal Scaling**  
Increasing capacity by adding more instances rather than scaling vertically.

---

## I

### **Idempotency**  
Repeated operations produce the same result.

### **Idempotency Key**  
A token ensuring a POST request is processed only once.

### **Influence Without Authority**
The ability to guide teams, shape decisions, and drive architectural outcomes without formal reporting lines or managerial control.

### **Integration Boundary**  
A stable contract between systems.

### **Isolation Model (Multi‑Tenant)**  
The degree to which tenants share or isolate compute, data, and infrastructure.

---

## L

### **Latency Spike**  
A sudden increase in response time.

### **Legacy Entanglement**  
Hidden dependencies that complicate modernization.

### **Least Privilege**  
A security principle where identities receive only the access they need.

---

## M

### **Message Duplication**  
A normal behavior in distributed messaging systems.

### **Migration Path**  
A stepwise modernization plan.

### **Modernization Blueprint**  
A high‑level plan outlining phases and risks.

### **Monotonic Clock**  
A clock that always moves forward.

### **Multi‑Tenant Architecture**  
A platform model where multiple tenants share infrastructure with controlled isolation.

---

## N

### **Noisy Neighbor**  
A tenant whose workload negatively impacts others in a shared environment.

### **Non‑Functional Requirements (NFRs)**  
Requirements describing system behavior: performance, reliability, compliance, scalability.

---

## O

### **Offset Pagination**  
Pagination using numeric offsets.

### **Operational Complexity**  
The overhead required to deploy, monitor, and maintain a system.

### **Organizational Coupling**  
Team structures that mirror technical coupling.

### **Outbox Pattern**  
Ensures reliable event publishing within a transaction.

---

## P

### **Parallel Run**  
Running legacy and modernized systems side‑by‑side to validate behavior.

### **Partial Outage**  
A failure affecting only part of the system.

### **PCI Scope**  
The portion of a system subject to PCI compliance requirements.

### **Platform Capability**  
A shared service (identity, configuration, messaging) used across tenants or teams.

### **Poison Message**  
A message that always fails processing.

### **Predictability**  
Consistent system behavior that reduces integration risk.

### **Principle‑Driven Architecture**  
Architecture guided by explicit principles.

### **Psychological Safety (in Architecture)**
A team environment where engineers feel safe raising concerns, challenging assumptions, and discussing tradeoffs without fear of blame.

---

## R

### **RED Metrics**  
Rate, Errors, Duration, a service health framework.

### **Refactoring Boundary**  
A stable API that allows internal rewrites.

### **Reference Implementation**
A minimal, working example that demonstrates how a pattern or architectural decision should be applied in practice.

### **Retry Storm**  
Retries that overload a struggling service.

### **Risk Matrix**  
A tool for evaluating risks by likelihood and impact.

---

## S

### **Saga**  
A pattern for coordinating long‑running workflows.

### **Scalability Model**  
How a system grows with load: horizontal, vertical, or partitioned.

### **Separation of Concerns**  
Keeping responsibilities and data ownership clearly separated.

### **Service Boundary**  
A clear definition of what a service owns and exposes.

### **Shared Outcomes**
A framing technique where architectural decisions are aligned to common goals (reliability, scalability, compliance) rather than imposed as directives.

### **Stakeholder Map**  
A representation of people and roles affected by a decision.

### **Strategic Tradeoff**  
A decision balancing competing priorities.

### **Surfacing Constraints**
The practice of uncovering hidden pressures (timeline, ownership, risk tolerance, legacy limitations) that drive architectural conflict.

### **Structured Logging**  
Logs formatted with consistent fields.

### **Structured Options**
A decision‑making approach where architects present multiple viable paths (ideal, pragmatic, acceptable‑with‑guardrails) instead of a single mandated solution.

### **Synchronous vs Asynchronous Integration**  
Choosing between immediate responses or decoupled workflows.

---

## T

### **Technical Narrative**  
A structured explanation connecting technical decisions to business outcomes.

### **Tenant Isolation**  
Ensuring tenants cannot access or impact each other’s data or performance.

### **Trace ID**  
A unique identifier for a distributed trace.

### **Tradeoff Analysis**  
Comparing architectural options and implications.

### **Transient Failure**  
A temporary error that often resolves on retry.

### **Tight Coupling**  
Systems depending heavily on each other’s internals.

---

## U

### **USE Metrics**  
Utilization, Saturation, Errors, a resource bottleneck framework.

---

## V

### **Versioning**  
Evolving APIs in controlled, backward‑compatible ways.

---

## W

### **Workflow Choreography**  
Each service reacts to events without a central coordinator.

### **Workflow Orchestration**  
A central process manager coordinates workflow steps.

---

## Closing Thoughts

A shared vocabulary makes complex systems easier to understand, design, and evolve. This glossary reflects the mental models I rely on when building distributed systems, modernizing legacy platforms, designing APIs, leading governance, and architecting cloud‑native platforms.