import { memo } from "react"
import { Box, Stack, StackProps, styled } from "@mui/material"

function DataTable() {
	const spacing = "3px"
	const RowStack = (props: StackProps) => <Stack {...props} direction="row" spacing={spacing} />

	const CustomBox = styled(Box)({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 80,
		height: 30,
		fontSize: 14,
		fontWeight: 600,
		textAlign: "center",
		color: "white",
		borderRadius: "5px",
	})

	const DataHeader = styled(CustomBox)({
		backgroundColor: "#adadad",
	})
	const DataBody = styled(CustomBox)({
		backgroundColor: "#101010",
	})

	return (
		<Box sx={{ backgroundColor: "white", padding: "10px" }}>
			<Stack spacing={spacing}>
				<RowStack>
					<DataBody>센서1</DataBody>
					<DataHeader>X</DataHeader>
					<DataHeader>Y</DataHeader>
					<DataHeader>Z</DataHeader>
				</RowStack>

				<RowStack>
					<DataHeader>충격값</DataHeader>
					<DataBody sx={{ color: "red" }}>0</DataBody>
					<DataBody sx={{ color: "#2bff05" }}>0</DataBody>
					<DataBody sx={{ color: "#00bfff" }}>0</DataBody>
				</RowStack>

				<RowStack>
					<DataHeader>기울기</DataHeader>
					<DataBody sx={{ color: "red" }}>0</DataBody>
					<DataBody sx={{ color: "#2bff05" }}>0</DataBody>
					<DataBody sx={{ color: "#00bfff" }}>0</DataBody>
				</RowStack>
			</Stack>
		</Box>
	)
}

export default memo(DataTable)
