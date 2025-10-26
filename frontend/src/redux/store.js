import { configureStore } from "@reduxjs/toolkit";
import donutsReducer from "./donutsSlice";

export const store = configureStore({
  reducer: {
    donuts: donutsReducer,
  },
});
