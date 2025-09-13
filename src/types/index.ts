// Portfolio Type Definitions

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  outcomes: string[];
  companyUrl?: string;
  sourceUrl?: string;
  caseStudyUrl?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface OpenSourceProject {
  title: string;
  description: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  valueStatement: string;
  email: string;
  resumeUrl: string;
}
