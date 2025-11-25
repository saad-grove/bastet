import express, { Request, Response } from "express";
import connectToDB from "./config/db.config";

const app = express();
const PORT = 8080;

app.get("/", (_req: Request, res: Response) => {
  res.json({ server: true });
});

connectToDB();

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
