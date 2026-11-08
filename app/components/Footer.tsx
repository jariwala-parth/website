import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {year} {profile.name}</p>
        <p>
          built with Next.js · <span className="text-accent">●</span> all systems operational
        </p>
      </div>
    </footer>
  );
}
