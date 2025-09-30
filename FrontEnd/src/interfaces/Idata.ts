// Interfaces TypeScript pour la structure des données
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  screenshots?: string[];
  githubUrl?: string;

  tags: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}