import { skills } from "@/data/site";

const labels: Record<string, string> = {
  languages: "languages",
  ai_ml: "ai / ml",
  backend: "backend",
  data_infra: "data & infra",
  tools: "tools",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-b border-border bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs text-cyan mb-3">$ cat skills.json</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-10">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="font-mono text-xs text-amber mb-3">
                &quot;{labels[group.category]}&quot;: [
              </h3>
              <div className="flex flex-wrap gap-2 pl-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-mono text-text bg-surface-raised border border-border rounded px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs text-amber mt-3">]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
