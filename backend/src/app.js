import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analysisRoutes from "./routes/analysis.routes";
dotenv.config();
const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://github.com",
        "chrome-extension://nolpgijnamglifppkngaekgcpefdhjlh",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "DevPlus API running 🚀",
    });
});
app.use("/api/analyze", analysisRoutes);
export default app;
