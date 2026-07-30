import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-b border-border bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan mb-3">$ ./experience.sh</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_2.5fr] gap-4 md:gap-10">
              <div>
                <p className="text-text font-medium">{job.role}</p>
                <p className="text-amber text-sm font-mono mt-1">{job.org}</p>
                <p className="text-text-muted text-xs font-mono mt-1">{job.duration}</p>
              </div>
              <ul className="space-y-2">
                {job.points.map((point, j) => (
                  <li key={j} className="text-sm text-text-muted flex gap-2">
                    <span className="text-cyan shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
