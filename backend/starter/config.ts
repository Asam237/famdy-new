import { config } from "dotenv";

config();

export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_PORT= process.env.POSTGRES_PORT;
export const LOCALHOST = process.env.LOCALHOST;
export const DATABASE = process.env.DATABASE;
export const PORT = process.env.PORT;
