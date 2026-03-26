import { useColumns } from "./useColumns";
import { TableBodyWrapper } from "components/table/TableBodyWrapper";
import type { Firmware } from "../types/execution-history-test-cycle";
import { useRows } from "../hooks/useRows/useRows";
import { useTypedParams } from "routes/useTypedParams";
import { useTypedNavigate } from "routes/useTypedNavigate";

export const TableBody = () => {
  const { rows } = useRows();
  const columns = useColumns();
  const { productId, firmwareId } = useTypedParams(
    "product/:productId/firmware/:firmwareId",
  );
  const { navigate } = useTypedNavigate();

  const handleTableRowClick = (firmware: Firmware) => {
    if (!productId) return;

    navigate("product/:productId/firmware/:firmwareId", {
      productId,
      firmwareId: firmware.id,
    });
  };

  return (
    <TableBodyWrapper
      columns={columns}
      rows={rows}
      getRowKey={(row: Firmware) => row.id}
      onRowClick={handleTableRowClick}
      selectedRowKey={Number(firmwareId)}
    />
  );
};
