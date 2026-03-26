import ErrorBoundaryProvider from "providers/ErrorBoundaryProvider";
import { ErrorSnackbarProvider } from "providers/ErrorSnackbarProvider";
import { QueryClientProvider } from "providers/QueryClientProvider";
import { RouterProvider } from "providers/RouterProvider";
import Routes from "routes/Routes";

function App() {
  return (
    <ErrorBoundaryProvider>
      <ErrorSnackbarProvider>
        <QueryClientProvider>
          <RouterProvider>
            <Routes />
          </RouterProvider>
        </QueryClientProvider>
      </ErrorSnackbarProvider>
    </ErrorBoundaryProvider>
  );
}

export default App;
