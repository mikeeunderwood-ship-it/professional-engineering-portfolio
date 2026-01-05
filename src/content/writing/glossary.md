---
title: "Glossary of Distributed Systems and Architecture Terms"
summary: "A concise glossary of the core terms used throughout my writing on system design, modernization, APIs, event driven systems, and distributed debugging."
date: "2026-01-03"
tags: ["glossary", "distributed-systems", "architecture", "engineering"]
---

# Glossary of Distributed Systems and Architecture Terms

This glossary defines the key terms used across my writing on distributed system design, modernization, API architecture, event driven patterns, and debugging. Each definition is intentionally short, practical, and focused on how the term is used in real systems.

---

## A

### **Action Endpoint**
An API endpoint that performs a specific operation on a resource, such as `POST /orders/{id}:cancel`.

### **Additive Change**
A backward compatible API change that adds new fields or capabilities without breaking existing consumers.

### **Async Workflow**
A workflow where operations run independently and do not block the caller, improving responsiveness and scalability.

### **Autonomy (Service Autonomy)**
The ability for a service or team to evolve independently without requiring coordinated releases or shared deployments.

---

## B

### **Backoff**
A retry strategy where clients wait progressively longer between attempts to avoid overwhelming a failing service.

### **Blast Radius**
The scope of impact when a component fails. Good system design reduces blast radius through isolation and boundaries.

### **Bounded Context**
A domain driven design concept that defines a clear boundary around a domain model and its language.

---

## C

### **Chaos Testing**
Controlled failure injection used to reveal hidden assumptions and validate system resilience.

### **Circuit Breaker**
A pattern that stops calls to an unhealthy dependency to prevent cascading failures.

### **Cloud Native**
Architectural principles and patterns optimized for cloud environments, including elasticity, managed services, and distributed workflows.

### **Correlation ID**
A unique identifier added to logs and traces to follow a request across services.

### **Cursor Pagination**
A pagination method that uses opaque cursors instead of numeric offsets, improving performance and consistency at scale.

---

## D

### **Dead Letter Queue (DLQ)**
A holding queue for messages that repeatedly fail processing, used to isolate poison messages.

### **Deduplication**
The process of detecting and ignoring duplicate events or messages.

### **Distributed Tracing**
A technique for tracking a request across multiple services using spans and trace IDs.

### **Domain Mapping**
The process of identifying domains, subdomains, and boundaries when modernizing or decomposing a legacy system.

---

## E

### **Event Carried State Transfer**
A pattern where events include the relevant state needed by consumers, reducing cross service lookups.

### **Event Notification**
A lightweight event that signals something happened without including full state.

### **Event Sourcing**
A storage model where state is derived from a sequence of events rather than a single record.

### **Evolvability**
The ability of a system or API to change over time without breaking consumers or requiring large coordinated rewrites.

---

## F

### **Fan Out**
A pattern where a single event triggers multiple downstream actions or services.

### **Fault Isolation**
Designing systems so failures remain contained within a small area and do not cascade across the platform.

---

## H

### **Health Check**
A lightweight endpoint or signal used to determine whether a service is functioning correctly.

---

## I

### **Idempotency**
The property that repeated operations produce the same result, essential for safe retries in distributed systems.

### **Idempotency Key**
A client provided token used to ensure that a POST request is processed only once.

### **Integration Boundary**
A stable contract between systems that allows internal implementations to evolve independently.

---

## L

### **Latency Spike**
A sudden increase in response time, often the first visible symptom of a deeper issue.

### **Legacy Monolith**
A large, tightly coupled system where business logic, data access, and workflows are intertwined, making change risky and slow.

---

## M

### **Message Duplication**
A normal behavior in distributed messaging systems where the same event may be delivered more than once.

### **Migration Path**
A stepwise plan for modernizing a legacy system without rewriting everything at once.

### **Monotonic Clock**
A clock that always moves forward, used to avoid issues caused by system time drift.

---

## O

### **Offset Pagination**
A simple pagination method using numeric offsets, suitable for low volume datasets.

### **Operational Complexity**
The overhead required to deploy, monitor, debug, and maintain a system. Modernization efforts often aim to reduce this.

### **Outbox Pattern**
A pattern that ensures reliable event publishing by writing events to a database table within the same transaction as business data.

---

## P

### **Partial Outage**
A failure that affects only part of the system, such as a single region, partition, or dependency.

### **Poison Message**
A message that always fails processing and must be isolated to avoid blocking the pipeline.

### **Predictability**
A design principle where APIs and systems behave consistently, reducing cognitive load and integration risk.

---

## R

### **RED Metrics**
A monitoring framework focused on Rate, Errors, and Duration for understanding service health.

### **Refactoring Boundary**
A stable API or domain boundary that allows internal components to be rewritten without impacting consumers.

### **Retry Storm**
A failure amplification pattern where retries overload an already struggling service.

---

## S

### **Saga**
A pattern for coordinating long running workflows across multiple services using events and compensating actions.

### **Separation of Concerns**
A design principle that keeps capabilities, responsibilities, and data ownership clearly separated.

### **Span**
A unit of work in distributed tracing that represents a single operation within a request.

### **Structured Logging**
Logs formatted with consistent fields to enable machine parsing and correlation.

---

## T

### **Trace ID**
A unique identifier that ties together all spans in a distributed trace.

### **Transient Failure**
A temporary error such as a timeout or network glitch that often resolves on retry.

### **Tight Coupling**
A condition where systems depend heavily on each other’s internal behavior, making change risky and slow.

---

## U

### **USE Metrics**
A monitoring framework focused on Utilization, Saturation, and Errors for understanding resource bottlenecks.

---

## V

### **Versioning**
The practice of evolving APIs in controlled, backward compatible ways, often using `/v1`, `/v2`, or header based negotiation.

---

## W

### **Workflow Choreography**
A saga style where each service reacts to events and emits new ones without a central coordinator.

### **Workflow Orchestration**
A saga style where a central process manager coordinates the steps of a workflow.

---

## Closing Thoughts

A shared vocabulary makes complex systems easier to understand, discuss, and evolve. This glossary provides the foundational terms used throughout my writing and reflects the mental models I rely on when designing, modernizing, and debugging distributed systems.