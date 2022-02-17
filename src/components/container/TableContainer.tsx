import { Stack } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTestData1, selectTestData2 } from "../../features/counter/counterSlice";
import DataTable from "../display/DataTable";

function TableContainer() {
	const tempDataList1 = useAppSelector(selectTestData1);
	const tempDataList2 = useAppSelector(selectTestData2);

	return (
		<Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} direction="row" spacing="50px">
			<DataTable title="센서1" sensorData={tempDataList1[0]} />
			<DataTable title="센서2" sensorData={tempDataList2[0]} />
		</Stack>
	);
}

export default memo(TableContainer);
