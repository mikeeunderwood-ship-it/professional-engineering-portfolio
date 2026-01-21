---
title: "Discovery Frameworks & Requirements Clarification"
summary: "How I lead discovery, clarify requirements, and create the shared understanding needed for successful architecture and delivery."
date: "2026-01-20"
tags: ["discovery", "requirements", "architecture", "strategy"]
---

# Discovery Frameworks & Requirements Clarification

Discovery is where architecture begins. Before patterns, diagrams, or service boundaries, there must be clarity, clarity about the problem, the constraints, the stakeholders, and the outcomes that matter. Most project failures trace back to unclear requirements, mismatched expectations, or assumptions that were never surfaced.

Discovery frameworks provide structure to this early phase. They help teams uncover what’s true, what’s missing, and what decisions actually matter. Requirements clarification turns ambiguity into alignment, enabling architecture to be intentional rather than reactive.

This write-up outlines how I lead discovery and requirements clarification in complex, multi-stakeholder environments.

---

## Why Discovery Matters

Discovery is not a formality, it’s risk reduction.

Projects fail when teams:

- solve the wrong problem  
- misunderstand constraints  
- assume shared understanding that doesn’t exist  
- skip stakeholder alignment  
- jump to solutions too early  
- overlook operational or compliance requirements  

Discovery prevents these failures by creating a shared mental model of the problem space and the desired outcomes.

Good discovery accelerates delivery.  
Poor discovery guarantees rework.

---

## My Discovery Principles

I anchor discovery around a few core principles:

### **1. Clarity before solutions**
Teams should understand the problem deeply before proposing architecture.

### **2. Ask until the ambiguity disappears**
Ambiguity is a risk, questions reduce it.

### **3. Separate requirements from assumptions**
Assumptions are where hidden risks live.

### **4. Align stakeholders early**
Alignment is cheaper at the beginning than at the end.

### **5. Document decisions and context**
Discovery is only useful if it’s captured and shared.

These principles shape how I run discovery sessions and clarify requirements.

---

## Discovery Frameworks I Rely On

### **1. Problem Framing & Context Mapping**

I start by mapping:

- the business problem  
- the desired outcomes  
- the constraints  
- the success criteria  
- the stakeholders and their incentives  

This creates a shared understanding of *why* the work exists.

---

### **2. Domain & Workflow Exploration**

I use structured techniques to uncover how the system actually works:

- domain walkthroughs  
- workflow mapping  
- sequence diagrams  
- data flow mapping  
- “day in the life” operational reviews  

These reveal hidden dependencies and edge cases early.

---

### **3. Requirements Clarification Framework**

I categorize requirements into:

#### **Functional Requirements**
What the system must do.

#### **Non‑Functional Requirements**
How the system must behave:
- performance  
- reliability  
- compliance  
- security  
- scalability  
- observability  

#### **Constraints**
What cannot change:
- regulatory rules  
- legacy dependencies  
- operational windows  
- vendor limitations  

#### **Assumptions**
What we believe to be true but must validate.

This framework reduces ambiguity and surfaces risks early.

---

### **4. Risk & Impact Assessment**

I identify risks across:

- architecture  
- data  
- integrations  
- compliance  
- operations  
- delivery  

Then I assess impact and likelihood to prioritize what matters most.

---

### **5. Decision Capture & Alignment**

Discovery ends with clarity:

- documented decisions  
- open questions  
- tradeoffs  
- constraints  
- next steps  

I use lightweight artifacts, ADRs, decision logs, or short summaries, to ensure alignment across teams.

---

## How I Lead Requirements Clarification

Requirements clarification is a leadership activity. I guide teams through:

### **1. Asking targeted questions**
“What problem are we solving?”  
“What does success look like?”  
“What happens if we do nothing?”

### **2. Surfacing hidden constraints**
Legacy systems, compliance rules, operational realities.

### **3. Identifying conflicting expectations**
Different stakeholders often want different outcomes.

### **4. Making tradeoffs explicit**
No architecture decision is free, clarity reduces surprises.

### **5. Converting ambiguity into actionable requirements**
Turning vague statements into measurable, testable expectations.

This process creates the foundation for intentional architecture.

---

## Example: Discovery for High‑Volume eBill Modernization at Fiserv

In one discovery effort at Fiserv, I led requirements clarification for modernizing eBill‑related services within our .NET‑based SOA, a platform processing **millions of transactions per day** across thousands of financial institutions.

During discovery, we:

- mapped the end‑to‑end bill presentment and payment workflows  
- identified PCI‑aligned constraints around data handling and auditability  
- clarified functional requirements across billers, financial institutions, and internal operations  
- surfaced hidden dependencies in legacy mainframe and batch workflows  
- defined non‑functional requirements for reliability, latency, and observability  
- documented assumptions and risks around migration sequencing  
- aligned stakeholders across product, engineering, operations, and compliance  

This discovery work created the clarity needed to modernize the eBill service layer safely and incrementally, reducing risk and accelerating delivery.

---

## Lessons Learned

### **Discovery is risk management**
Clarity reduces rework, surprises, and architectural drift.

### **Requirements are rarely complete at the start**
They must be iteratively refined.

### **Stakeholder alignment is essential**
Misalignment is more dangerous than technical debt.

### **Assumptions are hidden risks**
Surfacing them early prevents failure later.

### **Documentation is leverage**
Shared understanding accelerates delivery.

---

## Closing Thoughts

Discovery frameworks and requirements clarification are foundational to successful architecture. They create alignment, reduce risk, and ensure that teams solve the right problem with the right constraints in mind.

When done well, discovery transforms ambiguity into clarity, and clarity into confident, intentional architecture.
