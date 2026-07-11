import { getGithubUser, getGithubRepos } from "./github.service";

import { analyzeRepositories } from "./analytics.service";

import { calculateDevScore } from "./scoring.service";

import { getCachedAnalysis, saveAnalysis } from "./cache.service";

import { generateDeveloperInsights } from "./ai.service";

export async function analyzeDeveloper(username:string){


    // 1. check database first

    const cached = await getCachedAnalysis(username);


    if(cached){

        console.log("Returning cached analysis");

        return cached;

    }



    // 2. If not cached, fetch GitHub

    console.log("Fetching fresh GitHub data");


    const user = await getGithubUser(username);


    const repos = await getGithubRepos(username);




    // 3. Analyze repos

    const analytics = analyzeRepositories(repos);




    // 4. Calculate DevPlus Score

    const score = calculateDevScore(analytics);

    let aiInsights;

try {

 aiInsights =
 await generateDeveloperInsights(
   analytics,
   score
 );

}
catch(error){

 console.error("AI failed, using fallback");

 aiInsights = {
  personality:"Developer",
  strengths:[
    "Consistent coding activity"
  ],
  weaknesses:[
    "Need more data"
  ],
  suggestions:[
    "Continue building projects"
  ]
 };

}
    // 5. Save result

    await saveAnalysis(
        username,
        user.avatar_url,
        repos,
        score,
        aiInsights
    );




    return {

        username,

        score,

        analytics,

        aiInsights

    };


}