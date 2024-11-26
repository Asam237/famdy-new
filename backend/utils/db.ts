import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  LOCALHOST,
  POSTGRES_PORT,
  DATABASE,
} from "../starter/config";

export const pool = new pg.Pool({
  connectionString: `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${LOCALHOST}:${POSTGRES_PORT}/${DATABASE}`,
});

export const db = drizzle(pool);
