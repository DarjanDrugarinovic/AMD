import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { createProduct } from "api/products/create-product/create-product-api";
import { type CreateProduct } from "api/products/create-product/types";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (product: CreateProduct) => createProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
