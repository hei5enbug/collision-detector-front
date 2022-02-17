import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CounterState } from "../features/counter/counterSlice";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => Dispatch<AnyAction> &
	ThunkDispatch<
		{
			counter: CounterState;
		},
		null,
		AnyAction
	> &
	ThunkDispatch<
		{
			counter: CounterState;
		},
		undefined,
		AnyAction
	> = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
