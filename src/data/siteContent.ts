import {
  AboutusBg,
  DigitalMarketing,
  Empower1a,
  Empower1b,
  Empower1c,
  Empower2a,
  Empower2b,
  ExceptionalLearn1,
  FinancialAcc,
  MonksHubLogo,
  ProjectManagement,
  TakeYourExpertiseLeft1,
  TakeYourExpertiseLeft2,
  Teach1,
  UIUXDesign,
  UxResearch,
  development,
  heroLeft,
  heroRight,
  insight1,
  insight2,
  insight3,
  insight4,
  insight5,
  insight6,
  marketing,
  mentor1,
  mentor2,
  mentor3,
  mentor4,
  mentor5,
  mentor6,
} from "../assets/images";

export const brand = {
  name: "MonksHub",
  logo: MonksHubLogo,
  promise: "Mentor-led courses that turn career goals into shipped work.",
  email: "hello@monkshub.studio",
  phone: "+1 (415) 555-0198",
  location: "Remote-first learning studio",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "Insights", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Build a portfolio employers can actually trust.",
  subhead:
    "MonksHub pairs focused online courses with weekly mentor reviews, live studios, and career-ready projects for designers, developers, marketers, and operators.",
  images: [heroLeft, heroRight, TakeYourExpertiseLeft1],
  proof: ["Live cohorts", "Mentor critique", "Portfolio briefs"],
};

export const metrics = [
  { value: "12.4K", label: "Learners trained", tone: "border-l-emerald-500" },
  { value: "91%", label: "Completion rate", tone: "border-l-blue-500" },
  { value: "38", label: "Hiring partners", tone: "border-l-violet-500" },
  { value: "4.8/5", label: "Mentor rating", tone: "border-l-amber-500" },
];

export type Program = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  duration: string;
  lessons: number;
  price: string;
  level: string;
  mentor: string;
  outcome: string;
  tags: string[];
  accent: string;
};

export const programs: Program[] = [
  {
    id: "frontend-accelerator",
    title: "Frontend Engineering Accelerator",
    category: "Development",
    summary:
      "Ship production-grade interfaces with React, TypeScript, Tailwind, API integration, testing, and deploy-ready polish.",
    image: development,
    duration: "10 weeks",
    lessons: 42,
    price: "$420",
    level: "Intermediate",
    mentor: "Noah Carter",
    outcome: "A deployed SaaS dashboard and case study",
    tags: ["React", "TypeScript", "Testing"],
    accent: "border-emerald-200",
  },
  {
    id: "product-design",
    title: "Product Design Intensive",
    category: "UI/UX Design",
    summary:
      "Research, map flows, prototype in Figma, and defend design decisions through weekly studio critiques.",
    image: UIUXDesign,
    duration: "8 weeks",
    lessons: 35,
    price: "$360",
    level: "Beginner friendly",
    mentor: "Ayaan Rahimi",
    outcome: "A polished mobile and web product case study",
    tags: ["Figma", "Research", "Systems"],
    accent: "border-rose-200",
  },
  {
    id: "growth-marketing",
    title: "Growth Marketing Lab",
    category: "Marketing",
    summary:
      "Plan measurable campaigns, write high-converting landing pages, and build reports that teams can act on.",
    image: marketing,
    duration: "6 weeks",
    lessons: 28,
    price: "$310",
    level: "All levels",
    mentor: "Leo Moreno",
    outcome: "A complete acquisition campaign plan",
    tags: ["SEO", "Ads", "Analytics"],
    accent: "border-amber-200",
  },
  {
    id: "data-finance",
    title: "Data and Finance Analytics",
    category: "Analytics",
    summary:
      "Turn messy spreadsheets into financial models, dashboards, and clear business recommendations.",
    image: FinancialAcc,
    duration: "7 weeks",
    lessons: 31,
    price: "$330",
    level: "Beginner friendly",
    mentor: "Haris Patel",
    outcome: "A finance dashboard and board-ready report",
    tags: ["Excel", "SQL", "Forecasting"],
    accent: "border-indigo-200",
  },
  {
    id: "product-management",
    title: "Product Management Sprint",
    category: "Product",
    summary:
      "Learn discovery, prioritization, roadmapping, stakeholder updates, and product launch rituals.",
    image: ProjectManagement,
    duration: "5 weeks",
    lessons: 24,
    price: "$295",
    level: "Career switchers",
    mentor: "Daniel Brooks",
    outcome: "A product strategy memo and launch plan",
    tags: ["Discovery", "Roadmaps", "Launch"],
    accent: "border-slate-200",
  },
  {
    id: "ai-workflows",
    title: "AI Workflow Systems",
    category: "AI Skills",
    summary:
      "Design practical AI workflows for research, content, customer support, and internal operations.",
    image: UxResearch,
    duration: "4 weeks",
    lessons: 18,
    price: "$240",
    level: "Working professionals",
    mentor: "Omar Bennett",
    outcome: "A documented workflow playbook",
    tags: ["Prompting", "Automation", "Ops"],
    accent: "border-emerald-200",
  },
];

export type Mentor = {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  location: string;
  students: string;
  rating: string;
  skills: string[];
  bio: string;
  credentials: string[];
  approach: string;
};

export const mentors: Mentor[] = [
  {
    id: "ayaan-rahimi",
    name: "Ayaan Rahimi",
    role: "Principal Product Designer",
    company: "Studio North",
    image: mentor1,
    location: "Vancouver, Canada",
    students: "1,860",
    rating: "4.9",
    skills: ["Figma", "Design systems", "UX research"],
    bio: "Ayaan helps early and mid-career designers turn raw ideas into sharp product stories. His reviews focus on clarity, hierarchy, and explaining the why behind every screen.",
    credentials: [
      "12 years in product design",
      "Former design lead for two B2B SaaS teams",
      "Portfolio reviewer for remote design hiring panels",
    ],
    approach:
      "Calm critique, practical rewrites, and weekly checkpoints that make the work stronger without overwhelming the learner.",
  },
  {
    id: "noah-carter",
    name: "Noah Carter",
    role: "Senior Frontend Engineer",
    company: "Riverline Apps",
    image: mentor2,
    location: "Austin, USA",
    students: "2,340",
    rating: "4.8",
    skills: ["React", "TypeScript", "Testing"],
    bio: "Noah mentors developers who want to move past tutorials and build maintainable frontend systems that behave well in production.",
    credentials: [
      "10 years building React products",
      "Led frontend quality programs at two startups",
      "Specialist in design-system implementation",
    ],
    approach:
      "Code review first, then refactor. Learners leave with better judgment, not just working screens.",
  },
  {
    id: "leo-moreno",
    name: "Leo Moreno",
    role: "Growth Marketing Strategist",
    company: "Bright Metric",
    image: mentor3,
    location: "Madrid, Spain",
    students: "1,420",
    rating: "4.7",
    skills: ["SEO", "Paid media", "Reporting"],
    bio: "Leo teaches marketers to connect story, experiment design, and analytics so campaigns become measurable business systems.",
    credentials: [
      "Managed $8M in paid acquisition spend",
      "Advisor to creator-led education brands",
      "Certified analytics implementation partner",
    ],
    approach:
      "Every lesson ends with a useful artifact: an audit, a brief, a dashboard, or copy you can ship.",
  },
  {
    id: "daniel-brooks",
    name: "Daniel Brooks",
    role: "Product Lead",
    company: "Harbor Stack",
    image: mentor4,
    location: "London, UK",
    students: "1,130",
    rating: "4.8",
    skills: ["Roadmaps", "Discovery", "Stakeholders"],
    bio: "Daniel helps aspiring PMs learn the actual operating habits of product teams: clear tradeoffs, crisp updates, and decisions that survive reality.",
    credentials: [
      "Launched products across fintech and education",
      "Certified Scrum Product Owner",
      "Hiring mentor for associate PM cohorts",
    ],
    approach:
      "Learners practice through role-play, product memos, and critique sessions that mirror real team pressure.",
  },
  {
    id: "haris-patel",
    name: "Haris Patel",
    role: "Finance Analytics Consultant",
    company: "Ledger Field",
    image: mentor5,
    location: "Dubai, UAE",
    students: "980",
    rating: "4.9",
    skills: ["Forecasting", "SQL", "Dashboards"],
    bio: "Haris turns finance and analytics training into practical decision support. His learners build models that explain risk, growth, and next steps.",
    credentials: [
      "Chartered management accountant",
      "Built FP&A systems for remote-first teams",
      "Power BI and SQL curriculum author",
    ],
    approach:
      "Structured models, plain-language analysis, and careful review of every assumption.",
  },
  {
    id: "omar-bennett",
    name: "Omar Bennett",
    role: "AI Operations Architect",
    company: "Northstar Systems",
    image: mentor6,
    location: "Toronto, Canada",
    students: "1,210",
    rating: "4.8",
    skills: ["AI workflows", "Automation", "Ops design"],
    bio: "Omar helps teams adopt AI in grounded ways: repeatable workflows, clear review gates, and practical measurement.",
    credentials: [
      "Built internal AI systems for support and research teams",
      "Operations advisor for bootstrapped SaaS companies",
      "Author of workflow governance playbooks",
    ],
    approach:
      "No vague AI hype. Every workflow has owners, inputs, outputs, and a quality bar.",
  },
];

export const learningPath = [
  {
    title: "Map your target role",
    body: "Choose the course path that matches your current skill level and the type of role you want next.",
  },
  {
    title: "Build in weekly studios",
    body: "Complete focused lessons, then apply them during guided build sessions with peers and mentors.",
  },
  {
    title: "Get human review",
    body: "Submit projects for critique on usability, code quality, strategy, storytelling, and presentation.",
  },
  {
    title: "Ship your proof",
    body: "Leave with portfolio assets, interview talking points, and a clear next-step plan.",
  },
];

export const outcomes = [
  {
    title: "Portfolio-ready projects",
    copy: "Every course is built around realistic briefs, stakeholder constraints, and public-ready deliverables.",
    image: TakeYourExpertiseLeft2,
  },
  {
    title: "Mentor accountability",
    copy: "Weekly checkpoints keep learners moving and make feedback part of the habit, not a final surprise.",
    image: ExceptionalLearn1,
  },
  {
    title: "Career operating system",
    copy: "Resume reviews, interview stories, and practical job-search routines are built into the learning flow.",
    image: Teach1,
  },
];

export const testimonials = [
  {
    name: "Mariam Safi",
    role: "Frontend Developer",
    text: "I had projects before MonksHub, but I could not explain them well. The mentor reviews helped me turn my dashboard into a real interview story.",
  },
  {
    name: "Chris Mendoza",
    role: "Product Designer",
    text: "The course felt like a studio, not a video library. Every week I had better screens, better rationale, and more confidence.",
  },
  {
    name: "Amina Farooq",
    role: "Growth Marketer",
    text: "I left with a campaign plan I could show at work the next day. The feedback was specific and immediately useful.",
  },
];

export const insights = [
  {
    title: "How to turn a course project into a hiring case study",
    category: "Career Strategy",
    author: "Ayaan Rahimi",
    readTime: "7 min read",
    image: insight1,
    summary:
      "A practical structure for explaining context, constraints, decisions, and measurable outcomes.",
  },
  {
    title: "The frontend portfolio checklist we use in mentor reviews",
    category: "Development",
    author: "Noah Carter",
    readTime: "9 min read",
    image: insight2,
    summary:
      "What reviewers look for before they trust a React project as production-ready proof.",
  },
  {
    title: "A simpler way to plan your first paid campaign",
    category: "Marketing",
    author: "Leo Moreno",
    readTime: "6 min read",
    image: insight3,
    summary:
      "Build a clear growth hypothesis before spending budget or creating ten disconnected ads.",
  },
  {
    title: "What junior PMs should practice before interviews",
    category: "Product",
    author: "Daniel Brooks",
    readTime: "8 min read",
    image: insight4,
    summary:
      "The small operating habits that make product candidates sound grounded and useful.",
  },
  {
    title: "Financial dashboards that executives actually read",
    category: "Analytics",
    author: "Haris Patel",
    readTime: "5 min read",
    image: insight5,
    summary:
      "Keep the signal high with fewer charts, sharper assumptions, and clear decision points.",
  },
  {
    title: "How to design AI workflows your team will keep using",
    category: "AI Skills",
    author: "Omar Bennett",
    readTime: "10 min read",
    image: insight6,
    summary:
      "A workflow canvas for defining inputs, review gates, handoffs, and measurable quality.",
  },
];

export const faqs = [
  {
    question: "Are MonksHub courses self-paced or live?",
    answer:
      "Each program combines self-paced lessons with scheduled mentor studios. You can learn flexibly, but the reviews and build sessions keep momentum high.",
  },
  {
    question: "Do I need experience before joining?",
    answer:
      "Some courses are beginner friendly and others are designed for working professionals. Every course page shows the recommended level before you enroll.",
  },
  {
    question: "What do I finish with?",
    answer:
      "You finish with practical artifacts such as a portfolio case study, shipped app, campaign plan, dashboard, product memo, or workflow playbook.",
  },
  {
    question: "How does mentor feedback work?",
    answer:
      "Learners submit work each week and receive async comments plus live critique during studio sessions. Feedback focuses on decisions, not just surface polish.",
  },
  {
    question: "Can a team enroll together?",
    answer:
      "Yes. MonksHub supports small team cohorts with shared dashboards, private mentor sessions, and custom project briefs.",
  },
];

export const contactTopics = [
  "Choosing the right course",
  "Team training",
  "Mentor applications",
  "Partnerships",
];

export const gallery = {
  about: AboutusBg,
  marketing: DigitalMarketing,
  cover: Empower1a,
  workshop: Empower1b,
  design: Empower1c,
  analytics: Empower2a,
  systems: Empower2b,
};
