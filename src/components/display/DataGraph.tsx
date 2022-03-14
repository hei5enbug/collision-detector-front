import { memo } from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { dataColorArray, ISensorData } from "../../interface/dataType";
import { setTableInfo1, setTableInfo2 } from "../../store/collisionSlice";
import { useAppDispatch } from "../../app/hooks";
import { ResponsiveLine, Point } from "@nivo/line";

interface IDataGraphProps {
	sx: SxProps;
	title: string;
	sensorDataList: ISensorData[];
}

function DataGraph({ sx, title, sensorDataList }: IDataGraphProps) {
	const dispatch = useAppDispatch();

	const tempData = [
		{
			id: "X",
			data: sensorDataList.map(({ detectTime, accX }) => {
				return { x: detectTime, y: accX };
			}),
		},
		{
			id: "Y",
			data: sensorDataList.map(({ detectTime, accY }) => {
				return { x: detectTime, y: accY };
			}),
		},
		{
			id: "Z",
			data: sensorDataList.map(({ detectTime, accZ }) => {
				return { x: detectTime, y: accZ };
			}),
		},
	];

	const handleClickPoint = (point: Point, event: React.MouseEvent) => {
		event.preventDefault();
		const { index } = point;
		const changeData = sensorDataList[index % 100];

		if (title === "센서1") {
			dispatch(setTableInfo1(changeData));
		} else if (title === "센서2") {
			dispatch(setTableInfo2(changeData));
		}
	};

	const LineGraph = () => (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
			}}
		>
			<ResponsiveLine
				useMesh
				onClick={handleClickPoint}
				data={tempData}
				colors={dataColorArray}
				pointLabelYOffset={1}
				margin={{ top: 10, right: 30, bottom: 10, left: 100 }}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: -0.2,
					max: 1.2,
					reverse: false,
				}}
				yFormat=" >-.2f"
				axisTop={null}
				axisRight={null}
				axisBottom={null}
				axisLeft={null}
				pointSize={6}
				pointBorderWidth={1}
				legends={[
					{
						anchor: "left",
						direction: "column",
						translateX: -10,
						translateY: 30,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: "circle",
					},
				]}
			/>
		</Box>
	);

	return (
		<Box sx={{ ...sx, display: "flex", boxSizing: "border-box", backgroundColor: "#99ff99", padding: "10px", borderRadius: "10px" }}>
			<Typography
				sx={{
					position: "absolute",
					width: 50,
					fontSize: 18,
					fontWeight: 600,
					marginX: "15px",
					marginTop: "20px",
				}}
			>
				{title}
			</Typography>

			<LineGraph />
		</Box>
	);
}

export default memo(DataGraph);
