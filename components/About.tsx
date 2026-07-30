import { education, profile } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-b border-border">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan mb-3">$ cat about.md</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-10">
          About
        </h2>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-10">
          <p className="text-text-muted leading-relaxed">
            I&apos;m a final-year Computer Science engineering student at{" "}
            {education.school}, based in {profile.location}. Most of my work sits at
            the intersection of backend engineering and applied AI — I like taking a
            system from &quot;works on my laptop&quot; to a fully containerized,
            end-to-end pipeline. My flagship projects are a retrieval-augmented
            generation system and an open-source tool for cutting LLM token costs,
            both built with production patterns: async task queues, proper
            documentation, and Docker Compose deployments.
          </p>

          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-mono text-sm text-amber mb-3">education</h3>
            <p className="text-text font-medium">{education.degree}</p>
            <p className="text-text-muted text-sm mt-1">{education.school}</p>
            <p className="text-text-muted text-sm">{education.duration}</p>
            <p className="text-cyan text-sm mt-2 font-mono">GPA: {education.gpa}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="text-xs font-mono text-text-muted border border-border rounded px-2 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
