import Snackbar, { type SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useErrorSnackbarProviderStore } from "../store/useErrorSnackbarProviderStore";
import { type FC, type PropsWithChildren, type SyntheticEvent } from "react";

export const ErrorSnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const error = useErrorSnackbarProviderStore((state) => state.errorMessage);
  const setErrorMessage = useErrorSnackbarProviderStore(
    (state) => state.setErrorMessage,
  );

  const handleClose = (
    _event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
  };

  return (
    <>
      {children}
      {error && (
        <Snackbar
          message={error}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          autoHideDuration={6000}
          open={!!error}
          onClose={handleClose}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      )}
    </>
  );
};
