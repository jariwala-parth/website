'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const K = ({ children }: { children: string }) => <span className="text-syn-key">&quot;{children}&quot;</span>;
const S = ({ children }: { children: string }) => <span className="text-syn-str">&quot;{children}&quot;</span>;
const N = ({ children }: { children: string | number }) => <span className="text-syn-num">{children}</span>;
const P = ({ children }: { children: string }) => <span className="text-syn-punc">{children}</span>;

function StringArray({ items, indent }: { items: string[]; indent: string }) {
  return (
    <>
      <P>[</P>
      {'\n'}
      {items.map((item, i) => (
        <span key={item}>
          {indent}  <S>{item}</S>
          {i < items.length - 1 && <P>,</P>}
          {'\n'}
        </span>
      ))}
      {indent}
      <P>]</P>
    </>
  );
}

function Terminal() {
  const { name, title, focus } = profile;
  const stack = ['Java', 'Spring Boot', 'Kafka', 'AWS'];

  return (
    <div className="rounded-xl border border-line bg-surface shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-subtle truncate">zsh — parth@prod</span>
      </div>
      <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed text-fg">
        <span className="text-accent">$</span> curl -s theparthjariwala.com/api/me | jq{'\n'}
        <span className="text-subtle">HTTP/2 </span>
        <N>200</N>
        <span className="text-subtle"> OK</span>
        {'\n'}
        <P>{'{'}</P>
        {'\n'}
        {'  '}<K>name</K><P>: </P><S>{name}</S><P>,</P>{'\n'}
        {'  '}<K>role</K><P>: </P><S>{title}</S><P>,</P>{'\n'}
        {'  '}<K>company</K><P>: </P><S>Joveo</S><P>,</P>{'\n'}
        {'  '}<K>years</K><P>: </P><N>7</N><P>,</P>{'\n'}
        {'  '}<K>stack</K><P>: </P><StringArray items={stack} indent="  " /><P>,</P>{'\n'}
        {'  '}<K>focus</K><P>: </P><StringArray items={focus} indent="  " /><P>,</P>{'\n'}
        {'  '}<K>open_to_chat</K><P>: </P><N>true</N>{'\n'}
        <P>{'}'}</P>
        {'\n'}
        <span className="text-accent">$</span>
        <span className="cursor" aria-hidden="true" />
      </pre>
    </div>
  );
}

export default function Hero() {
  const { name, title, headline, location, socialLinks } = profile;

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-page items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="status-dot h-2 w-2 rounded-full bg-accent" />
            Building at Joveo · {location}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            {name}
          </h1>
          <p className="mt-3 font-mono text-base sm:text-lg text-accent">{title}</p>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">{headline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg hover:opacity-90 transition-opacity"
            >
              See my work
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-fg hover:border-subtle transition-colors"
            >
              Get in touch
            </Link>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: socialLinks.github, label: 'GitHub', Icon: FiGithub },
                { href: socialLinks.linkedin, label: 'LinkedIn', Icon: FiLinkedin },
                { href: `mailto:${socialLinks.email}`, label: 'Email', Icon: FiMail },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted hover:text-fg hover:bg-raised transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="min-w-0"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
