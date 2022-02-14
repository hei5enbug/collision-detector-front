import { memo } from "react"
import { Box } from "@mui/material"
import DataTable from "./TableContainer/DataTable"

function MainContainer(): JSX.Element {
	return (
		<Box>
			<DataTable />
		</Box>
	)
}
export default memo(MainContainer)
