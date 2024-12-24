import { db } from "@/db/db";
import { todos } from "@/db/schema/todo";
import { eq, not } from "drizzle-orm";

export const getTodos = async () => {
	return db.select().from(todos);
};

export const getTodo = async (id: number) => {
	const todo = await db.select().from(todos).where(eq(todos.id, id)).limit(1);
	return todo[0];
};

export const createTodo = async (title: string) => {
	return db.insert(todos).values({ title }).returning();
};

export const updateTodo = async (id: number, title: string) => {
	return db
		.update(todos)
		.set({ title, completed: not(todos.completed) })
		.where(eq(todos.id, id));
};

export const toggleCompletedTodo = async (id: number) => {
	return db
		.update(todos)
		.set({ completed: not(todos.completed) })
		.where(eq(todos.id, id))
		.returning();
};

export const deleteTodo = async (id: number) => {
	return db.delete(todos).where(eq(todos.id, id));
};
