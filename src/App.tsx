import Layout from "./components/Layout"
import { Box, ThemeProvider } from "@mui/material"
import theme from "./theme"

function App(): JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: "100%", height: "100vh", backgroundColor: "#f1f1f1" }}>
				<Layout />
			</Box>
		</ThemeProvider>
	)
}

export default App
