import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { createFirmware } from "api/firmwares/create-firmware/create-firmware-api";
import { type CreateFirmware } from "api/firmwares/create-firmware/types";

export const useCreateFirmware = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (firmware: CreateFirmware) => createFirmware(firmware),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
