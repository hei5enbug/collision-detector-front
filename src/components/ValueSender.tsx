/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Button, Box, TextField, TextFieldProps } from "@mui/material";
import { flexCenter } from "../lib/styleUtil";

function ValueSender() {
	const [accValue, setAccValue] = useState("");
	const [gyroValue, setGyroValue] = useState("");

	const CustomButton = styled(Button)({
		color: "#ffffff",
		height: "90%",
		minWidth: 60,
		fontSize: 14,
		fontWeight: 700,
		padding: 0,
		":hover": {
			backgroundColor: "secondary",
		},
	});

	// const CustomTextField = styled((props: TextFieldProps) => <TextField {...props} />)({
	// 	height: 40,
	// 	fontSize: 10,
	// 	// "& .MuiInputLabel-root": {
	// 	// 	fontSize: 16,
	// 	// 	fontWeight: 700,
	// 	// },
	// 	// "& .MuiInputBase-input": {
	// 	// 	borderRadius: 4,
	// 	// 	fontSize: 16,
	// 	// 	fontWeight: 700,
	// 	// 	p: 0,
	// 	// },
	// });

	const handleChangeAcc = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAccValue(event.target.value);
	};

	const handleChangeGyro = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGyroValue(event.target.value);
	};

	return (
		<Stack sx={{ ...flexCenter(), alignItems: "center", width: 400 }} direction="row" spacing="10px">
			<Stack spacing="10px">
				<TextField size="small" label="충격값" type="number" value={accValue} onChange={handleChangeAcc} />
				<TextField size="small" label="기울기" type="number" value={gyroValue} onChange={handleChangeGyro} />
			</Stack>

			<CustomButton variant="contained">
				설정값
				<br />
				전송
			</CustomButton>

			<CustomButton variant="contained" color="success">
				알림
				<br />
				리셋
			</CustomButton>
		</Stack>
	);
}

export default memo(ValueSender);
