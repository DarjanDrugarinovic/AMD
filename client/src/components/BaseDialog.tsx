import { type ReactNode, useState } from "react";
import {
  type FormikProps,
  type FormikValues,
  useFormik,
  FormikProvider,
  type FormikHelpers,
} from "formik";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import { type BaseFormikConfig } from "types/formik";
import Divider from "@mui/material/Divider";
import UnsavedChangesAlert from "./UnsavedChangesAlert";

interface BaseDialogProps<Values extends FormikValues> {
  isOpen: boolean;
  closeDialog: () => void;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  formikConfig: BaseFormikConfig<Values>;
  children?: ((formikProps: FormikProps<Values>) => ReactNode) | ReactNode;
  title: string;
  submitDisabled?: boolean;
  loader?: boolean;
  disableValidationOnSubmit?: boolean;
}

export default function BaseDialog<Values extends FormikValues>({
  isOpen,
  closeDialog,
  onSubmit,
  formikConfig,
  children,
  title,
  submitDisabled,
  loader,
  disableValidationOnSubmit = false,
}: BaseDialogProps<Values>) {
  const formik = useFormik({
    ...formikConfig,
    onSubmit,
  });

  const [isUnsavedChangesOpen, setIsUnsavedChangesOpen] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disableValidationOnSubmit) onSubmit(formik.values, formik);
    else formik.handleSubmit(e);
  };

  const closeWithCheck = () => {
    if (formik.dirty) {
      setIsUnsavedChangesOpen(true);
      return;
    }

    finalizeClose();
  };

  const finalizeClose = () => {
    setIsUnsavedChangesOpen(false);
    closeDialog();
  };

  const dismissUnsavedChangesAlert = () => {
    setIsUnsavedChangesOpen(false);
  };

  return (
    <>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={isOpen}
        onClose={closeWithCheck}
      >
        <Box sx={{ p: 1, py: 1 }}>
          <FormikProvider value={formik}>
            <form noValidate onSubmit={handleSubmit}>
              <DialogTitle>{title}</DialogTitle>
              <Divider />
              <DialogContent>
                {loader ? <LinearProgress /> : <Box sx={{ height: "6px" }} />}
                {typeof children === "function" ? children(formik) : children}
              </DialogContent>
              <Divider />
              <DialogActions>
                <Button onClick={closeWithCheck}>Cancel</Button>
                <Button
                  type="submit"
                  disabled={submitDisabled}
                  variant="contained"
                >
                  Submit
                </Button>
              </DialogActions>
            </form>
          </FormikProvider>
        </Box>
      </Dialog>
      <UnsavedChangesAlert
        open={isUnsavedChangesOpen}
        onClickNo={dismissUnsavedChangesAlert}
        onClickYes={finalizeClose}
        onClose={dismissUnsavedChangesAlert}
      />
    </>
  );
}
