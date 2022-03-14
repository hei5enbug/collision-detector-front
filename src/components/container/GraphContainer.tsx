/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "@mui/material";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTestData1, selectTestData2, getCollisionList } from "../../store/collisionSlice";
import DataGraph from "../display/DataGraph";

function GraphContainer() {
	const dispatch = useAppDispatch();
	const tempDataList1 = useAppSelector(selectTestData1);
	const tempDataList2 = useAppSelector(selectTestData2);

	useEffect(() => {
		dispatch(getCollisionList());
	}, []);

	return (
		<Stack sx={{ width: "100%", height: "100%", alignItems: "center" }} spacing="20px">
			<DataGraph sx={{ width: "100%", height: 300 }} title="센서1" sensorDataList={tempDataList1} />
			<DataGraph sx={{ width: "100%", height: 300 }} title="센서2" sensorDataList={tempDataList2} />
		</Stack>
	);
}

export default memo(GraphContainer);
