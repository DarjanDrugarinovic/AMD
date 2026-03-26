import { type FC, type ReactNode, useState } from "react";
import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Id, Order } from "./TableConfig";

export type TableContextProps = {
  // sort-row
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
  orderBy: Id;
  setOrderBy: Dispatch<SetStateAction<Id>>;
};

const TableContext = createContext({} as TableContextProps);

type Props = {
  children?: ReactNode;
};

const TableContextProvider: FC<Props> = ({ children }) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<Id>("id");

  return (
    <TableContext.Provider
      value={{
        order,
        setOrder,
        orderBy,
        setOrderBy,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableContextProvider };
