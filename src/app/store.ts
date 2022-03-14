import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import collisionReducer from "../store/collisionSlice";

export const store = configureStore({
	reducer: {
		collision: collisionReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
