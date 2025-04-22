const path = require("node:path");

/** @type {import("drizzle-kit").Config} */
const config = {
    dialect: "sqlite",
    dbCredentials: {
        url: path.resolve(__dirname, "./sqlite.db"),
    },
    schema: "./src/schema/index.ts",
    strict: true,
    out: "./drizzle",
};

export default config;
