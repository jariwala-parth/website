'use client';

import Link from 'next/link';
import { FiMapPin, FiBookOpen, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';
import Section, { Reveal } from './Section';

export default function About() {
  const { summary, stats, location, education, socialLinks } = profile;
  const edu = education[0];

  return (
    <Section id="about" index="01" label="about" title="Backend engineer who owns things end to end">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-muted">
          {summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-center gap-4">
              <img
                src="/images/parth.png"
                alt="Parth Jariwala"
                width={64}
                height={64}
                className="h-16 w-16 rounded-lg object-cover border border-line"
              />
              <div>
                <p className="font-medium">{profile.name}</p>
                <p className="font-mono text-xs text-subtle mt-0.5">{profile.title}</p>
              </div>
            </div>
            <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-accent" />
                <dd className="text-muted">{location}</dd>
              </div>
              <div className="flex items-start gap-3">
                <FiBookOpen className="mt-0.5 shrink-0 text-accent" />
                <dd className="text-muted">
                  {edu.degree}
                  <span className="block text-subtle">
                    {edu.university} · {edu.duration}
                  </span>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0 text-accent" />
                <dd>
                  <Link href={`mailto:${socialLinks.email}`} className="text-muted hover:text-accent break-all">
                    {socialLinks.email}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12">
        <dl className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-xl border border-line bg-line gap-px">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-5 py-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-mono text-2xl md:text-3xl font-medium text-fg">{s.value}</span>
                <span className="mt-1 block text-sm text-subtle">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
