import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser = require("body-parser");
import authRoutes from "./routes/authRoutes";
import jobsRoutes from "./routes/jobsRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import { connectDB } from "./configs/dbConfigs";
import { authenticateToken } from "./configs/authMiddleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/jobs", authenticateToken, jobsRoutes);
app.use("/applications", authenticateToken, applicationRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Futureskill backend apis are live",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
