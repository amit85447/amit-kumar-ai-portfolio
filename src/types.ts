export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "ai-ml" | "data-analytics" | "gis-remote-sensing" | "dev-tools";
  tech: string[];
  desc: string;
  detailedDesc?: string;
  github: string;
  demoUrl?: string;
  hasSimulator?: boolean;
}

export interface JourneyStep {
  title: string;
  subtitle: string;
  period?: string;
  description: string;
  icon?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface AnalyticsRecord {
  month: string;
  Kangra: number;
  Mandi: number;
  Shimla: number;
  Kullu: number;
  Solan: number;
}
