import type * as React from "react";
import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function strip(str: string, targetLength: number, padChar = " ") {
  if (str.length > targetLength) {
    return `${str.slice(0, targetLength - 3)}...`; // Truncate if longer
  }
  return str.padEnd(targetLength, padChar); // Pad if shorter
}


const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }: Props) => {
  return <div>
    <pre>
      {'|'}
      {' '}
      <span
        className="cursor-pointer hover:underline"
        onClick={() => onToggle(todo.id)}
      >
        [{todo.completed ? 'x' : ' '}]
      </span>
      {' '}
      {strip(todo.title, 25)}
      {'   '}
      <span
        className="text-red-300 hover:underline cursor-pointer"
        onClick={() => onDelete(todo.id)}
      >
        x
      </span>
      {' '}
      {'|'}
    </pre>
  </div>
}

export default TodoItem;
