import { useEffect, useState } from "react";

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
                <h2 className="text-xl font-bold tracking-tight">🚀 DevPlus</h2>
                <Badge>Beta</Badge>
            </div>

            <p className="mt-3">
                Username: <strong>{username}</strong>
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
                        <p>
                            <span className="font-medium">👤 Name:</span>{" "}
                            {analysis.githubUsername}
                        </p>

                        <p>
                            <span className="font-medium">⭐ DevPlus Score:</span>{" "}
                            {analysis.insight.score}
                        </p>
                    </div>

<div className="border-t pt-4">

    <div className="grid grid-cols-3 gap-3">

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories.length}
            </p>

            <p className="mt-1 text-xs text-gray-500">
                📦 Repositories
            </p>
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories
                    .reduce((sum, repo) => sum + repo.stars, 0)
                    .toLocaleString()}
            </p>

            <p className="mt-1 text-xs text-gray-500">
                ⭐ Stars
            </p>
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold">
                {analysis.repositories
                    .reduce((sum, repo) => sum + repo.forks, 0)
                    .toLocaleString()}
            </p>

            <p className="mt-1 text-xs text-gray-500">
                🍴 Forks
            </p>
        </div>

    </div>

    <div className="mt-5">
        <p className="font-medium">
            💻 Top Languages
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
            {[...new Set(analysis.repositories.map(repo => repo.language))].map(
                (language: string) => (
                    <Badge key={language}>
                        {language}
                    </Badge>
                )
            )}
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
                        weaknesses={analysis.insight.weaknesses}
                      />
                </div>
            )}
            <div className="mt-6 border-t pt-3 text-center text-xs text-gray-500">
                Powered by DevPlus AI
            </div>
        </Card>
    );
}