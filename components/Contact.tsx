import { profile } from "@/data/site";
import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-xs text-cyan mb-3">$ ./contact.sh --open</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-text mb-4">
          Let&apos;s talk
        </h2>
        <p className="text-text-muted max-w-md mx-auto mb-8">
          Open to full-time AI/ML engineering, software development, and data roles.
          Reach out directly — I reply fast.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-amber text-ink font-medium px-6 py-3 text-sm hover:bg-amber/90 transition-colors"
        >
          <Mail size={16} /> {profile.email}
        </a>

        <div className="flex justify-center gap-6 mt-10 text-text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors" aria-label="LeetCode">
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
