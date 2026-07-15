"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCachedAnalysis = getCachedAnalysis;
exports.saveAnalysis = saveAnalysis;
const db_1 = __importDefault(require("../config/db"));
async function getCachedAnalysis(username) {
    const cachedUser = await db_1.default.user.findUnique({
        where: {
            githubUsername: username,
        },
        include: {
            repositories: true,
            insight: true,
        },
    });
    return cachedUser;
}
async function saveAnalysis(username, avatarUrl, repos, score, aiInsights) {
    // Delete old repositories
    await db_1.default.repository.deleteMany({
        where: {
            user: {
                githubUsername: username,
            },
        },
    });
    // Delete old insight
    await db_1.default.aIInsight.deleteMany({
        where: {
            user: {
                githubUsername: username,
            },
        },
    });
    return await db_1.default.user.upsert({
        where: {
            githubUsername: username,
        },
        update: {
            avatarUrl,
            repositories: {
                create: repos.map((repo) => ({
                    name: repo.name,
                    language: repo.language,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                })),
            },
            insight: {
                create: {
                    score,
                    summary: aiInsights.summary,
                    strengths: aiInsights.strengths,
                    growthOpportunities: aiInsights.growthOpportunities,
                    nextMilestone: aiInsights.nextMilestone,
                },
            },
        },
        create: {
            githubUsername: username,
            avatarUrl,
            repositories: {
                create: repos.map((repo) => ({
                    name: repo.name,
                    language: repo.language,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                })),
            },
            insight: {
                create: {
                    score,
                    summary: aiInsights.summary,
                    strengths: aiInsights.strengths,
                    growthOpportunities: aiInsights.growthOpportunities,
                    nextMilestone: aiInsights.nextMilestone,
                },
            },
        },
        include: {
            repositories: true,
            insight: true,
        },
    });
}
