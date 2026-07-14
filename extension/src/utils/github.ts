const RESERVED_PATHS = [
  "login",
  "settings",
  "topics",
  "orgs",
  "features",
  "pricing",
  "explore",
  "marketplace",
  "notifications",
  "pulls",
  "issues",
  "codespaces",
  "search",
  "sponsors",
  "collections",
];


export interface Analytics {
    totalRepositories: number;
    totalStars: number;
    totalForks: number;
    topLanguages: string[];
}

export interface Repository {
    id: string;
    name: string;
    language: string;
    stars: number;
    forks: number;
    userId: string;
}

export interface Insight {
    id: string;
    score: number;
    summary: string;
    strengths: string[];
    growthOpportunities: string[];
    nextMilestone: string;
    createdAt: string;
    userId: string;
}

export interface DeveloperAnalysis {
    githubUsername: string;

    repositories: Repository[];

    analytics: {
        totalStars: number;
        totalForks: number;
        totalRepositories: number;
        topLanguages: string[];
    };

    insight: {
        score: number;
        summary: string;
        strengths: string[];
        growthOpportunities: string[];
        nextMilestone: string;
    };
}

export function getUsername(): string | null {
  const path = window.location.pathname.split("/").filter(Boolean);

  if (path.length !== 1) {
    return null;
  }

  const username = path[0];

  if (RESERVED_PATHS.includes(username.toLowerCase())) {
    return null;
  }

  return username;
}

export function isProfilePage(): boolean {
  return getUsername() !== null;
}