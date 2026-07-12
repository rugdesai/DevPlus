import axios from "axios";
import { API_URL } from "../utils/constants";
import type { DeveloperAnalysis } from "../utils/github";

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export const getDeveloperAnalysis = async (
    username: string
): Promise<DeveloperAnalysis> => {
    const { data } = await api.get<DeveloperAnalysis>(
        `/api/analyze/${username}`
    );

    return data;
};

export default api;