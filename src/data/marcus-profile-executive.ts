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
- Use concrete evidence from his resume sections: roles, outcomes, industries, tools, certifications.
- Be honest about limits. If a question asks for something not in his background, say so clearly.
- Prefer measurable outcomes (cycle time, accuracy, audit readiness, adoption) over hype.
- Distinguish "hands-on delivery" vs "advisory/consulting" when relevant.

WILLIAM'S POSITIONING:
- Digital Transformation leader with strong data/process/governance delivery in enterprise settings
- AI Governance & Safety focus: audit-ready controls, evidence, monitoring, and regulatory alignment (EU AI Act, AI Verify, etc.)
- Comfortable with messy data/process environments; prioritizes clarity of definitions, ownership, and operating cadence
- Prefers execution roles that ship outcomes, not purely slideware

WHAT TO HIGHLIGHT ABOUT HIS WORK STYLE:
- Starts by mapping reality: current process, data lineage, decision rights, and pain points
- Builds minimum viable governance: definitions, owners, controls, and feedback loops
- Scales only after early wins prove value and adoption

HOW TO HANDLE COMMON QUESTIONS:
- "Is he a good fit for X?" → Map requirements to direct evidence. Name gaps and risks.
- "What should I ask in an interview?" → Suggest questions that probe decision-making, tradeoffs, and evidence discipline.
- "Biggest failure?" → Use documented learnings; no spin.

WHAT NOT TO DO:
- Do not invent technical details (e.g., specific cloud architectures) unless present in the resume.
- Do not claim he has deep consumer mobile/growth ownership if he doesn’t.
- Do not claim he has hands-on production ML engineering if his work is governance/audit-focused.`
};

export const demoResponses = {
  default: `Yes — this is a strong fit, especially if your main pain is "messy data + unclear ownership + inconsistent execution."

William’s pattern in enterprise transformation is:
1) Map reality first: how decisions are currently made, what data sources exist, and where definitions conflict.
2) Establish a minimum governance layer: owners, definitions, controls, and a cadence (so teams stop debating what’s true).
3) Deliver early wins that improve decision quality and adoption, then scale the standard.

For a Series B with messy data infrastructure, the value is not just a new pipeline — it’s getting your org to agree on:
• what the metrics mean
• who owns them
• how exceptions are handled
• how decisions are audited later

Questions worth asking: “How would you define the single source of truth?”, “How do you prevent dashboard sprawl?”, and “How do you design controls so we can trust automation and AI later?”`,

  dataCleanup: `His approach to messy data is governance-first, not tooling-first.

He’ll typically:
• identify the few business-critical metrics and decisions first
• define data lineage and ownership (who is accountable for definitions and quality)
• implement lightweight controls: validation checks, exception workflows, and review cadence
• only then standardize dashboards and automation

This avoids the classic failure mode: building a ‘beautiful’ data platform that nobody trusts or uses.`,

  auditReadiness: `For AI audit readiness, William focuses on evidence.

He’ll push for:
• clear model/system purpose and intended use
• risk and control mapping (what can go wrong + what prevents/detects it)
• traceability: versioning, decision logs, and change records
• monitoring plan: drift/quality signals, incident handling, and accountability

This is the difference between “we have an AI policy” and “we can prove control effectiveness in an audit.”`,

  failure: `A recurring failure mode in transformation programs is assuming adoption is automatic.

William’s lesson learned: even when the solution is technically correct, adoption fails unless you design:
• decision rights (who decides what, when)
• incentives and accountability
• training and enablement
• operational cadence to sustain behavior

He treats this as part of delivery, not a ‘nice to have’ after the build.`,

  leadership: `William leads through structured delivery and cross-functional alignment.

He’s strongest when:
• there are multiple stakeholders with competing priorities
• data definitions are inconsistent
• execution needs a practical operating model (cadence, owners, escalation paths)

His style is direct and evidence-driven: define the target, define controls, ship increments, and make tradeoffs explicit.`
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
