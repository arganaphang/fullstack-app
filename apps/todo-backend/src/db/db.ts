// Make sure to install the 'postgres' package
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined");
}
const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle({ client: queryClient });
