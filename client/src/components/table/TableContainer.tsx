import type { FC, PropsWithChildren } from "react";
import {
  Paper,
  type SxProps,
  Stack,
  Table as TableMui,
  TableContainer as TableContainerMui,
  type Theme,
} from "@mui/material";
import { TableTitle } from "./TableTitle";

type Props = {
  sx?: SxProps<Theme>;
  title?: string;
};

export const TableContainer: FC<PropsWithChildren<Props>> = ({
  children,
  sx,
  title,
}) => {
  return (
    <Stack sx={{ ...sx }}>
      {title && <TableTitle title={title} />}
      <Paper elevation={2}>
        <TableContainerMui component="div">
          <TableMui>{children}</TableMui>
        </TableContainerMui>
      </Paper>
    </Stack>
  );
};
