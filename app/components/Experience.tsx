'use client';

import Link from 'next/link';
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/profile';
import type { Company } from '../types/profile';
import Section, { Reveal } from './Section';

function CompanyCard({ job }: { job: Company }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface">
      <header className="border-b border-line bg-raised/60 p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {job.logo && job.logoFit === 'cover' ? (
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line shadow-sm">
              <img src={job.logo} alt={`${job.company} logo`} width={64} height={64} className="h-full w-full object-cover" />
            </div>
          ) : job.logo ? (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-3 shadow-sm">
              <img src={job.logo} alt={`${job.company} logo`} width={40} height={40} className="h-full w-full object-contain" />
            </div>
          ) : (
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-line bg-surface font-mono text-lg font-semibold text-accent"
              aria-hidden="true"
            >
              {job.monogram}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-2xl font-semibold tracking-tight">
                {job.url ? (
                  <Link href={job.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-accent">
                    {job.company}
                    <FiArrowUpRight className="h-4 w-4 text-subtle group-hover:text-accent" />
                  </Link>
                ) : (
                  job.company
                )}
              </h3>
              <span className="font-mono text-xs text-subtle">{job.duration}</span>
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-subtle">
              <FiMapPin className="h-3.5 w-3.5" /> {job.location}
            </p>
            <p className="mt-3 text-fg/90">{job.tagline}</p>

            <ol className="mt-4 flex flex-wrap gap-2">
              {job.roles.map((r, i) => (
                <li
                  key={r.title}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[11px] ${
                    i === 0 ? 'border-accent/40 bg-accent/10 text-accent' : 'border-line text-subtle'
                  }`}
                >
                  {r.title} <span className="opacity-70">· {r.duration}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </header>

      <div className="grid gap-px bg-line">
        {job.areas.map((area) => (
          <div key={area.name} className="bg-surface p-5 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-semibold">{area.name}</h4>
              <span className="font-mono text-xs text-subtle">{area.period}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {area.points.map((p) => (
                <li key={p.slice(0, 32)} className="relative pl-5 leading-relaxed text-muted">
                  <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            {area.stack && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {area.stack.map((t) => (
                  <li key={t} className="rounded bg-raised px-2 py-0.5 font-mono text-[11px] text-subtle">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="experience"
      title="Where I've worked"
      intro="Seven years on backend teams, from network monitoring APIs to the systems that ingest, price and route millions of job ads."
    >
      <div className="space-y-8">
        {profile.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <CompanyCard job={job} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
