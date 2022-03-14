import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CollisionState } from "../store/collisionSlice";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => Dispatch<AnyAction> &
	ThunkDispatch<
		{
			collision: CollisionState;
		},
		null,
		AnyAction
	> &
	ThunkDispatch<
		{
			collision: CollisionState;
		},
		undefined,
		AnyAction
	> = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
