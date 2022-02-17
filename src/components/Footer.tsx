import { Box, Button, Stack, styled } from "@mui/material";

export default function Footer(): JSX.Element {
	const CustomButton = styled(Button)({
		minWidth: 100,
		color: "#ffffff",
		fontSize: 16,
		fontWeight: 700,
		":hover": {
			backgroundColor: "secondary",
		},
	});

	return (
		<Box sx={{ display: "flex", width: "90%" }}>
			<Stack sx={{ width: "100%" }} direction="row" spacing="10px">
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

			<CustomButton variant="contained" color="error">
				종료
			</CustomButton>
		</Box>
	);
}
