'use client';

import { profile } from '../data/profile';
import Section, { Reveal } from './Section';

export default function Impact() {
  return (
    <Section
      id="impact"
      index="03"
      label="impact"
      title="Numbers I'm proud of"
      intro="A few before-and-afters from production systems I've designed, rebuilt or debugged."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {profile.metrics.map((m, i) => (
          <Reveal key={m.label} delay={(i % 3) * 0.05} className="bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-subtle">{m.label}</p>
            <p className="mt-3 font-mono text-3xl font-medium text-accent">{m.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{m.context}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
