import { TableHead } from "./head/TableHead";
import { TableContextProvider } from "./TableContext";
import { TableBody } from "./body/TableBody";
import { TableContainer } from "components/table/TableContainer";

const ProductTable = () => {
  return (
    <TableContextProvider>
      <TableContainer title="Products" sx={{ margin: 1 }}>
        <TableHead />
        <TableBody />
      </TableContainer>
    </TableContextProvider>
  );
};

export default ProductTable;
