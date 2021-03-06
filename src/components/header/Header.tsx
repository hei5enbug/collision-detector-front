import { Box, Typography } from "@mui/material";
import { flexCenter } from "../../lib/styleUtil";
import Timer from "./Timer";

export default function Header(): JSX.Element {
	return (
		<Box sx={{ ...flexCenter(), width: "100%", height: "10%" }}>
			<Box sx={{ ...flexCenter(), width: 500, height: 50, backgroundColor: "#94cdff", border: "1px solid white" }}>
				<Typography sx={{ color: "white", fontSize: 24, fontWeight: 600 }}>충돌 감지 모니터링</Typography>
			</Box>

			<Timer />
		</Box>
	);
}
