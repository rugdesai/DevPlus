"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeDeveloper = analyzeDeveloper;
const github_service_1 = require("./github.service");
const analytics_service_1 = require("./analytics.service");
const scoring_service_1 = require("./scoring.service");
const cache_service_1 = require("./cache.service");
const ai_service_1 = require("./ai.service");
async function analyzeDeveloper(username) {
    // Fetch GitHub data
    console.log("Fetching fresh GitHub data");
    const user = await (0, github_service_1.getGithubUser)(username);
    const repos = await (0, github_service_1.getGithubRepos)(username);
    // Analyze repositories
    const analytics = (0, analytics_service_1.analyzeRepositories)(repos);
    // Calculate DevPlus score
    const score = (0, scoring_service_1.calculateDevScore)(analytics);
    let aiInsights;
    try {
        aiInsights = await (0, ai_service_1.generateDeveloperInsights)(analytics, score);
    }
    catch (error) {
        console.error("Gemini Error:", error);
        aiInsights = {
            summary: "This developer shows consistent GitHub activity with good potential for growth.",
            strengths: [
                "Consistent coding activity",
                "Maintains active repositories",
            ],
            growthOpportunities: [
                "Build more full-stack projects",
                "Increase language diversity",
            ],
            nextMilestone: "Publish a production-ready full-stack application.",
        };
    }
    // Save to database
    await (0, cache_service_1.saveAnalysis)(username, user.avatar_url, repos, score, aiInsights);
    // Return data to frontend
    return {
        githubUsername: username,
        repositories: repos,
        analytics,
        insight: {
            score,
            summary: aiInsights.summary,
            strengths: aiInsights.strengths,
            growthOpportunities: aiInsights.growthOpportunities,
            nextMilestone: aiInsights.nextMilestone,
        },
    };
}
