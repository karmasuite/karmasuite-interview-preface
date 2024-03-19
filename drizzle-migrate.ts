import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import BetterSqlite3 from "better-sqlite3";
import path from "node:path";

const fileName = path.resolve(__dirname, "./sqlite.db");
const betterSqlite = new BetterSqlite3(fileName);
const db = drizzle(betterSqlite);

migrate(db, { migrationsFolder: "drizzle" });

betterSqlite.close();
