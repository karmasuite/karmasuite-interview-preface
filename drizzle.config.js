const path = require("node:path");

/** @type {import("drizzle-kit").Config} */
const config = {
    dbCredentials: {
        url: path.resolve(__dirname, "./sqlite.db"),
    },
    driver: "better-sqlite",
    schema: "./src/schema/index.ts",
    strict: true,
    out: "./drizzle",
};

export default config;
