import { useParams } from "react-router";
import { RoutesConfig } from "./RoutesConfig";

/** Join a prefix and a segment, collapsing the leading "/" levels. */
type JoinPath<Prefix extends string, P extends string> = Prefix extends "" | "/"
  ? P
  : `${Prefix}/${P}`;

/** Extract all :param names from a full joined path string. */
export type ExtractParams<P extends string> =
  P extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<`/${Rest}`>
    : P extends `${string}:${infer Param}`
      ? Param
      : never;

/** Recursively extract every fully-joined path as a string union. */
type ExtractPaths<T, Prefix extends string = ""> = T extends {
  path: infer P extends string;
  children?: infer C;
}
  ?
      | JoinPath<Prefix, P>
      | (C extends readonly unknown[]
          ? ExtractPaths<C[number], JoinPath<Prefix, P>>
          : never)
  : T extends { children?: infer C }
    ? C extends readonly unknown[]
      ? ExtractPaths<C[number], Prefix>
      : never
    : never;

export type AllRoutes = ExtractPaths<typeof RoutesConfig>;

export function useTypedParams<Path extends AllRoutes>(path: Path) {
  void path;
  return useParams<
    ExtractParams<typeof path> extends never
      ? Record<never, never>
      : { [K in ExtractParams<typeof path> & string]: string }
  >();
}
