import { useColumns } from "./useColumns";
import { TableBodyWrapper } from "components/table/TableBodyWrapper";
import type { Product } from "../types/product";
import { useRows } from "../hooks/useRows/useRows";
import { useTypedParams } from "routes/useTypedParams";
import { useTypedNavigate } from "routes/useTypedNavigate";

export const TableBody = () => {
  const { rows } = useRows();
  const columns = useColumns();
  const { productId } = useTypedParams("product/:productId/firmware");
  const { navigate } = useTypedNavigate();

  const handleTableRowClick = (product: Product) => {
    navigate("product/:productId/firmware", {
      productId: product.id,
    });
  };

  return (
    <TableBodyWrapper
      columns={columns}
      rows={rows}
      getRowKey={(row: Product) => row.id}
      onRowClick={handleTableRowClick}
      selectedRowKey={Number(productId)}
    />
  );
};
