import prisma from "../config/db";


export async function getCachedAnalysis(username:string){

    const cachedUser = await prisma.user.findUnique({

        where:{
            githubUsername: username
        },

        include:{
            repositories:true,
            insight:true
        }

    });


    return cachedUser;

}




export async function saveAnalysis(
    username:string,
    avatarUrl:string,
    repos:any[],
    score:number,
    aiInsights:any
){


return await prisma.user.create({


data:{

githubUsername:username,

avatarUrl:avatarUrl,


repositories:{

create: repos.map(repo => ({

name: repo.name,

language: repo.language,

stars: repo.stargazers_count,

forks: repo.forks_count

}))

},


insight:{
create: {
    score: score,

    summary: aiInsights.personality,

    strengths: aiInsights.strengths,

    weaknesses: aiInsights.weaknesses
}

}


}


});


}