"use client";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@/app/redux/features/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
