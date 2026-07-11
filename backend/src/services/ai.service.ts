import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY as string
);


export const generateDeveloperInsights =
async (
    analytics:any,
    score:number
)=>{


const model = genAI.getGenerativeModel({
    model:"gemini-2.0-flash-lite"
});


const prompt = `

You are a senior software engineer reviewing a developer's GitHub profile.

Analyze this developer:

Developer Score:
${score}


GitHub Analytics:
${JSON.stringify(analytics)}


Return ONLY valid JSON:

{
 "personality":"",
 "strengths":[],
 "weaknesses":[],
 "suggestions":[]
}

`;


const result =
await model.generateContent(prompt);


const text =
result.response.text();


return JSON.parse(text);

}