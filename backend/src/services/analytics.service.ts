export const analyzeRepositories = (
    repos:any[]
) => {


    let totalStars = 0;
    let totalForks = 0;


    const languages: Record<string, number> = {};



    repos.forEach((repo)=>{


        totalStars += repo.stargazers_count;

        totalForks += repo.forks_count;



        if(repo.language){


            languages[repo.language] =
            
            (languages[repo.language] || 0) + 1;


        }

    });



    const topLanguages = Object.entries(languages)

        .sort(
            (a,b)=> b[1]-a[1]
        )

        .map(
            ([language])=>language
        );



    return {

        totalStars,

        totalForks,

        topLanguages,

        totalRepositories:
        repos.length

    };
};