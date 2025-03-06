import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser = require("body-parser");
import authRoutes from "./routes/authRoutes";
import jobsRoutes from "./routes/jobsRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import { connectDB } from "./configs/dbConfigs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/jobs", jobsRoutes);
app.use("/applications", applicationRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Futureskill backend apis are live",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
