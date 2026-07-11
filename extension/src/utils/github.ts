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

export interface Repository {
    name: string;
    language: string | null;
    stars: number;
    forks: number;
}

export interface Analytics {
    totalRepositories: number;
    totalStars: number;
    totalForks: number;
    languages: Record<string, number>;
}

export interface DeveloperAnalysis {
    username: string;
    name: string | null;
    score: number;
    analytics: Analytics;
    repositories: Repository[];
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