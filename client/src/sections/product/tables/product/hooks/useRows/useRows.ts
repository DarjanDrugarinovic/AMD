import { useContext } from "react";
import { useGetProducts } from "queries/products/useGetProducts";
import { TableContext } from "../../TableContext";
import { type Product } from "../../types/product";

export const useRows = () => {
  const { data, isLoading } = useGetProducts();
  const { order, orderBy } = useContext(TableContext);

  const rows: Product[] = [...data].sort((a, b) => {
    const aVal = a[orderBy as keyof Product];
    const bVal = b[orderBy as keyof Product];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  return { rows, isLoading };
};
