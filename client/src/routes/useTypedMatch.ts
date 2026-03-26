import { useMatch } from "react-router";
import type { AllRoutes } from "./useTypedParams";

export const useTypedMatch = <Path extends AllRoutes>(path: Path) =>
  useMatch(path);
