import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./query-key";
import { getFirmwareById } from "api/firmwares/get-firmware-by-id/get-firmware-by-id-api";

export const useGetFirmwareById = (firmwareId: number | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, firmwareId],
    queryFn: () => getFirmwareById(firmwareId!),
    enabled: !!firmwareId,
  });

  return { data, isLoading };
};
