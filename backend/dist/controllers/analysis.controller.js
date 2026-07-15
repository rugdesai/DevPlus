"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeUser = void 0;
const developer_service_1 = require("../services/developer.service");
const analyzeUser = async (req, res) => {
    try {
        const username = req.params.username;
        if (!username) {
            return res.status(400).json({
                message: "Username is required"
            });
        }
        const result = await (0, developer_service_1.analyzeDeveloper)(username);
        return res.json(result);
    }
    catch (error) {
        if (error.response?.status === 404) {
            return res.status(404).json({
                message: "GitHub user not found"
            });
        }
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
exports.analyzeUser = analyzeUser;
