import dayjs from "dayjs";
import { ISensorData, sensorDataKey } from "../interface/dataType";

export default function getTestData(length: number): ISensorData[] {
	const dataList = [];

	const now = dayjs().get("date") - length * 1000;

	for (let i = 0; i < length; i++) {
		const tempData: ISensorData = { detectTime: "", accX: 0, accY: 0, accZ: 0, gyroX: 0, gyroY: 0, gyroZ: 0 };
		const ms = dayjs().millisecond(now + i * 1000);
		tempData.detectTime = ms.format("YYYY-MM-DD HH:mm:ss");

		for (const key of Object.keys(tempData)) {
			if (key === "detectTime") {
				continue;
			}
			const random = Math.random().toFixed(2);
			tempData[key as sensorDataKey] = parseFloat(random);
		}
		dataList.push(tempData);
	}

	return dataList;
}
