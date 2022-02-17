import { Stack } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTestData1, selectTestData2 } from "../../features/counter/counterSlice";
import DataGraph from "../display/DataGraph";

function GraphContainer() {
	const tempDataList1 = useAppSelector(selectTestData1);
	const tempDataList2 = useAppSelector(selectTestData2);

	return (
		<Stack sx={{ width: "100%", alignItems: "center" }} spacing="20px">
			<DataGraph sx={{ width: "90%", height: 250 }} title="센서1" sensorDataList={tempDataList1} />
			<DataGraph sx={{ width: "90%", height: 250 }} title="센서2" sensorDataList={tempDataList2} />
		</Stack>
	);
}

export default memo(GraphContainer);
