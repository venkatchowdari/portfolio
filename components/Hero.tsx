import { profile } from "@/data/site";
import Terminal from "./Terminal";
import PipelineTrace from "./PipelineTrace";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-grid pt-36 pb-20 px-6 border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs text-cyan mb-4">$ whoami</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-[1.1] text-text">
            {profile.name}
          </h1>
          <p className="font-mono text-amber mt-3 text-sm md:text-base">{profile.role}</p>
          <p className="text-text-muted mt-5 leading-relaxed max-w-md">{profile.tagline}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="#projects"
              className="rounded-md bg-amber text-ink font-medium px-5 py-2.5 text-sm hover:bg-amber/90 transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 text-sm text-text hover:border-cyan/50 hover:text-cyan transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <Terminal />
      </div>

      <div className="mx-auto max-w-3xl mt-16">
        <PipelineTrace />
      </div>
    </section>
  );
}
