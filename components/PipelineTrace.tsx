"use client";

const stages = ["upload", "chunk", "embed", "retrieve", "generate"];

/**
 * Signature visual: a request tracing through a RAG pipeline.
 * This isn't decorative — it's literally the architecture of the
 * flagship project (RAG Doc Q&A). Nodes light up in sequence to
 * suggest a request moving through the system.
 */
export default function PipelineTrace({ className = "" }: { className?: string }) {
  const nodeCount = stages.length;
  const gap = 100 / (nodeCount - 1);

  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 600 90"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Diagram of a document query flowing through upload, chunk, embed, retrieve, and generate stages"
      >
        <line
          x1="20"
          y1="45"
          x2="580"
          y2="45"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="45"
          x2="580"
          y2="45"
          stroke="var(--color-amber)"
          strokeWidth="2"
          strokeDasharray="560"
          strokeDashoffset="560"
          className="pipeline-line"
        />

        {stages.map((stage, i) => {
          const cx = 20 + (gap / 100) * 560 * i;
          const delay = 0.2 + (i / (nodeCount - 1)) * 2.4;
          return (
            <g key={stage}>
              <circle
                cx={cx}
                cy={45}
                r={7}
                fill="var(--color-surface)"
                stroke="var(--color-border)"
                strokeWidth="2"
                className="pipeline-node"
                style={{ animationDelay: `${delay}s` }}
              />
              <text
                x={cx}
                y={70}
                textAnchor="middle"
                fontSize="11"
                fontFamily="var(--font-mono)"
                fill="var(--color-text-muted)"
              >
                {stage}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
