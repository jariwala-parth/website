'use client';

import Link from 'next/link';
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';
import Section, { Reveal } from './Section';

export default function Contact() {
  const { socialLinks } = profile;
  const links = [
    { label: 'Email', value: socialLinks.email, href: `mailto:${socialLinks.email}`, Icon: FiMail },
    { label: 'LinkedIn', value: 'in/parth-jariwala', href: socialLinks.linkedin, Icon: FiLinkedin },
    { label: 'GitHub', value: 'jariwala-parth', href: socialLinks.github, Icon: FiGithub },
    { label: 'Instagram', value: '@theparthjariwala', href: socialLinks.instagram, Icon: FiInstagram },
  ];

  return (
    <Section
      id="contact"
      index="05"
      label="contact"
      title="Let's talk"
      intro="Happy to chat about backend architecture, event-driven systems, integrations, or a role where I can own a hard problem."
    >
      <Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 hover:border-accent/50 transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-raised text-muted group-hover:text-accent transition-colors">
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs text-subtle">{label}</span>
                  <span className="block truncate text-fg">{value}</span>
                </span>
                <FiArrowUpRight className="shrink-0 text-subtle group-hover:text-accent transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
