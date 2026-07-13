import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY as string
);

export const generateDeveloperInsights = async (
  analytics: any,
  score: number
) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
  });

  const prompt = `
You are a Senior Software Engineering Manager and Technical Recruiter at a top technology company.

Your task is to objectively evaluate a developer's GitHub profile using ONLY the information provided.

Developer Score:
${score}/100

GitHub Analytics:
${JSON.stringify(analytics, null, 2)}

Evaluate the developer based on:
- Project diversity
- Technology stack
- Repository quality
- Engineering maturity
- Coding consistency
- Learning progression
- Open-source activity
- Documentation quality (if inferable)

Rules:
- Never invent information.
- Every observation must be supported by the provided analytics.
- If evidence is insufficient, clearly mention it.
- Be constructive, specific, and professional.
- Avoid generic statements like "Good developer" or "Need more data".
- Focus on actionable insights.

Return ONLY valid JSON in this exact format:

{
  "summary": "Write a professional 2-3 sentence summary of the developer.",
  "strengths": [
    "Strength 1",
    "Strength 2",
    "Strength 3",
    "Strength 4"
  ],
  "growthOpportunities": [
    "Opportunity 1",
    "Opportunity 2",
    "Opportunity 3",
    "Opportunity 4"
  ],
  "nextMilestone": "Suggest one high-impact next step that would significantly improve this developer's GitHub profile."
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  // Remove markdown code fences if Gemini adds them
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};