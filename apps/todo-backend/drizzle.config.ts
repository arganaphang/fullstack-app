import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/db/schema/",
	dbCredentials: {
		// biome-ignore lint/style/noNonNullAssertion: must be non-null
		url: process.env.DATABASE_URL!,
	},
});
