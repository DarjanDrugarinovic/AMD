import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { updateProduct } from "api/products/update-product/update-product-api";
import { type UpdateProduct } from "api/products/update-product/types";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: ({ productId, product }: { productId: number; product: UpdateProduct }) =>
      updateProduct(productId, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
