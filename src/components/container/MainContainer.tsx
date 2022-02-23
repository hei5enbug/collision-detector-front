import { memo } from "react";
import { Box, Stack } from "@mui/material";
import GraphContainer from "./GraphContainer";
import TableContainer from "./TableContainer";
import ValueSender from "../ValueSender";
import Menu from "../Menu";

function MainContainer(): JSX.Element {
	return (
		<Stack sx={{ alignItems: "center", width: "100%", height: "90%", marginTop: "20px" }} direction="column" spacing="10px">
			<Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
				<Menu />
				<TableContainer />
				<ValueSender />
			</Box>

			<GraphContainer />
		</Stack>
	);
}
export default memo(MainContainer);
