import { Stack } from "@mui/material";
import { memo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTableInfo1, selectTableInfo2 } from "../../store/collisionSlice";
import DataTable from "../display/DataTable";

function TableContainer() {
	const tableInfo1 = useAppSelector(selectTableInfo1);
	const tableInfo2 = useAppSelector(selectTableInfo2);

	return (
		<Stack sx={{ height: "100%", alignItems: "center" }} direction="row" spacing="50px">
			<DataTable title="센서1" sensorData={tableInfo1} />
			<DataTable title="센서2" sensorData={tableInfo2} />
		</Stack>
	);
}

export default memo(TableContainer);
