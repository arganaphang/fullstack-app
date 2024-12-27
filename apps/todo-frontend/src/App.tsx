import TodoItem from "@/components/todo-item";
import type * as React from "react";
import { useMutateAddTodo, useMutateDeleteTodo, useMutateToggleTodo, useQueryGetTodos } from "@/queries/todo";

const App: React.FC = () => {
  const queryTodos = useQueryGetTodos();
  const mutateToggle = useMutateToggleTodo();
  const mutateAdd = useMutateAddTodo();
  const mutateDelete = useMutateDeleteTodo();

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      title: HTMLInputElement
    }
    const title = formElements.title.value;
    mutateAdd.mutate(title, {
      onSuccess: () => {
        form.reset();
      }
    });
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <main>
        <pre>
          +-----------------------------------+<br />
          |             To-Do List            |<br />
          +-----------------------------------+<br />
        </pre>
        <form
          className="flex justify-between items-stretch"
          onSubmit={onSubmit}
        >
          <pre>|</pre>
          <input
            className="flex-1 text-lg px-2"
            type="text"
            placeholder="Input todo"
            name="title"
            id="title"
            required
          />
          <pre>|</pre>
        </form>
        <pre>+-----------------------------------+</pre>
        <ul>
          {queryTodos.data?.map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={mutateToggle.mutate}
              onDelete={mutateDelete.mutate}
            />
          )}
        </ul>
        <pre>+-----------------------------------+</pre>
      </main>
    </div>
  );
};

export default App;
