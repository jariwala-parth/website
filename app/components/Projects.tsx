'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../data/profile';
import Section, { Reveal } from './Section';

/**
 * The project link with UTM tags. The links open with rel="noreferrer", so
 * without them a visit from here arrives in the project's analytics as direct.
 */
function tracked(url: string): string {
  const link = new URL(url);
  link.searchParams.set('utm_source', 'theparthjariwala.com');
  link.searchParams.set('utm_medium', 'referral');
  link.searchParams.set('utm_campaign', 'portfolio');
  return link.toString();
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="side projects"
      title="Things I build on weekends"
      intro="Products I've designed, built and run end to end, from the data model to deployment."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <Link
                    href={tracked(p.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                  >
                    {p.domain}
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  live
                </span>
              </div>

              <p className="mt-4 text-fg/90 leading-relaxed">{p.tagline}</p>

              <ul className="mt-5 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt.slice(0, 32)} className="relative pl-5 text-sm leading-relaxed text-muted">
                    <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label="Technologies">
                {p.stack.map((t) => (
                  <li key={t} className="rounded bg-raised px-2 py-0.5 font-mono text-[11px] text-subtle">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
