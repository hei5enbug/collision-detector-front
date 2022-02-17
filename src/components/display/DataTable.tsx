import { memo } from "react";
import { Box, Stack, StackProps, styled } from "@mui/material";
import { dataColorArray, ISensorData } from "../../interface/dataType";

interface IDataTableProps {
	sensorData: ISensorData;
}

function DataTable({ sensorData }: IDataTableProps) {
	const { accX, accY, accZ, gyroX, gyroY, gyroZ } = sensorData;

	const RowStack = (props: StackProps) => <Stack {...props} direction="row" spacing={spacing} />;

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
	});

	const DataHeader = styled(CustomBox)({
		backgroundColor: "#adadad",
	});
	const DataBody = styled(CustomBox)({
		backgroundColor: "#101010",
	});

	const spacing = "3px";
	const [colorX, colorY, colorZ] = dataColorArray;

	return (
		<Box sx={{ width: 350, boxSizing: "border-box", backgroundColor: "white", px: "10px", py: "8px", borderRadius: "10px" }}>
			<Stack spacing={spacing}>
				<RowStack>
					<DataBody>센서1</DataBody>
					<DataHeader>X</DataHeader>
					<DataHeader>Y</DataHeader>
					<DataHeader>Z</DataHeader>
				</RowStack>

				<RowStack>
					<DataHeader>충격값(g)</DataHeader>
					<DataBody sx={{ color: colorX }}>{accX}</DataBody>
					<DataBody sx={{ color: colorY }}>{accY}</DataBody>
					<DataBody sx={{ color: colorZ }}>{accZ}</DataBody>
				</RowStack>

				<RowStack>
					<DataHeader>기울기(d)</DataHeader>
					<DataBody sx={{ color: colorX }}>{gyroX}</DataBody>
					<DataBody sx={{ color: colorY }}>{gyroY}</DataBody>
					<DataBody sx={{ color: colorZ }}>{gyroZ}</DataBody>
				</RowStack>
			</Stack>
		</Box>
	);
}

export default memo(DataTable);
