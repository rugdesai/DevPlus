import { useEffect, useState } from "react";

import Card from "./Card";
import Badge from "./Badge";
import Loader from "./Loader";

import { useGithubProfile } from "../hooks/useGithubProfile";
import { getDeveloperAnalysis } from "../services/api";
import type { DeveloperAnalysis } from "../utils/github";

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

                console.log("Developer Analysis:", data);

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
                            {analysis.name ?? "N/A"}
                        </p>

                        <p>
                            <span className="font-medium">⭐ DevPlus Score:</span>{" "}
                            {analysis.score}
                        </p>
                    </div>

                    <div className="border-t pt-3 space-y-1">
                        <p>
                            📦 Repositories:{" "}
                            {analysis.analytics.totalRepositories}
                        </p>

                        <p>
                            ⭐ Total Stars:{" "}
                            {analysis.analytics.totalStars.toLocaleString()}
                        </p>

                        <p>
                            🍴 Total Forks:{" "}
                            {analysis.analytics.totalForks.toLocaleString()}
                        </p>

                        <p>
                            💻 Top Languages:
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {analysis.analytics.topLanguages.map((language) => (
                                <Badge key={language}>
                                    {language}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-6 border-t pt-3 text-center text-xs text-gray-500">
                Powered by DevPlus AI
            </div>
        </Card>
    );
}