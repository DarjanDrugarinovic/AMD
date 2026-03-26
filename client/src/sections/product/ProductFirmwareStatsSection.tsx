import { useMemo } from "react";
import { Group, Panel } from "react-resizable-panels";
import { useTypedParams } from "routes/useTypedParams";
import ProductTable from "./tables/product/ProductTable";
import FirmwareTable from "./tables/firmware/FirmwareTable";
import { SectionLayout } from "components/SectionLayout";
import PanelSeparator from "components/PanelSeparator";
import StatisticTable from "./tables/statistic/StatisticTable";

const ProductFirmwareStatsSection = () => {
  const { productId, firmwareId } = useTypedParams(
    "product/:productId/firmware/:firmwareId",
  );
  const showProducts = useMemo(() => !!productId, [productId]);
  const showFirmwares = useMemo(
    () => showProducts && !!firmwareId,
    [showProducts, firmwareId],
  );

  return (
    <SectionLayout>
      <Group style={{ height: "100%" }}>
        <Panel defaultSize="50%">
          <Group orientation="vertical" style={{ height: "100%" }}>
            <Panel defaultSize={showProducts ? "50%" : "100%"}>
              <ProductTable />
            </Panel>
            {showProducts && <PanelSeparator orientation="horizontal" />}
            {showProducts && (
              <Panel defaultSize="50%">
                <FirmwareTable />
              </Panel>
            )}
          </Group>
        </Panel>
        {showFirmwares && <PanelSeparator />}
        {showFirmwares && (
          <Panel defaultSize="50%">
            <StatisticTable />
          </Panel>
        )}
      </Group>
    </SectionLayout>
  );
};

export default ProductFirmwareStatsSection;
