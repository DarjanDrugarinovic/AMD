import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

type WarningAlertProps = {
  open: boolean;
  onClickNo: () => void;
  onClickYes: () => void;
  onClose: () => void;
};

export default function UnsavedChangesAlert({
  open,
  onClickNo,
  onClickYes,
  onClose,
}: WarningAlertProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      keepMounted
      maxWidth="xs"
      sx={{ zIndex: 99999 }}
    >
      {open && (
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="h5" align="center" sx={{ p: 2 }}>
            Warning
          </Typography>

          <Stack alignItems="center" spacing={3}>
            <WarningIcon
              color="primary"
              sx={{ width: 72, height: 72, fontSize: "1.75rem" }}
            />

            <Typography variant="h6" align="center">
              You have unsaved changes that will be lost if proceeded.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ pt: 2, width: 1 }}>
              <Button
                color="secondary"
                fullWidth
                onClick={onClickNo}
                variant="outlined"
              >
                Keep editing
              </Button>
              <Button
                color="primary"
                fullWidth
                variant="contained"
                onClick={onClickYes}
                autoFocus
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      )}
    </Dialog>
  );
}
