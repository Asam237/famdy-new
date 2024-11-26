import express from "express";
import { PORT } from "./starter/config";
import { connectToDatabase } from "./starter/database";

const app = express();
connectToDatabase();

export const server = app.listen(PORT, () => {
  console.log(`[server]: connected to ${PORT}`);
});
