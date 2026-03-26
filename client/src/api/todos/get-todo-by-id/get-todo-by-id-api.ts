import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZTodo } from "../get-todos/types";

export const getTodoById = async (todoId: number) => {
  const todo = await services.get(ENDPOINTS.TODO_ID.replace("{todo_id}", String(todoId)), {
    schema: ZTodo,
  });

  return todo;
};
