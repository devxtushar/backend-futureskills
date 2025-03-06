import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser = require("body-parser");
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Futureskill backend apis are live",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
