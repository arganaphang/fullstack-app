import {
	boolean,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: serial().primaryKey(),
	title: varchar("title").notNull(),
	completed: boolean("completed").notNull().default(false),
	created_at: timestamp("created_at").notNull().defaultNow(),
});
