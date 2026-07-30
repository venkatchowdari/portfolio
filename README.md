# Venkat Chowdary Maridi — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Design concept

The theme is grounded in the actual subject matter — RAG pipelines and backend
systems — instead of a generic hero. Two signature elements:

- **Terminal boot sequence** (`components/Terminal.tsx`) — a typed "boot log" in the hero.
- **Pipeline trace diagram** (`components/PipelineTrace.tsx`) — an animated node diagram
  (upload → chunk → embed → retrieve → generate), which is literally the architecture
  of the RAG Doc Q&A project, not decoration.

Section eyebrows use real shell commands (`$ cat skills.json`, `$ ./experience.sh`)
instead of generic numbered markers, since that's how you'd actually inspect this content.

## Editing content

Everything text-based lives in **`data/site.ts`** — name, bio, skills, projects,
experience, and social links. You should almost never need to touch component
files just to update content.

To add/update a project, add an object to the `projects` array in `data/site.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. Drop your latest resume PDF into `public/resume.pdf` (the nav "resume.pdf"
   button links to `/resume.pdf`).
2. Double check `data/site.ts` — especially the `profile` object — for accuracy.
3. Run `npm run build` locally once to confirm everything compiles.

## Deploying to Vercel

1. Push this project to a GitHub repo (e.g. `venkatchowdari/portfolio`).
2. Go to https://vercel.com/new and import that repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Deploy. Vercel will give you a `*.vercel.app` URL immediately; you can attach
   a custom domain later from the Vercel dashboard if you want one.

Every push to your default branch will auto-redeploy.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-first config, see `app/globals.css` for design tokens)
- lucide-react for utility icons (GitHub/LinkedIn are hand-rolled SVGs in
  `components/icons.tsx` since lucide-react no longer ships brand logos)
