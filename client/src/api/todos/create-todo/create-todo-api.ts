import services from "api/services";
import { ENDPOINTS } from "api/endpoints";
import { ZTodo } from "../get-todos/types";
import { type CreateTodo } from "./types";

export const createTodo = async (todo: CreateTodo) => {
  const createdTodo = await services.post(ENDPOINTS.TODOS, todo, {
    schema: ZTodo,
  });

  return createdTodo;
};
