import type { FC } from "react";
import { Typography } from "@mui/material";

type Props = {
  title: string;
};

export const TableTitle: FC<Props> = ({ title }) => {
  return (
    <Typography
      variant="h6"
      fontWeight={700}
      letterSpacing={1}
      textTransform="uppercase"
      color="text.secondary"
    >
      {title}
    </Typography>
  );
};
