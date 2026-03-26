import { createContext, useState } from "react";
import type { FC, ReactNode, Dispatch, SetStateAction } from "react";
import type { Id, Order } from "./TableConfig";

export type TableContextProps = {
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
    <TableContext.Provider value={{ order, setOrder, orderBy, setOrderBy }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableContextProvider };
