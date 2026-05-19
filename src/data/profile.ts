// Profile data - core profile data used by AI and UI

export const profileData = {
  name: "William Hartono",
  title: "Digital Transformation & AI Audit Professional",
  subtitle:
    "AI Governance & Safety | Certified AI Auditor (FHCA) | EU AI Act | Bridging Enterprise Digital Transformation & AI Risk",
  location: "Singapore",
  status: "Open to collaborations on digital transformation / AI Audit / Safety / Governance projects",

  // Keep this list aligned to your real portfolio (high-signal clients)
  companies: ["Urielle-AI", "Seagate", "KPMG", "Orica", "L’Oréal (Travel Retail)", "Johnson & Johnson"],

  summary: `I work at the intersection of enterprise digital transformation and AI risk/governance.
My strength is turning complex, cross-functional programs into practical delivery: data + process + controls.
In AI governance, I focus on audit-ready evidence: what was decided, why, how it is monitored, and where the risks are.`,

  experience: [
   {
  company: "Urielle-AI",
  role: "AI Safety - Governance - Audit Lead",
  period: "Dec 2025 – Present",
  highlights: [
    "Built AI Governance & Safety consultancy focused on EU AI Act readiness",
    "Designed AI audit frameworks covering model risk, data lineage, and compliance",
    "Developed AI risk scoring methodology for enterprise AI systems",
    "Publishing AI Safety & Audit thought leadership and enterprise tooling"
  ],
    aiContext: {
    situation: "Organizations adopting AI lacked structured governance, audit readiness, and EU AI Act alignment.",
    approach: "Translate regulatory and safety requirements into practical engineering and governance controls.",
    technicalWork: "AI risk assessment frameworks, audit checklists, model documentation standards, system traceability, and safety evaluation workflows.",
    lessonsLearned: "AI governance succeeds when risk, engineering, and business teams share a common framework — not when compliance is treated as a checklist."
  },
  },


    {
      company: "Seagate",
      role: "Digital Factory Planning Lead",
      period: "Dec 2020 - Present",
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
      company: "KPMG",
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
// --- AI Resume: Sharp Q&A (for the "Ask AI about William" experience) ---
// Use `aiResumeSuggestedQuestions` for quick-prompt buttons and `aiResumeQnA` for curated answers.

export const aiResumeSuggestedQuestions = [
  "Is he technical — or just another AI governance theorist?",
  "Can he handle messy, real-world enterprise AI — not just clean demos?",
  "Does he actually understand the EU AI Act — or just quote it?",
  "How does he think about AI failure?",
  "What makes him different from traditional AI consultants?",
  "Is he more engineering or more governance?",
  "Can he lead, or does he only advise?",
  "What kind of companies actually need him?",
  "Is he focused on compliance or competitive advantage?",
  "Why is William profile relevant for Responsible AI?",
  "Does he have real AI governance experience or only certifications?",
  "How does his Seagate experience relate to enterprise AI governance?",
  "Can he operationalize the EU AI Act in real systems?",
  "What makes his profile different from traditional SAP consultants?",
  "How does he approach AI risk and audit readiness?",
  "What evidence shows he can handle regulated industries?",
  "Can he bridge executives, governance, and engineering teams?",
  "What are his strongest Responsible AI capabilities?",
  "What are his biggest gaps?",
  "How does he think about agentic AI risks?",
  "Why would a manufacturing company hire him for AI governance?",
  "What makes Urielle-AI different from a consulting slide deck?",
  "How does he translate AI governance into operational controls?",
  "How does he handle messy enterprise data environments?",
  "What kind of AI governance problems is he strongest at solving?",
  "How credible is his AI audit background?",
  "Can he work hands-on or only at strategy level?",
  "How does he think about AI failure modes?",
  "Would he fit better in consulting, enterprise, or governance office?"
];

export const aiResumeQnA = [
  {
    q: "Is he technical — or just another AI governance theorist?",
    a: `He builds the systems he governs.

He has deployed AI Verify on AWS to evaluate models for fairness/transparency, built GenAI security workflows, and shipped applied ML work (including predictive modeling experiments).

His governance is grounded in implementation reality — not policy abstraction.
He understands what breaks because he has built what can break.`
  },
  {
    q: "Can he handle messy, real-world enterprise AI — not just clean demos?",
    a: `Yes — his core lane is enterprise complexity.

He has led large-scale transformation across multi-country operations and high-compliance environments (manufacturing, supply chain, pharma).

He doesn’t design AI for slides.
He designs AI for operating environments: owners, definitions, controls, cadence, and traceability.`
  },
  {
    q: "Does he actually understand the EU AI Act — or just quote it?",
    a: `He operationalizes it.

He translates risk tiers into control architecture, validation workflows, and governance decision forums:
• classify the system and context
• map controls (transparency, oversight, data integrity)
• run evaluation + documentation workflows (audit-ready evidence)
• embed monitoring + decision rights into the operating model

Compliance is not paperwork.
It’s architecture.`
  },
  {
    q: "How does he think about AI failure?",
    a: `Most teams audit components.
He audits interactions.

He focuses on real-world failure modes: system-to-system coupling, misuse scenarios, adversarial pressure, and governance blind spots.

AI rarely fails because of one bug.
It fails because “safe parts” combine into unsafe behavior at scale.`
  },
  {
    q: "What makes him different from traditional AI consultants?",
    a: `Traditional consultants optimize for speed.
William optimizes for survivability.

He designs AI programs that can withstand:
• regulatory scrutiny
• audit evidence demands
• operational drift
• stakeholder misalignment

He builds repeatable delivery systems that turn pilots into trusted, production-ready capabilities — with controls, not vibes.`
  },
  {
    q: "Is he more engineering or more governance?",
    a: `He’s the bridge.

He understands MLOps lifecycle control, model evaluation, GenAI risks (including prompt/misuse considerations), and cloud deployment foundations.

But his edge is translating technical risk into executive accountability: decision forums, owners, escalation paths, and audit-ready artifacts.`
  },
  {
    q: "Can he lead, or does he only advise?",
    a: `He leads execution.

He has run cross-functional, multi-region transformation delivery and governance support — aligning IT, operations, and compliance teams to ship outcomes.

His leadership style is evidence-first: clarify what “true” means, assign owners, build controls, deliver quick wins, then scale the operating model.`
  },
  {
    q: "What kind of companies actually need him?",
    a: `Organizations that are past the hype stage.

He’s most valuable when AI moves from experimentation → production, and leadership starts asking:
“Are we exposed?”

Enterprise GenAI rollout, manufacturing decision systems, high-compliance workflows, and any organization preparing for EU AI Act / audit scrutiny are strong fits.`
  },
  {
    q: "Is he focused on compliance or competitive advantage?",
    a: `Both — because governance done right is strategic insulation.

He helps organizations build AI that regulators trust, customers accept, and leadership can defend.

The goal isn’t to slow AI down.
It’s to make scaling safe, controlled, and defensible.`
    },
    {
    q: "Why is William profile relevant for Responsible AI?",
    a: `His profile combines enterprise-scale transformation delivery with AI governance and audit readiness.

Unlike governance candidates who come mainly from policy backgrounds, he has spent 23+ years operating inside complex manufacturing, supply chain, pharma, mining, and regulated enterprise environments across 55 countries.

His experience aligns strongly with Responsible AI direction because he focuses on operational governance:
• AI risk controls
• deployment oversight
• audit-ready evidence
• traceability
• human oversight
• AI operating models
• cross-functional governance

He also brings practical AI governance implementation:
• AI Verify deployment on AWS
• GenAI security workflows
• Agentic AI oversight exploration
• STRIDE AI/ML threat modelling
• Seagate Copilot governance

His strength is translating governance principles into operational systems that can survive audit, scale, and real-world enterprise complexity.`
  },

  {
    q: "Does he have real AI governance experience or only certifications?",
    a: `Yes — there is implementation evidence beyond certifications.

Examples include:
• deploying AI Verify on AWS EC2 for Responsible AI evaluation
• building multi-agent GenAI security scanning workflows
• exploring AutoGPT-based agentic governance controls
• applying STRIDE threat modelling to AI/ML systems
• governing Seagate Copilot Hub usage and oversight
• designing AI governance frameworks aligned to EU AI Act and NIST AI RMF

His profile is strongest where governance meets operational deployment:
how AI systems are monitored, controlled, documented, and made audit-ready in enterprise environments.`
  },

  {
    q: "How does his Seagate experience relate to enterprise AI governance?",
    a: `At Seagate, he worked inside a large-scale Factory Digitalization & Intelligence (FDI) environment involving AI/ML governance, operational systems, and enterprise-scale manufacturing operations.

Relevant governance experience includes:
• AI/ML deployment governance
• FDI maturity modelling
• model deployment traceability
• structured risk tracking
• GenAI assistant governance
• cross-functional AI operating alignment

He also governed Seagate Copilot Hub adoption by embedding oversight controls and governance into enterprise AI usage.

This is important because Responsible AI at scale is not only about models — it is about operational governance inside real production environments.`
  },

  {
    q: "Can he operationalize the EU AI Act in real systems?",
    a: `Yes — his approach is operational rather than theoretical.

He focuses on translating regulation into:
• governance workflows
• control architecture
• monitoring processes
• documentation standards
• audit-ready evidence
• human oversight models
• deployment traceability

Examples include:
• AI Verify assessments
• AI risk scoring methodologies
• governance operating models
• AI audit readiness toolkits
• adversarial risk evaluation
• AI deployment governance

His FHCA certification under the EU AI Act is directly aligned with independent AI system audit and operational compliance thinking.`
  },

  {
    q: "What makes his profile different from traditional SAP consultants?",
    a: `His background evolved beyond ERP delivery into governance-oriented enterprise transformation.

Traditional SAP profiles often focus on implementation delivery.
William's profile combines:
• enterprise operating models
• AI governance
• audit readiness
• risk-based controls
• AI oversight
• cross-functional governance leadership

He uses transformation experience as the foundation for trustworthy AI deployment:
data integrity,
ownership,
traceability,
decision rights,
and operational accountability.

That combination is uncommon because most governance professionals lack deep enterprise transformation exposure, while many ERP leaders lack AI governance depth.`
  },

  {
    q: "How does he approach AI risk and audit readiness?",
    a: `He approaches AI governance as an operational control problem.

Typical focus areas include:
• intended use definition
• system boundaries
• model risk identification
• control mapping
• deployment traceability
• monitoring and escalation
• evidence generation
• human oversight

He emphasizes audit-ready governance:
what was decided,
why it was approved,
what controls existed,
how monitoring works,
and how incidents are escalated.

His philosophy is that AI governance should survive operational reality — not just pass documentation review.`
  },

  {
    q: "What evidence shows he can handle regulated industries?",
    a: `He has worked across pharmaceutical, mining, explosives, manufacturing, food, and logistics environments where compliance failures carry operational and human-safety consequences.

Examples include:
• J&J drug and narcotics track & trace
• PMDA regulatory alignment in Japan
• GxP and CSV exposure
• EH&S governance in mining and explosives
• audit-grade data integrity across 55 countries at Orica
• manufacturing governance at Seagate

These environments require strong governance discipline, operational controls, and traceability — directly relevant to Responsible AI governance.`
  },

  {
    q: "Can he bridge executives, governance, and engineering teams?",
    a: `Yes — that is one of his strongest differentiators.

His career required alignment between:
• operations
• engineering
• IT
• compliance
• manufacturing
• business leadership
• external stakeholders

He translates technical AI risk into operational and executive language:
ownership,
decision rights,
controls,
risk exposure,
and governance accountability.

His AI-Thara initiative also focuses specifically on making AI governance understandable to boards and non-technical stakeholders.`
  },

  {
    q: "What are his strongest Responsible AI capabilities?",
    a: `His strongest capabilities are:
• operational AI governance
• AI audit readiness
• enterprise AI operating models
• AI deployment traceability
• cross-functional governance
• regulated-industry transformation
• AI risk controls
• adversarial risk thinking
• AI oversight frameworks

He is particularly strong where AI systems move from experimentation into production environments that require governance, monitoring, and accountability.`
  },

  {
    q: "What are his biggest gaps?",
    a: `His strengths are governance, enterprise transformation, and operational AI oversight.

The main gaps are:
• not a frontier-model researcher
• not a deep full-time ML platform engineer
• limited consumer mobile/growth product background
• less focused on pure data science experimentation

His value is highest when organizations need:
AI governance,
cross-functional alignment,
risk management,
operational controls,
and enterprise-scale AI adoption discipline.`
  },

  {
    q: "How does he think about agentic AI risks?",
    a: `He approaches agentic AI from a control and oversight perspective.

His focus includes:
• human oversight
• escalation paths
• bounded autonomy
• auditability
• traceability
• misuse prevention
• reliability monitoring

He has explored AutoGPT-based workflows specifically to understand operational governance challenges in autonomous systems.

His view is that agentic AI governance is fundamentally about controlling decision authority, monitoring behavior, and maintaining accountability boundaries.`
  },

  {
    q: "Why would a manufacturing company hire him for AI governance?",
    a: `Because he understands both manufacturing operations and governance discipline.

He has worked inside:
• smart factory environments
• supply chain systems
• industrial planning
• manufacturing transformation
• operational governance programs

Manufacturing AI introduces operational and safety risks:
forecasting,
planning,
automation,
quality,
and industrial decision-making.

His background allows him to connect AI governance with operational realities rather than treating governance as a standalone compliance exercise.`
  },

  {
    q: "What makes Urielle-AI different from a consulting slide deck?",
    a: `Urielle-AI is positioned around operational governance and runtime assurance rather than policy presentation.

The focus is:
• AI governance implementation
• runtime verification thinking
• governance evidence
• audit readiness
• operational oversight
• AI failure analysis
• adversarial AI perspectives

It is grounded in practical enterprise deployment concerns:
how AI systems behave,
how governance is enforced,
and how organizations prove accountability under scrutiny.`
  },

  {
    q: "How does he translate AI governance into operational controls?",
    a: `He translates governance into:
• decision rights
• approval workflows
• monitoring routines
• deployment gates
• documentation standards
• escalation paths
• accountability structures
• audit evidence generation

His transformation background helps because he already understands how operational systems fail when ownership, controls, and definitions are unclear.

He applies the same discipline to AI systems.`
  },

  {
    q: "How does he handle messy enterprise data environments?",
    a: `This is one of his core strengths.

Across global transformation programs, he repeatedly worked in environments with:
• fragmented ownership
• inconsistent definitions
• poor traceability
• siloed systems
• conflicting stakeholder priorities

His approach is:
• define ownership
• establish single source of truth
• align governance
• create operational cadence
• enforce traceability
• scale only after adoption works

That experience is highly relevant because trustworthy AI depends heavily on trustworthy enterprise data foundations.`
  },

  {
    q: "What kind of AI governance problems is he strongest at solving?",
    a: `He is strongest at enterprise operational governance problems:
• AI deployment governance
• audit readiness
• AI operating models
• AI risk accountability
• regulated-industry AI adoption
• cross-functional governance alignment
• deployment traceability
• AI oversight structures

Especially where organizations need to move from AI experimentation into governed production deployment.`
  },

  {
    q: "How credible is his AI audit background?",
    a: `His profile combines formal audit credentials with operational transformation experience.

Relevant credentials include:
• FHCA — EU AI Act Auditor
• FIAAIS — Independent AI System Audit
• CISA — ISACA
• NIST AI RMF
• STRIDE AI/ML Threat Modelling

The important distinction is that his audit thinking is connected to operational systems, enterprise controls, and implementation realities — not only theoretical compliance interpretation.`
  },

  {
    q: "Can he work hands-on or only at strategy level?",
    a: `He can work at both levels.

Strategically:
• governance frameworks
• AI operating models
• executive alignment
• audit readiness

Hands-on:
• AI Verify deployment
• AWS-based AI experimentation
• GenAI security workflows
• agentic AI frameworks
• adversarial AI analysis
• threat modelling

His profile is strongest as a bridge between governance leadership and practical implementation.`
  },

  {
    q: "How does he think about AI failure modes?",
    a: `He focuses heavily on operational and systemic failure modes.

Examples include:
• adversarial misuse
• governance blind spots
• poor oversight
• unclear accountability
• data integrity failures
• deployment drift
• unsafe automation escalation

His perspective is that AI failures rarely come from one isolated technical bug.
They emerge when governance, ownership, controls, and operational realities become disconnected.`
  },

  {
    q: "Would he fit better in consulting, enterprise, or governance office?",
    a: `He can operate across all three, but his strongest fit is enterprise governance leadership or Responsible AI operating roles.

He is particularly valuable where organizations need:
• AI governance operationalization
• cross-functional alignment
• enterprise AI deployment oversight
• audit readiness
• regulator-facing governance
• transformation discipline

He is less suited to purely theoretical policy research or pure engineering-specialist roles.`

  }
];

export const marcusProfile = profileData;
