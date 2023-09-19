"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import productReducer from "@/redux/Features/productReducer";
import { loadState } from "./browser-storage";

const reducers = combineReducers({
    allProducts: productReducer,
  });

export const store = configureStore({
    devTools: true,
  reducer: reducers,
  // here we restore the previously persisted state
  preloadedState: loadState(),
  
   
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch