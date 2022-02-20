import { Box } from "@mui/material";
import Header from "./header/Header";
import MainContainer from "./container/MainContainer";

export default function Layout(): JSX.Element {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				height: "100%",
				padding: "10px",
				boxSizing: "border-box",
			}}
		>
			<Header />
			<MainContainer />
		</Box>
	);
}
