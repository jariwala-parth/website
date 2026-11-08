export interface Role {
  title: string;
  duration: string;
}

export interface WorkArea {
  name: string;
  period: string;
  points: string[];
  stack?: string[];
}

export interface Company {
  company: string;
  monogram: string;
  url?: string;
  location: string;
  duration: string;
  tagline: string;
  roles: Role[];
  areas: WorkArea[];
}

export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  headline: string;
  summary: string[];
  focus: string[];
  stats: { value: string; label: string }[];
  experience: Company[];
  metrics: Metric[];
  skills: SkillGroup[];
  education: Education[];
  socialLinks: SocialLinks;
}
