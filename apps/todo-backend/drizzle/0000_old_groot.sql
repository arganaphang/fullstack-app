CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
