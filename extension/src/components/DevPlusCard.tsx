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
                <h2 className="text-lg font-bold">🚀 DevPlus</h2>
                <Badge>Beta</Badge>
            </div>

            <p className="mt-3">
                Username: <strong>{username}</strong>
            </p>

            {loading && <Loader />}

            {error && (
                <p className="mt-3 text-red-500">
                    {error}
                </p>
            )}

            {analysis && (
                <div className="mt-4 space-y-2">
                    <p>
                        <strong>Name:</strong> {analysis.name}
                    </p>

                    <p>
                        <strong>Score:</strong> {analysis.score}
                    </p>

                    <p>
                        <strong>Repositories:</strong>{" "}
                        {analysis.repositories.length}
                    </p>
                </div>
            )}
        </Card>
    );
}