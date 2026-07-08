import { Request, Response } from "express";
import { 
    getGithubUser,
    getGithubRepos 
} from "../services/github.service";
import { analyzeRepositories } from "../services/analytics.service";
import { calculateDevScore } from "../services/scoring.service";

export const analyzeUser = async (
    req: Request,
    res: Response
) => {

    try {

        const username = req.params.username as string;


        const user = await getGithubUser(username);
        const repos = await getGithubRepos(username);
        const analytics = analyzeRepositories(repos);
        const devPlusScore = calculateDevScore(analytics);

        res.json({

    username:user.login,

    name:user.name,

    score:devPlusScore,

    analytics,


    repositories:
    repos.map((repo:any)=>({

        name:repo.name,

        language:repo.language,

        stars:
        repo.stargazers_count,

        forks:
        repo.forks_count

    }))

});


    } catch (error) {

        console.log(error);


        res.status(500).json({
            message: "Failed to analyze GitHub user"
        });
    }
};