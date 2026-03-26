import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getTodoById } from "api/todos/get-todo-by-id/get-todo-by-id-api";

export const useGetTodoById = (todoId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, todoId],
    queryFn: () => getTodoById(todoId!),
    enabled: !!todoId,
  });

  return { data, isLoading };
};
