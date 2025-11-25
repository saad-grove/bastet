import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

app.get("/", (_req: Request, res: Response) => {
  res.json({ server: true });
});

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
