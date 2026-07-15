import prisma from "../config/db";
export async function getCachedAnalysis(username) {
    const cachedUser = await prisma.user.findUnique({
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
export async function saveAnalysis(username, avatarUrl, repos, score, aiInsights) {
    // Delete old repositories
    await prisma.repository.deleteMany({
        where: {
            user: {
                githubUsername: username,
            },
        },
    });
    // Delete old insight
    await prisma.aIInsight.deleteMany({
        where: {
            user: {
                githubUsername: username,
            },
        },
    });
    return await prisma.user.upsert({
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
