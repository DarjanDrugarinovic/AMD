import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZTodo } from "../get-todos/types";
import { type UpdateTodo } from "./types";

export const updateTodo = async (todoId: number, todo: UpdateTodo) => {
  const updatedTodo = await services.put(ENDPOINTS.TODO_ID.replace("{todo_id}", String(todoId)), todo, {
    schema: ZTodo,
  });

  return updatedTodo;
};
