import { useContext } from "react";
import { useTypedParams } from "routes/useTypedParams";
import { useGetFirmwares } from "queries/firmwares/useGetFirmwares";
import { TableContext } from "../../TableContext";
import { type Firmware } from "../../types/execution-history-test-cycle";

export const useRows = () => {
  const { productId } = useTypedParams("product/:productId/firmware");
  const { data, isLoading } = useGetFirmwares(Number(productId));
  const { order, orderBy } = useContext(TableContext);

  const rows: Firmware[] = [...data].sort((a, b) => {
    const aVal = a[orderBy as keyof Firmware];
    const bVal = b[orderBy as keyof Firmware];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  return { rows, isLoading };
};
