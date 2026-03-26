import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getTodos } from "api/todos/get-todos/get-todos-api";

export const useGetTodos = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getTodos(),
    initialData: [],
  });

  return { data, isLoading };
};
