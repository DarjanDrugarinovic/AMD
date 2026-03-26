import { TableHead } from "./head/TableHead";
import { TableContextProvider } from "./TableContext";
import { TableBody } from "./body/TableBody";
import { TableContainer } from "components/table/TableContainer";

const StatisticTable = () => {
  return (
    <TableContextProvider>
      <TableContainer title="Statistics" sx={{ margin: 1 }}>
        <TableHead />
        <TableBody />
      </TableContainer>
    </TableContextProvider>
  );
};

export default StatisticTable;
