import { Box } from "@mui/material"
import Footer from "./Footer"
import Header from "./Header/Header"
import MainContainer from "./MainContainer"

export default function Layout(): JSX.Element {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", padding: "10px" }}>
			<Header />
			<MainContainer />
			<Footer />
		</Box>
	)
}