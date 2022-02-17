import { memo } from "react";
import { Box, Stack } from "@mui/material";
import GraphContainer from "./GraphContainer";
import TableContainer from "./TableContainer";
import PortController from "../PortController";
import ValueSender from "../ValueSender";

function MainContainer(): JSX.Element {
	return (
		<Stack sx={{ alignItems: "center", width: "100%", height: "80%", marginY: "20px" }} direction="column" spacing="10px">
			<Box sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
				<PortController />
				<TableContainer />
				<ValueSender />
			</Box>

			<GraphContainer />
		</Stack>
	);
}
export default memo(MainContainer);
