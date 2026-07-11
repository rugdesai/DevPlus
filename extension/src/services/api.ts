import axios from "axios";
import { API_URL } from "../utils/constants";


const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export const getDeveloperAnalysis = async (username: string) => {
    const response = await fetch(
        `${API_URL}/api/analyze/${username}`
    );

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return await response.json();
};

export default api;