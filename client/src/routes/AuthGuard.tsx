import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { useRouteBuilder } from "./useRouteBuilder";

export const AuthGuard = () => {
  const token = useAuthStore((state) => state.token);
  const { buildRoute } = useRouteBuilder();
  const route = buildRoute("login");

  if (!token) return <Navigate replace to={route} />;

  return <Outlet />;
};
