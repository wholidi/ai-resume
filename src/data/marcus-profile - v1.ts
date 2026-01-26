// Marcus Chen's profile data - the core content for the AI and display

export const marcusProfile = {
  name: "William Hartono",
  title: "Digital Transformation & AI Audit Professional",
  subtitle:
    "AI Governance & Safety | Certified AI Auditor (FHCA) | EU AI Act | Bridging Enterprise Digital Transformation & AI Risk",
  location: "Singapore",
  status: "Open to consulting collaborations and enterprise transformation / AI governance roles",

  // Keep this list aligned to your real portfolio (high-signal clients)
  companies: ["Seagate", "KPMG (DOLE)", "Orica", "L’Oréal (Travel Retail)", "Johnson & Johnson"],

  summary: `I work at the intersection of enterprise digital transformation and AI risk/governance.
My strength is turning complex, cross-functional programs into practical delivery: data + process + controls.
In AI governance, I focus on audit-ready evidence: what was decided, why, how it is monitored, and where the risks are.`,

  experience: [
    {
      company: "Seagate",
      role: "Digital Factory Planning Lead",
      period: "Recent",
      highlights: [
        "Led enterprise-scale digital factory planning initiatives across complex manufacturing environments",
        "Aligned cross-functional stakeholders (planning, operations, IT/data) to deliver measurable process improvement",
        "Improved visibility and decision-making through structured data, governance, and execution routines",
      ],
      aiContext: {
        situation:
          "Enterprise transformation work often fails when data ownership, definitions, and accountability are unclear across functions and sites.",
        approach:
          "Start with a clear operating model: decision rights, definitions, and a practical cadence. Deliver value quickly, then scale.",
        technicalWork:
          "Data integration + reporting foundations, process mapping, governance routines, and control points for traceability.",
        lessonsLearned:
          "Transformation is an alignment problem disguised as a technology problem. Evidence + ownership beats dashboards alone.",
      },
    },
    {
      company: "KPMG for DOLE",
      role: "Digital Data Transformation Lead",
      period: "Recent",
      highlights: [
        "Led digital data transformation across supply chain/agriculture context",
        "Standardized data and reporting to enable operational and management decision-making",
        "Coordinated change management and adoption across stakeholder groups",
      ],
      aiContext: {
        situation:
          "Multiple parties produced ‘data’ but with inconsistent definitions; stakeholders could not agree on what was true.",
        approach:
          "Define a single source of truth and enforce governance through process and accountability, not just tools.",
        technicalWork:
          "Data model alignment, validation checks, data quality routines, and stakeholder-facing reporting.",
        lessonsLearned:
          "If you can’t explain your data lineage and definitions, you can’t audit it — and you can’t reliably automate it with AI.",
      },
    },
    {
      company: "Orica",
      role: "Data Management Lead",
      period: "Recent",
      highlights: [
        "Led data management initiatives supporting operational performance and compliance expectations",
        "Improved data quality and governance practices for downstream analytics and decision support",
        "Worked across teams to establish sustainable data processes, not one-off fixes",
      ],
      aiContext: {
        situation:
          "Data quality issues created downstream operational risk and unreliable reporting; teams wanted quick fixes.",
        approach:
          "Treat data quality as a product: define owners, metrics, controls, and continuous monitoring.",
        technicalWork:
          "Quality rules, exception workflows, data ownership mapping, and governance documentation.",
        lessonsLearned:
          "You don’t ‘finish’ data governance. You operationalize it — and that’s the foundation for trustworthy AI.",
      },
    },
    {
      company: "L’Oréal (Travel Retail)",
      role: "Supply Chain Optimization Lead",
      period: "Recent",
      highlights: [
        "Led optimization work across supply chain processes in a multi-stakeholder environment",
        "Improved planning and execution flow by aligning process, data, and system practices",
        "Delivered outcomes by balancing speed, stakeholder constraints, and change adoption",
      ],
      aiContext: {
        situation:
          "Optimization projects stall when teams disagree on priorities and when system constraints aren’t made explicit early.",
        approach:
          "Make trade-offs visible: what we optimize for, what we accept, and what must be controlled.",
        technicalWork:
          "Process redesign, data-driven KPI alignment, and execution playbooks for adoption.",
        lessonsLearned:
          "Optimization is governance: define targets, define controls, and keep the feedback loop honest.",
      },
    },
    {
      company: "Johnson & Johnson",
      role: "Logistics & Agile Project Manager",
      period: "Recent",
      highlights: [
        "Managed logistics programs with agile delivery practices in regulated/quality-sensitive contexts",
        "Coordinated delivery across business and technical teams with clear milestones and risk tracking",
        "Supported operational readiness through training, documentation, and change management",
      ],
      aiContext: {
        situation:
          "In regulated environments, speed is possible — but only if documentation and controls are built into delivery.",
        approach:
          "Shift-left risk: define controls and evidence requirements early, then deliver incrementally with traceability.",
        technicalWork:
          "Agile delivery governance, documentation routines, and operational readiness support.",
        lessonsLearned:
          "Audit readiness is a delivery capability, not a last-minute paperwork sprint.",
      },
    },
  ],

  skills: {
    strong: [
      "Enterprise Digital Transformation",
      "AI Governance & Audit Readiness",
      "Risk & Controls Thinking (evidence-based)",
      "Cross-functional Leadership",
      "Data Governance & Data Quality",
      "SAP / Supply Chain Domain Delivery",
    ],
    moderate: [
      "MLOps Concepts & Monitoring (drift, versioning, traceability)",
      "Cloud Fundamentals (AWS/Azure)",
      "Security & Compliance Collaboration",
    ],
    gaps: [
      "Consumer Mobile Product Delivery",
      "Deep Front-End Engineering (UI-heavy apps)",
      "Growth/Experimentation Product Roles",
    ],
  },

  failures: [
    {
      year: 2023,
      title: "The Dashboard That Didn’t Change Behavior",
      summary:
        "Built strong reporting, but adoption lagged because decision rights and routines weren’t defined tightly enough.",
      details:
        "The data was accurate, but teams still made decisions outside the system because ownership and escalation rules were unclear. The fix was to define who decides what, when, and how exceptions are handled.",
      lessons:
        "Analytics doesn’t create outcomes. Operating cadence + ownership does.",
    },
    {
      year: 2022,
      title: "Underestimating Change Management Load",
      summary:
        "A technically sound process improvement stalled because training and stakeholder readiness were under-scoped.",
      details:
        "We assumed teams would adopt a new workflow because it was better. In reality, frontline users needed more enablement, and managers needed clearer incentives and accountability to sustain the change.",
      lessons:
        "If adoption isn’t designed, it won’t happen — even if the solution is right.",
    },
    {
      year: 2021,
      title: "Over-Standardization Too Early",
      summary:
        "Pushed a single standard across sites before local constraints were fully mapped, creating friction and rework.",
      details:
        "Different sites had legitimate differences (process, data availability, constraints). The better approach was a core standard with explicit extension points and a phased rollout.",
      lessons:
        "Standardize the core, allow controlled variation, and scale with evidence.",
    },
  ],

  
  systemPrompt: `You are helping hiring managers evaluate William Hartono as a candidate.

CORE INSTRUCTIONS:
- Be specific and evidence-based. Use concrete evidence from his resume sections: roles, responsibilities, outcomes, industries, tools, certifications.
- Prefer measurable outcomes (cycle time, cost reduction, audit readiness, adoption, quality, controls effectiveness) over hype.
- Be honest about limits. If asked about something not in his background, say so clearly.
- Distinguish "hands-on delivery" vs "advisory/consulting" when relevant.
- When useful, contextualize evidence with seniority and scale (24+ years, multi-country programs, complex enterprises, regulated industries).
- Avoid generic statements. Credibility comes from delivery evidence and audit-ready framing.

ABOUT WILLIAM (HIGH SIGNAL SUMMARY):
- Digital Transformation & AI Audit / Governance Leader
- 24+ years experience; worked across many programs in enterprise environments (multi-stakeholder, messy data/process, unclear ownership)
- Industries: logistics, supply chain, manufacturing, pharma, mining, FMCG, agriculture
- Comfortable in complex ecosystems with multi-system integration, unclear data lineage, and operational ambiguity
- Focus: AI Governance & Safety, AI risk management, audit-ready AI strategies
- Certifications include EU AI Act Auditor (@ForHumanity), Independent AI System Audit, plus relevant cloud / DevOps / Scrum / MLOps certifications (as listed in resume)

WILLIAM'S POSITIONING (WHAT MATTERS TO HIRING MANAGERS):
- Enterprise delivery leader who bridges transformation execution + governance discipline
- AI Governance & Safety focus: audit-ready controls, evidence, monitoring, and regulatory alignment (EU AI Act, AI Verify, etc.)
- Strong at clarifying definitions, decision rights, ownership, and operating cadence in messy environments
- Prefers execution roles that ship outcomes, not purely slideware

WORK STYLE (OPERATING MODEL):
- Starts by mapping reality: current process, data lineage, decision rights, stakeholder incentives, pain points
- Builds minimum viable governance: definitions, owners, controls, escalation paths, and feedback loops
- Scales only after early wins prove value and adoption

HOW TO HANDLE COMMON QUESTIONS:
- "Is he a good fit for X?" → Map role requirements to direct evidence from his resume/projects. Name gaps and risks explicitly.
- "What should I ask in an interview?" → Suggest questions that probe ownership, decision-making under constraints, tradeoffs, governance discipline, and evidence quality.
- "Biggest failure?" → Be realistic and non-defensive. Transformation failures often come from adoption friction, misaligned incentives, unclear ownership, and lack of operating cadence. Use documented learnings; no spin.

OUTPUT FORMAT (DEFAULT):
When asked to evaluate fit, respond in this structure:
1) Fit summary (2–3 sentences)
2) Evidence mapping (bullets: requirement → evidence)
3) Gaps / risks (bullets)
4) Interview questions (5–10 targeted probes)
5) Recommendation (hire / no-hire / hire-with-conditions) + confidence level (Low/Medium/High)

WHAT NOT TO DO (STRICT):
- Do not invent fictional stories, employers, or achievements not present in the resume.
- Do not invent technical details (e.g., specific cloud architectures, Kubernetes cleanups, vendor tools) unless present in the resume.
- Do not claim he is a pure consumer mobile/growth product leader.
- Do not claim he has authored frontier model training research.
- Do not generalize governance leadership into claims of deep hands-on production ML engineering unless explicitly documented.
- Do not oversell. Be credible, practical, and audit-defensible.`,
};

export const demoResponses = {
  default: `Yes — this is a strong fit.

William’s career is built around enterprise environments where the reality is:
messy data + fragmented ownership + operational complexity + high compliance expectations.

He has delivered 29 global projects across 55 countries, including:
• Seagate — Digital Factory Planning Lead (Smart Factory context)
• KPMG for DOLE — Digital Data Transformation Lead (agriculture / fresh fruit)
• Orica — Data Management Lead (mining / explosive)
• L’Oréal — Supply Chain Optimization Lead (travel retail)
• Johnson & Johnson / Pfizer / Sanofi / Eisai — pharma-grade delivery environments

For a messy data infrastructure specifically, the strongest signal is:
• He doesn’t “solve with tools first” — he fixes definitions, ownership, and operating cadence
• He builds audit-ready processes: decision traceability, accountability, controls
• He is effective cross-functionally (business + ops + IT + data teams)

What to probe in interview:
• Can he execute in a small startup team without enterprise support functions?
• How does he prioritize “quick wins” vs building governance foundations?`,

  auditReadiness: `William is explicitly oriented toward audit-ready AI delivery.

If your organization is deploying AI/GenAI, he will focus on:
• intended use + scope boundaries (so AI doesn’t get used outside its design)
• controls: what can go wrong + what prevents/detects it
• evidence: documentation, decision logs, traceability
• monitoring: drift signals, incident response, escalation
• regulatory alignment (EU AI Act-style thinking; AI Verify-style principles)

This is not "AI policy writing" — it’s operational governance that can survive an audit.`,

  transformation: `His transformation style is governance + execution.

Typical approach:
1) Map the current reality: process + data lineage + stakeholders + pain points
2) Agree “what truth is”: definitions + owners + KPI logic
3) Build lightweight controls: validation, exception handling, review cadence
4) Deliver quick wins (visible value), then scale the operating model

He succeeds especially in complex stakeholder environments: supply chain, manufacturing, logistics, pharma.`,

  failure: `His most common failure pattern (and lesson) is not technical — it’s adoption.

In transformation projects, even a correct solution can fail when:
• teams have no ownership
• definitions differ across stakeholders
• incentives don’t align
• there’s no cadence to sustain behavior

His learned discipline is to design adoption:
owners, decision rights, escalation paths, training, and routines.
That’s what makes transformations stick.`,

  leadership: `William leads cross-functionally with clarity and evidence.

He has run global programs in complex ecosystems (multiple countries, sites, stakeholders).
He’s credible with both:
• business leaders (outcomes, adoption, decision making)
• technical teams (systems, data, controls, delivery discipline)

He’s not a “title-only leader” — his strength is execution: aligning people, process, and systems to ship outcomes.`
};

export const fitAssessments = {
  strong: {
    verdict: "strong" as const,
    title: "Strong Fit — Clear Evidence Match",
    summary: "Your requirements align well with my experience. Here’s the evidence:",
    matches: [
      {
        requirement: "Enterprise transformation delivery",
        evidence:
          "Delivered cross-functional transformation across complex stakeholders by aligning process + data + execution cadence."
      },
      {
        requirement: "Messy data / unclear ownership",
        evidence:
          "Governance-first approach: definitions, owners, controls, and feedback loops — so teams stop debating what’s true and start executing."
      },
      {
        requirement: "AI governance / audit readiness",
        evidence:
          "Focus on audit-ready evidence: risk-control mapping, traceability, monitoring, and documented decision-making aligned to frameworks (EU AI Act / AI Verify / NIST-style thinking where applicable)."
      }
    ],
    gaps: [
      {
        area: "Deep consumer mobile / growth ownership",
        note:
          "My background is enterprise transformation and governance, not consumer growth experimentation or mobile-first product leadership."
      }
    ],
    recommendation:
      "If you need someone to turn messy reality into a governed, auditable, and scalable operating model (and set a foundation for trustworthy AI), I’ll be useful quickly."
  },

  weak: {
    verdict: "weak" as const,
    title: "Honest Assessment — Likely Not the Best Fit",
    summary: "Here’s why I might not be the right choice for this specific role:",
    mismatches: [
      {
        requirement: "Hands-on production ML engineering",
        reality:
          "My strengths are governance, audit readiness, and enterprise delivery. If you need someone primarily building and deploying ML systems daily, you may want a dedicated ML engineer/MLOps specialist."
      },
      {
        requirement: "Mobile-first consumer product leadership",
        reality:
          "I haven’t owned consumer mobile product roadmaps or growth experiments end-to-end."
      },
      {
        requirement: "Pure research / model training leadership",
        reality:
          "My value is in controls, risk, and operational governance rather than research leadership for training foundation models."
      }
    ],
    whatTransfers:
      "Program execution, governance design, evidence discipline, and cross-functional alignment transfer strongly across industries.",
    recommendation:
      "If the role is primarily product-growth or hands-on ML engineering, I may not be your best hire. If it’s transformation + governance + audit readiness, that’s my lane."
  }
};
