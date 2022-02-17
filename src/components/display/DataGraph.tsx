/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from "react";
import { ResponsiveLineCanvas } from "@nivo/line";
import { Box, SxProps, Typography } from "@mui/material";
import { dataColorArray, ISensorData } from "../../interface/dataType";

interface IDataGraphProps {
	sx: SxProps;
	title: string;
	sensorDataList: ISensorData[];
}

function DataGraph({ sx, title, sensorDataList }: IDataGraphProps) {
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

	const LineGraph = () => (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				height: "100%",
				backgroundColor: "white",
			}}
		>
			<ResponsiveLineCanvas
				data={tempData}
				colors={dataColorArray}
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
				pointSize={1}
				pointBorderWidth={1}
				legends={[
					{
						anchor: "left",
						direction: "column",
						translateX: -80,
						translateY: 30,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: "diamond",
						effects: [
							{
								on: "hover",
								style: {
									itemBackground: "rgba(0, 0, 0, .03)",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</Box>
	);

	return (
		<Box sx={{ ...sx, display: "flex", boxSizing: "border-box", backgroundColor: "#99ff99", padding: "20px", borderRadius: "10px" }}>
			<Typography sx={{ position: "absolute", width: 50, fontSize: 18, fontWeight: 600, marginX: "10px", marginTop: "20px" }}>{title}</Typography>

			<LineGraph />
		</Box>
	);
}

export default memo(DataGraph);
