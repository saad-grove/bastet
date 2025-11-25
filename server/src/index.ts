import express, { Request, Response } from "express";
import cors from "cors";
import connectToDB from "./config/db.config";
import mainRouter from "./routes/index.route";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({ server: true });
});

app.use("/api", mainRouter);

connectToDB();

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
