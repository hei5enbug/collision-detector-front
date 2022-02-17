import { memo } from "react";
import { Box } from "@mui/material";
import DataTable from "./display/DataTable";
import getTestData from "../lib/testUtils";
import GraphContainer from "./container/GraphContainer";

function MainContainer(): JSX.Element {
	const tempDataList = getTestData(100);

	return (
		<Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
			<DataTable sensorData={tempDataList[1]} />
			<GraphContainer />
		</Box>
	);
}
export default memo(MainContainer);
