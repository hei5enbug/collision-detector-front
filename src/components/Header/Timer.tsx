import { memo, useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import dayjs from "dayjs"
import { flexCenter } from "../../utils/styleUtil"

function Timer() {
	const [time, setTime] = useState(dayjs().get("date") + 600)
	const format = dayjs().millisecond(time).format("YYYY-MM-DD hh:mm:ss")

	useEffect(() => {
		const countDown = setInterval(() => {
			setTime(beforeTime => beforeTime + 1)
		}, 1000)

		return () => clearInterval(countDown)
	}, [time])

	return (
		<Box
			sx={{
				...flexCenter(),
				position: "absolute",
				right: 30,
				width: 200,
				height: 30,
				backgroundColor: "#94cdff",
				border: "1px solid white",
			}}
		>
			<Typography sx={{ color: "white", fontSize: 16, fontWeight: 600 }}>{format}</Typography>
		</Box>
	)
}

export default memo(Timer)
