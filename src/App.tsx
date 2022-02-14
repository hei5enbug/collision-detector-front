import "./App.css"
import Layout from "./components/Layout"
import { Box } from "@mui/material"

function App(): JSX.Element {
	return (
		<Box sx={{ width: "100%", height: "100vh", backgroundColor: "#f1f1f1" }}>
			<Layout />
		</Box>
	)
}

export default App
