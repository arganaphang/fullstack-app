import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleCompletedTodo,
} from "@/todo";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from 'hono/cors'

const app = new Hono();
app.use('/*', cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Route Todos
const todos = new Hono();

todos.get("/", async (c) => {
  return c.json({ data: await getTodos(), message: "get all todo" });
});

todos.post("/", async (c) => {
  const { title } = await c.req.json();
  const todo = (await createTodo(title))?.[0];
  return c.json({ message: "todo created", data: todo });
});

todos.patch("/:id", async (c) => {
  const { id } = c.req.param();
  const todo = (await toggleCompletedTodo(Number(id)))?.[0];
  return c.json({ message: "todo updated", data: todo });
});

todos.delete("/:id", async (c) => {
  const { id } = c.req.param();
  await deleteTodo(Number(id));
  return c.json({ message: "todo deleted" });
});

app.route("/todos", todos);

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
