import { NextResponse } from 'next/server';
import { profile } from '../../data/profile';

export const dynamic = 'force-static';

// Backs the `curl .../api/me` shown in the hero terminal.
export function GET() {
  const { name, title, location, focus, skills, socialLinks, experience, projects } = profile;
  return NextResponse.json(
    {
      name,
      role: title,
      company: experience[0].company,
      location,
      years: 7,
      stack: ['Java', 'Spring Boot', 'Kafka', 'AWS'],
      focus,
      skills: Object.fromEntries(skills.map((g) => [g.name, g.items])),
      side_projects: projects.map((p) => ({ name: p.name, url: p.url })),
      links: socialLinks,
      open_to_chat: true,
    },
    { headers: { 'Cache-Control': 'public, max-age=3600' } }
  );
}
