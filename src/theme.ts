import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#0052cc",
		},
		secondary: {
			main: "#edf2ff",
		},
	},
	typography: {
		fontSize: 20,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"sans-serif",
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
		].join(","),
	},
})

export default theme
