import { useNavigate } from "react-router";
import type { AllRoutes } from "./useTypedParams";
import { type BuildRouteArgs, useRouteBuilder } from "./useRouteBuilder";

export const useTypedNavigate = () => {
  const nav = useNavigate();
  const { buildRoute } = useRouteBuilder();

  const navigate = <Path extends AllRoutes>(
    ...args: BuildRouteArgs<Path>
  ): void => {
    nav(buildRoute(...(args as [AllRoutes, Record<string, string | number>])));
  };

  return { navigate };
};
