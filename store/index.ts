import { configureStore } from "@reduxjs/toolkit";
import AccoutReducer from "@/store/accounts/accoutsSlice";
import BasicDataReducer from "@/store/basic-data/basicDataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { AccoutReducer, BasicDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
