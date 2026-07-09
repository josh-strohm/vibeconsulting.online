export const siteConfig = {
  name: "VibeConsulting",
  domain: "vibeconsulting.online",
  tagline: "AI help that gets used",
  description:
    "AI strategy, automation, and training for small and mid-size businesses.",
  url: "https://vibeconsulting.online",
  email: "hi@vibeconsulting.online",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
] as const;

export const offers = [
  {
    id: "audit",
    title: "AI Readiness Audit",
    eyebrow: "Start here",
    summary:
      "A short review of where AI can help your business, and where it is not worth the effort yet.",
    bestFor: "When you want a clear first step before spending more time or money.",
    deliverables: [
      "Ranked list of opportunities",
      "A few quick wins for this quarter",
      "Notes on risks and readiness",
      "A plain-language summary you can share with your team",
    ],
  },
  {
    id: "roadmap",
    title: "AI Strategy & Roadmap",
    eyebrow: "Get aligned",
    summary:
      "A 90-day plan so your team knows what to do next, in what order, and why.",
    bestFor: "When leadership agrees AI matters but not what to do first.",
    deliverables: [
      "Priorities for ops, sales, support, or product",
      "90-day plan with owners",
      "Build vs buy notes on key tools",
      "Simple metrics to track progress",
    ],
  },
  {
    id: "build",
    title: "Build & Automate",
    eyebrow: "Get it running",
    summary:
      "We build the agents, workflows, and connections into tools you already use.",
    bestFor: "When you are ready to automate real work, not run another demo.",
    deliverables: [
      "Working agents and workflows",
      "Automation for repeat processes",
      "Connections to your current tools",
      "Docs so your team can maintain what we build",
    ],
  },
  {
    id: "enablement",
    title: "Team Training",
    eyebrow: "Keep it going",
    summary:
      "Hands-on training and simple playbooks so the tools do not sit unused after kickoff.",
    bestFor: "When people need practice, not another unused software seat.",
    deliverables: [
      "Training by role",
      "Short playbooks for day-to-day use",
      "Basic rules for data and brand voice",
      "Follow-up time to answer questions",
    ],
  },
] as const;

export const outcomes = [
  {
    title: "Less busywork",
    body: "Fewer copy-paste tasks in ops, support, and admin so people focus on real work.",
  },
  {
    title: "Faster replies",
    body: "Email and tickets move quicker with help that still sounds like your team.",
  },
  {
    title: "A real plan",
    body: "Know what to automate first, what to skip, and why.",
  },
  {
    title: "Your team owns it",
    body: "You get working systems and the notes to run them without us.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "See how work actually moves: tools, bottlenecks, and easy wins.",
  },
  {
    step: "02",
    title: "Design",
    body: "Define the workflow, how you will measure it, and the smallest useful version.",
  },
  {
    step: "03",
    title: "Build",
    body: "Put agents and automations into your real stack.",
  },
  {
    step: "04",
    title: "Train",
    body: "Teach the team, leave the playbook, hand it off.",
  },
] as const;

export const faqs = [
  {
    q: "We’re not a tech company. Is this for us?",
    a: "Yes. Most clients are regular businesses: services, ops teams, product companies without a big AI staff. We keep it practical.",
  },
  {
    q: "Do we need a data team first?",
    a: "No. We start with the tools and processes you already have. If something is blocking progress, we say so early.",
  },
  {
    q: "How is this different from buying another AI tool?",
    a: "Buying tools is easy. Getting them into daily work is the hard part. We help with the plan, the build, and the training.",
  },
  {
    q: "What does a typical project look like?",
    a: "Some people start with an audit, then a plan, then a build. Others jump straight into one automation. We will suggest the lightest useful start.",
  },
  {
    q: "Will you work in our existing tools?",
    a: "Usually yes. CRM, Slack, email, docs, helpdesk, project tools. We prefer to meet work where it already happens.",
  },
  {
    q: "How do we get started?",
    a: "Book a call on the calendar page, or send a short note on the contact page. We will reply with next steps.",
  },
] as const;

export const values = [
  {
    title: "Say it plainly",
    body: "If we cannot explain it simply, we redo the explanation.",
  },
  {
    title: "Useful over shiny",
    body: "We pick work that saves time or makes money, not demos for the board.",
  },
  {
    title: "Training is part of the job",
    body: "A tool nobody uses is a waste. Playbooks and practice come with the build.",
  },
  {
    title: "No fake claims",
    body: "No made-up metrics. You get honest tradeoffs and finished work.",
  },
] as const;
