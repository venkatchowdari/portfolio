
// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no need to touch component code for text changes.
// ─────────────────────────────────────────────────────────────
 
// ─────────────────────────────────────────────────────────────
// Base-path helper: on GitHub Pages this site is served from
// /portfolio, not the domain root, so plain <a href="/x"> links to
// static files (resume.pdf, etc.) need the prefix. next/link and
// next/image handle this automatically — this helper is only for
// hrefs we write as raw strings. On Vercel, NEXT_PUBLIC_BASE_PATH
// is unset, so this is a no-op.
// ─────────────────────────────────────────────────────────────
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBasePath = (path: string) => `${BASE_PATH}${path}`;
 
export const profile = {
  name: "Venkat Chowdary Maridi",
  role: "CS Engineer — AI Systems & Backend",
  location: "Bangalore, India",
  email: "venkatchowdarymaridi72@gmail.com",
  phone: "+91 95505 23099",
  github: "https://github.com/venkatchowdari",
  linkedin: "https://www.linkedin.com/in/venkat-chowdari-maridi-6b763a26a",
  leetcode: "https://leetcode.com/venkatchowdari",
  resumeUrl: withBasePath("/resume.pdf"),
  tagline:
    "I build retrieval-augmented and backend systems — from RAG pipelines to token-efficient document processing — and ship them end-to-end with Docker.",
};
 
export const bootLines = [
  { prompt: "whoami", output: "venkat_chowdary — Computer Science and Engineer Graduate" },
  {
    prompt: "cat role.txt",
    output: "AI/ML systems · SDE · backend engineering · RAG pipelines ",
  },
  {
    prompt: "./status.sh",
    output: "open to Internship and full-time SDE / AI-ML roles · graduated Mar 2026",
  },
];
 
export const education = {
  school: "NRI Institute of Technology",
  degree: "B.Tech, Computer Science & Engineering",
  duration: "Oct 2022 – Mar 2026",
  gpa: "7.6 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Software Design",
    "DBMS",
  ],
};
 
export const skills = [
  {
    category: "languages",
    items: ["Python", "Java", "JavaScript", "SQL", "C"],
  },
  {
    category: "ai_ml",
    items: ["LangChain", "Groq API", "OpenAI API", "fastembed", "RAG design", "tiktoken"],
  },
  {
    category: "backend",
    items: ["FastAPI", "Spring Boot", "Celery", "Redis", "Next.js"],
  },
  {
    category: "data_infra",
    items: ["ChromaDB", "MySQL", "MongoDB", "Docker", "Docker Compose"],
  },
  {
    category: "tools",
    items: ["Git", "GitHub", "VS Code", "Linux", "Conventional Commits"],
  },
];
 
export type Project = {
  slug: string;
  name: string;
  command: string; // shown as the terminal-style eyebrow, e.g. `run rag-doc-qa`
  description: string;
  bullets: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};
 
export const projects: Project[] = [
  {
    slug: "rag-doc-qa",
    name: "RAG Document Q&A System",
    command: "run rag-doc-qa --pipeline ingest,embed,retrieve,generate",
    description:
      "An end-to-end retrieval-augmented generation system for querying your own documents, with a full ingestion and query pipeline running behind a FastAPI backend.",
    bullets: [
      "Built a complete ingestion → chunking → embedding → retrieval → generation pipeline using LangChain and ChromaDB.",
      "Served fast, low-latency generation via the Groq API (llama-3.1-8b-instant) with fastembed/BAAI embeddings.",
      "Shipped a Next.js frontend and containerized the full stack with Docker Compose for one-command local deployment.",
    ],
    stack: ["FastAPI", "LangChain", "ChromaDB", "Groq API", "fastembed", "Next.js", "Docker Compose"],
    github: "https://github.com/venkatchowdari/rag-doc-qa",
    featured: true,
  },
  {
    slug: "contextcrunch",
    name: "ContextCrunch",
    command: "run contextcrunch --convert file.docx --to markdown",
    description:
      "An open-source file-to-Markdown converter that cuts LLM token consumption on long documents — built and maintained as a real open-source project, not a solo script.",
    bullets: [
      "Designed an async conversion pipeline with FastAPI, Celery, and Redis, monitored via Flower.",
      "Set up full open-source infrastructure: MIT license, CONTRIBUTING.md, issue templates, and PR templates.",
      "Maintained with Conventional Commits and a Next.js frontend, fully containerized via Docker Compose.",
    ],
    stack: ["FastAPI", "Celery", "Redis", "Flower", "Next.js", "Docker Compose"],
    github: "https://github.com/venkatchowdari/contextcrunch",
    featured: true,
  },
  {
    slug: "easyai",
    name: "EasyAI",
    command: "run easyai --validate prompt.txt",
    description:
      "A prompt-validation platform that checks user prompts for safety and clarity before they reach a downstream LLM.",
    bullets: [
      "Built a Next.js frontend integrated with the OpenAI API through LangChain to classify and validate prompts.",
      "Deployed as a serverless app on Vercel for fast, global access.",
    ],
    stack: ["Next.js", "OpenAI API", "LangChain", "Vercel"],
    live: "https://easy-ai-xi.vercel.app",
    github: "https://github.com/venkatchowdari/EasyAI",
  },
  {
    slug: "hotel-booking",
    name: "Hotel Booking System",
    command: "run hotel-booking --module rooms,customers,billing",
    description:
      "A modular, OOP-based hotel management application for room inventory, bookings, and customer records.",
    bullets: [
      "Designed a modular Java OOP architecture separating rooms, bookings, and customer data.",
      "Integrated a MySQL persistence layer for reliable booking and customer storage.",
    ],
    stack: ["Java", "OOP", "MySQL"],
    github: "https://github.com/venkatchowdari/Hotel-Management-System",
  },
];
 
export const experience = [
  {
    role: "Generative AI Intern",
    org: "CodeGnan IT Institute",
    duration: "Mar 2024 – Jul 2024",
    points: [
      "Built generative AI prototypes with OpenAI and LLaMA APIs to improve document-based Q&A and summarization.",
      "Designed and iterated on prompts to improve contextual precision within RAG pipelines.",
      "Integrated Streamlit for fast, user-friendly deployment and testing.",
      "Profiled and tuned inference, reducing model latency by 15–20%.",
    ],
  },
];
 
export const nav = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];
 