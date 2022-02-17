import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0052cc",
		},
		secondary: {
			main: "#999999",
		},
		background: {
			default: "#ff0000",
		},
	},
	typography: {
		fontSize: 16,
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
});

export default theme;
