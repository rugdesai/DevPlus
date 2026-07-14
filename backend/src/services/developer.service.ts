import { getGithubUser, getGithubRepos } from "./github.service";
import { analyzeRepositories } from "./analytics.service";
import { calculateDevScore } from "./scoring.service";
import { saveAnalysis } from "./cache.service";
import { generateDeveloperInsights } from "./ai.service";

export async function analyzeDeveloper(username: string) {

  // Fetch GitHub data
  console.log("Fetching fresh GitHub data");

  const user = await getGithubUser(username);
  const repos = await getGithubRepos(username);

  // Analyze repositories
  const analytics = analyzeRepositories(repos);

  // Calculate DevPlus score
  const score = calculateDevScore(analytics);

  let aiInsights;

  try {
    aiInsights = await generateDeveloperInsights(
      analytics,
      score
    );
  } catch (error) {
    console.error("Gemini Error:", error);

    aiInsights = {
      summary:
        "This developer shows consistent GitHub activity with good potential for growth.",
      strengths: [
        "Consistent coding activity",
        "Maintains active repositories",
      ],
      growthOpportunities: [
        "Build more full-stack projects",
        "Increase language diversity",
      ],
      nextMilestone:
        "Publish a production-ready full-stack application.",
    };
  }

  // Save to database
  await saveAnalysis(
    username,
    user.avatar_url,
    repos,
    score,
    aiInsights
  );

  // Return data to frontend
  return {
    githubUsername: username,
    repositories: repos,
    insight: {
      score,
      summary: aiInsights.summary,
      strengths: aiInsights.strengths,
      growthOpportunities: aiInsights.growthOpportunities,
      nextMilestone: aiInsights.nextMilestone,
    },
  };
}