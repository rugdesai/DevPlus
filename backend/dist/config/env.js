"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ENV = {
    PORT: Number(process.env.PORT) || 5050,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    DATABASE_URL: process.env.DATABASE_URL,
    AI_API_KEY: process.env.AI_API_KEY,
};
