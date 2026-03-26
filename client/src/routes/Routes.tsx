import { useRoutes, type RouteObject } from "react-router";
import { RoutesConfig } from "./RoutesConfig";

export default function Routes() {
  return useRoutes([RoutesConfig as unknown as RouteObject]);
}
