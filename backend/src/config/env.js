import dotenv from "dotenv";
dotenv.config();
export const ENV = {
    PORT: Number(process.env.PORT) || 5050,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    AI_API_KEY: process.env.AI_API_KEY,
};
