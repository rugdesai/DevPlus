import { useEffect, useState } from "react";

import {
  PersonIcon,
  StarFillIcon,
  RepoIcon,
  RepoForkedIcon,
  CodeIcon,
} from "@primer/octicons-react";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  C: "#555555",
  "C++": "#f34b7d",
  CSharp: "#178600",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  OpenSCAD: "#e5cd45",
};

import Card from "./Card";
import Badge from "./Badge";
import Loader from "./Loader";

import { useGithubProfile } from "../hooks/useGithubProfile";
import { getDeveloperAnalysis } from "../services/api";
import type { DeveloperAnalysis } from "../utils/github";
import AIInsights from "./AIInsights";
import LanguageChart from "./charts/LanguageChart";
import RepoStarsChart from "./charts/RepoStarsChart";
import RepositoryComparisonChart from "./charts/RepositoryComparisonChart";

export default function DevPlusCard() {
    const { username } = useGithubProfile();

    const [analysis, setAnalysis] = useState<DeveloperAnalysis | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!username) return;

        const fetchAnalysis = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getDeveloperAnalysis(username);

                console.log(JSON.stringify(data, null, 2));

                setAnalysis(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load developer analysis.");
                setAnalysis(null);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [username]);

    return (
        <Card>
            <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-sans font-bold tracking-tight text-amber-400">
                        DevPlus
                    </h2>
                <Badge>Beta</Badge>
            </div>

<p className="mt-3 flex items-center gap-2">

    <PersonIcon size={16} />

    <span className="font-medium">
        Name:
    </span>

    <strong>{analysis?.githubUsername}</strong>

</p>

            {loading && (
              <div className="mt-4">
                <Loader />
                <p className="mt-2 text-sm text-gray-500">
                  Analyzing developer profile...
                </p>
              </div>
            )}

            {error && (
                <p className="mt-4 rounded-md border border-red-300 bg-red-50 p-3 text-red-700 text-sm">
                    {error}
                </p>
            )}

            {analysis && (
                <div className="mt-4 space-y-3">
                    <div className="border-t pt-3">
<p className="mt-2 flex items-center gap-2">

    <StarFillIcon
        size={16}
        className="text-yellow-400"
    />

    <span className="font-medium">
        DevPlus Score:
    </span>

    <span className="text-xl font-bold">
        {analysis.insight.score}
    </span>

</p>
                    </div>

<div className="border-t pt-4">

    <div className="grid grid-cols-3 gap-3">

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories.length}
            </p>

<div className="mt-1 flex items-center justify-center gap-1 text-xs text-zinc-400">
  <RepoIcon size={14} />
  <span className="font-medium">Repositories</span>
</div>
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories
                    .reduce((sum, repo) => sum + repo.stars, 0)
                    .toLocaleString()}
            </p>

<div className="mt-1 flex items-center justify-center gap-1 text-xs text-zinc-400">
  <StarFillIcon size={14} className="text-yellow-400" />
  <span className="font-medium">Stars</span>
</div>
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories
                    .reduce((sum, repo) => sum + repo.forks, 0)
                    .toLocaleString()}
            </p>

<div className="mt-1 flex items-center justify-center gap-1 text-xs text-zinc-400">
  <RepoForkedIcon size={14} />
  <span className="font-medium">Forks</span>
</div>
        </div>

    </div>

    <div className="mt-5">
<div className="mb-3 flex items-center gap-2 text-zinc-400">
  <CodeIcon size={16} />
  <span className="font-medium text-white">
    Top Languages
  </span>
</div>

<div className="mt-3 flex flex-wrap gap-2">
  {[...new Set(analysis.repositories.map(repo => repo.language))]
    .filter(Boolean)
    .map((language: string) => (
      <Badge
        key={language}
        className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-100"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor:
              LANGUAGE_COLORS[language] ?? "#6e7681",
          }}
        />

        <span>{language}</span>
      </Badge>
    ))}
</div>
    </div>

</div>
                    <LanguageChart
                        repositories={analysis.repositories}
                    />

                    <RepoStarsChart
                        repositories={analysis.repositories}
                    />

                    <RepositoryComparisonChart
                        repositories={analysis.repositories}
                    />

                    <AIInsights
    summary={analysis.insight.summary}
    strengths={analysis.insight.strengths}
    growthOpportunities={analysis.insight.growthOpportunities}
    nextMilestone={analysis.insight.nextMilestone}
/>
                </div>
            )}
            <div className="mt-6 border-t pt-3 text-center text-xs text-gray-500">
                Powered by DevPlus AI
            </div>
        </Card>
    );
}