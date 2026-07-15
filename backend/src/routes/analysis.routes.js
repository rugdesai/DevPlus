import express from "express";
import { analyzeUser } from "../controllers/analysis.controller";
const router = express.Router();
router.get("/:username", analyzeUser);
export default router;
