import { Button, Stack, styled } from "@mui/material";

export default function Menu(): JSX.Element {
	const CustomButton = styled(Button)({
		minWidth: 100,
		height: 50,
		color: "#ffffff",
		fontSize: 16,
		fontWeight: 700,
		":hover": {
			backgroundColor: "secondary",
		},
	});

	return (
		<Stack sx={{ width: 400, height: "100%", alignItems: "center" }} direction="row" spacing="10px">
			<CustomButton variant="contained" color="info">
				LOG 저장시작
			</CustomButton>

			<CustomButton variant="contained" color="info">
				LOG 저장중지
			</CustomButton>

			<CustomButton variant="contained" color="info">
				데이터 조회
			</CustomButton>
		</Stack>
	);
}
