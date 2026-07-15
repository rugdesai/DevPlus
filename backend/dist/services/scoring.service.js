"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDevScore = void 0;
const calculateDevScore = (analytics) => {
    let score = 0;
    // Repository activity score (30 points)
    score += Math.min(analytics.totalRepositories * 3, 30);
    // Community impact score (40 points)
    score += Math.min(analytics.totalStars / 10, 40);
    // Language diversity score (20 points)
    score += Math.min(analytics.topLanguages.length * 5, 20);
    // Fork impact score (10 points)
    score += Math.min(analytics.totalForks / 20, 10);
    return Math.round(score);
};
exports.calculateDevScore = calculateDevScore;
