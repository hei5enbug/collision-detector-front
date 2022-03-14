import { ISensorData } from "../interface/dataType";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import getTestData from "../lib/testUtils";
import axios, { AxiosResponse } from "axios";

export interface CollisionState {
	testData1: ISensorData[];
	testData2: ISensorData[];
	tableInfo1: ISensorData;
	tableInfo2: ISensorData;
}

const initialState: CollisionState = {
	testData1: [],
	testData2: getTestData(100),
	tableInfo1: { detectTime: "", accX: 0, accY: 0, accZ: 0, gyroX: 0, gyroY: 0, gyroZ: 0 },
	tableInfo2: { detectTime: "", accX: 0, accY: 0, accZ: 0, gyroX: 0, gyroY: 0, gyroZ: 0 },
};

const BASIC_URL = "http://27.96.134.179:8080";

export const getCollisionList = createAsyncThunk<AxiosResponse, void, { state: RootState }>("collision/getCollisionList", async () => {
	console.log("getCollisionList");
	const response = await axios.get(`${BASIC_URL}/collision`);
	console.log("response", response);
	return response;
});

export const collisionSlice = createSlice({
	name: "collision",
	initialState,

	reducers: {
		setTableInfo1: (state, action: PayloadAction<ISensorData>) => {
			state.tableInfo1 = action.payload;
		},
		setTableInfo2: (state, action: PayloadAction<ISensorData>) => {
			state.tableInfo2 = action.payload;
		},
	},

	extraReducers: builder => {
		builder.addCase(getCollisionList.fulfilled, (state, action) => {
			// state.testData1 = action.payload.data;
			console.log(action.payload);
		});
	},
});

export const { setTableInfo1, setTableInfo2 } = collisionSlice.actions;
export const selectTestData1 = (state: RootState): ISensorData[] => state.collision.testData1;
export const selectTestData2 = (state: RootState): ISensorData[] => state.collision.testData2;
export const selectTableInfo1 = (state: RootState): ISensorData => state.collision.tableInfo1;
export const selectTableInfo2 = (state: RootState): ISensorData => state.collision.tableInfo2;

export default collisionSlice.reducer;
