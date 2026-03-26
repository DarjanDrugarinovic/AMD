import { TableHead } from "./head/TableHead";
import { TableContextProvider } from "./TableContext";
import { TableBody } from "./body/TableBody";
import { TableContainer } from "components/table/TableContainer";

const FirmwareTable = () => {
  return (
    <TableContextProvider>
      <TableContainer title="Firmwares" sx={{ margin: 1 }}>
        <TableHead />
        <TableBody />
      </TableContainer>
    </TableContextProvider>
  );
};

export default FirmwareTable;
