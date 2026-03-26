import { type FC, type PropsWithChildren, useCallback } from "react";
import {
  QueryClientProvider as RQQueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { useErrorSnackbarProviderStore } from "../store/useErrorSnackbarProviderStore";

function parseError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unknown error occurred";
}

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const setErrorMessage = useErrorSnackbarProviderStore(
    (state) => state.setErrorMessage,
  );

  const handleError = useCallback(
    (error: unknown) => {
      setErrorMessage(parseError(error));
    },
    [setErrorMessage],
  );

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: handleError,
    }),
  });

  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};
