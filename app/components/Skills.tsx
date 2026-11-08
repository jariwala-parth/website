'use client';

import { profile } from '../data/profile';
import Section, { Reveal } from './Section';

export default function Skills() {
  return (
    <Section
      id="stack"
      index="04"
      label="stack"
      title="Tools I reach for"
      intro="Java and the JVM ecosystem at the core, with Kafka and AWS doing most of the heavy lifting around it."
    >
      <Reveal>
        <dl className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {profile.skills.map((group) => (
            <div key={group.name} className="grid gap-3 p-5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-7">
              <dt className="font-mono text-sm text-accent">{group.name.toLowerCase()}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md border border-line bg-raised/60 px-2.5 py-1 text-sm text-fg/90">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
