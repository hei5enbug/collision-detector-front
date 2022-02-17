import { Stack } from "@mui/material";
import { memo } from "react";
import getTestData from "../../lib/testUtils";
import DataGraph from "../display/DataGraph";

function GraphContainer() {
	const tempDataList = getTestData(100);
	const tempDataList2 = getTestData(100);

	return (
		<Stack>
			<DataGraph sx={{ width: "90%", height: 300 }} title="센서1" sensorDataList={tempDataList} />
			<DataGraph sx={{ width: "90%", height: 300 }} title="센서2" sensorDataList={tempDataList2} />
		</Stack>
	);
}

export default memo(GraphContainer);
