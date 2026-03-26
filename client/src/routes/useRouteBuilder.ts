import type { AllRoutes, ExtractParams } from "./useTypedParams";

export type BuildRouteArgs<Path extends AllRoutes> = [
  ExtractParams<Path>,
] extends [never]
  ? [path: Path]
  : [path: Path, params: Record<ExtractParams<Path>, string | number>];

export const useRouteBuilder = () => {
  const buildRoute = <Path extends AllRoutes>(
    ...args: BuildRouteArgs<Path>
  ): string => {
    const [path, params] = args as [
      string,
      Record<string, string | number> | undefined,
    ];
    const resolved = params
      ? path.replace(/:([^/]+)/g, (_, key) => String(params[key]))
      : path;
    return `/${resolved}`;
  };

  return { buildRoute };
};
