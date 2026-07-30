import { projects } from "@/data/site";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 border-b border-border">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan mb-3">$ ls projects/</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={`group rounded-lg border p-6 flex flex-col transition-colors ${
                project.featured
                  ? "border-amber/30 bg-surface"
                  : "border-border bg-surface/60"
              } hover:border-cyan/40`}
            >
              <p className="font-mono text-xs text-text-muted mb-2 truncate">
                <span className="text-cyan">$</span> {project.command}
              </p>
              <h3 className="font-display text-lg font-semibold text-text">
                {project.name}
              </h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-text-muted flex gap-2">
                    <span className="text-amber shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono text-text-muted border border-border rounded px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    <GithubIcon size={15} /> code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-cyan transition-colors"
                  >
                    <ExternalLink size={15} /> live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
