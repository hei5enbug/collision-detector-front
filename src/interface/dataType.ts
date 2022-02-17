export interface ISensorData {
	detectTime: string;
	accX: number;
	accY: number;
	accZ: number;
	gyroX: number;
	gyroY: number;
	gyroZ: number;
}

export type sensorDataKey = "accX" | "accY" | "accY" | "gyroX" | "gyroY" | "gyroZ";

// export const dataColorArray = ["#ff0000", "#2bff05", "#00bfff"];
export const dataColorArray = ["#E84853", "#14ad40", "#0199EB"];
