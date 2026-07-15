"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubRepos = exports.getGithubUser = void 0;
const axios_1 = __importDefault(require("axios"));
const GITHUB_BASE_URL = "https://api.github.com";
const getGithubUser = async (username) => {
    const response = await axios_1.default.get(`${GITHUB_BASE_URL}/users/${username}`);
    return response.data;
};
exports.getGithubUser = getGithubUser;
const getGithubRepos = async (username) => {
    const response = await axios_1.default.get(`${GITHUB_BASE_URL}/users/${username}/repos`);
    return response.data;
};
exports.getGithubRepos = getGithubRepos;
