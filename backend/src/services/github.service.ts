import axios from "axios";


const GITHUB_BASE_URL = "https://api.github.com";


export const getGithubUser = async (username: string) => {

    const response = await axios.get(
        `${GITHUB_BASE_URL}/users/${username}`
    );


    return response.data;
};

export const getGithubRepos = async (
    username: string
) => {

    const response = await axios.get(
        `${GITHUB_BASE_URL}/users/${username}/repos`
    );


    return response.data;
};