import { Stack } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTableInfo1, selectTableInfo2 } from "../../features/counter/counterSlice";
import DataTable from "../display/DataTable";

function TableContainer() {
	const tableInfo1 = useAppSelector(selectTableInfo1);
	const tableInfo2 = useAppSelector(selectTableInfo2);

	return (
		<Stack sx={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} direction="row" spacing="50px">
			<DataTable title="센서1" sensorData={tableInfo1} />
			<DataTable title="센서2" sensorData={tableInfo2} />
		</Stack>
	);
}

export default memo(TableContainer);
