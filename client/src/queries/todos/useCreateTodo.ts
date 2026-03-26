import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { createTodo } from "api/todos/create-todo/create-todo-api";
import { type CreateTodo } from "api/todos/create-todo/types";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (todo: CreateTodo) => createTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
