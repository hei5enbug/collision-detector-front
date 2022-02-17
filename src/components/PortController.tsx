import { memo, useState } from "react";
import { Stack, MenuItem, Button, Select, Typography, styled } from "@mui/material";
import { flexCenter } from "../lib/styleUtil";

function PortController() {
	const [port, setPort] = useState("COM1");

	const handleChange = (value: string) => {
		setPort(value);
	};

	const CustomButton = styled(Button)({
		color: "#ffffff",
		minWidth: 0,
		fontSize: 14,
		fontWeight: 700,
		padding: "0 10px",
		":hover": {
			backgroundColor: "secondary",
		},
	});

	return (
		<Stack sx={{ ...flexCenter(), flexDirection: "column", width: 200 }} spacing="5px">
			<Typography sx={{ fontWeight: 600 }}>[통신포트]</Typography>

			<Select
				sx={{
					height: 30,
					"& .MuiInputBase-root": {
						width: 100,
						borderRadius: 4,
						fontSize: 16,
						fontWeight: 600,
						padding: 0,
					},
					"& .MuiOutlinedInput-input": {
						width: 60,
						fontSize: 16,
						padding: "0 10px",
					},
				}}
				value={port}
				onChange={({ target }) => handleChange(target.value)}
			>
				<MenuItem value={"COM1"}>COM1</MenuItem>
				<MenuItem value={"COM2"}>COM2</MenuItem>
				<MenuItem value={"COM3"}>COM3</MenuItem>
			</Select>

			<Stack direction="row" spacing="10px">
				<CustomButton variant="contained" color="secondary">
					연결
				</CustomButton>
				<CustomButton variant="contained" color="secondary">
					끊기
				</CustomButton>
			</Stack>
		</Stack>
	);
}

export default memo(PortController);
