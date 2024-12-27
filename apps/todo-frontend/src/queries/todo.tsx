import { Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BASE_URL = 'http://localhost:3000/todos';

const addTodo = (title: string) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify({ title }),
  });
}

export const useMutateAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });
}
const getTodos = async () => {
  const response = await fetch(`${BASE_URL}`);
  const result = await response.json();
  return result.data as Todo[];
}

export const useQueryGetTodos = () => useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
});

const toggleTodo = (id: number) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH'
  });
}

export const useMutateToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });
}

const deleteTodo = (id: number) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
}

export const useMutateDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });
}
