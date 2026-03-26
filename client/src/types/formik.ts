import { type FormikConfig, type FormikValues, useFormikContext } from "formik";
import { useCallback } from "react";

export type BaseFormikConfig<FormValues extends FormikValues> = Omit<
  FormikConfig<FormValues>,
  "onSubmit"
>;

/**
 * Created a typed wrapper for better autocomplete
 */

export const useExtendedFormikContext = <T extends FormikValues>() => {
  const { values, setFieldValue, ...rest } = useFormikContext<T>();

  const setTypedFieldValue = useCallback(
    <K extends keyof T>(field: K, value: T[K], shouldValidate?: boolean) => {
      setFieldValue(field as string, value, shouldValidate);
    },
    [setFieldValue],
  );

  return {
    // FORMIK PROPS
    ...rest,
    values,
    setFieldValue,
    // EXTENDED PROPS
    setTypedFieldValue,
  };
};
