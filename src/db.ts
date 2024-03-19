import BetterSqlite3 from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "node:path";
import * as schema from "./schema";
import * as tables from "./schema/tables";

const fileName = path.resolve(__dirname, "../sqlite.db");
const sqlite = new BetterSqlite3(fileName);

export const db = Object.assign(drizzle(sqlite, { schema }), tables);
