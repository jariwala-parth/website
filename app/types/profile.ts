export interface Skill {
  name: string;
  highlighted: boolean;
  expandable?: boolean;
  services?: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  location: string;
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
}

export interface Project {
  title: string;
  description: string;
  duration: string;
  association?: string;
  technologies: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  about: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLinks;
} 