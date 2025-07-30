// db.js
import dotenv from "dotenv";
dotenv.config();

import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL não está definido no .env");

export const sql = postgres(url, { ssl: "require" });
