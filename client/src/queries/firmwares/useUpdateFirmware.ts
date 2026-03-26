import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { updateFirmware } from "api/firmwares/update-firmware/update-firmware-api";
import { type UpdateFirmware } from "api/firmwares/update-firmware/types";

export const useUpdateFirmware = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: ({ firmwareId, firmware }: { firmwareId: number; firmware: UpdateFirmware }) =>
      updateFirmware(firmwareId, firmware),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });

  return { mutate, mutateAsync, isPending };
};
