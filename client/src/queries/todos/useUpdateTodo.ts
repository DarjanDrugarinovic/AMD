import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { updateTodo } from "api/todos/update-todo/update-todo-api";
import { type UpdateTodo } from "api/todos/update-todo/types";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: ({ todoId, todo }: { todoId: number; todo: UpdateTodo }) =>
      updateTodo(todoId, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
