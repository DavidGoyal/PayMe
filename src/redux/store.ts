import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./themeReducer";

export const store = configureStore({
	reducer: {
		[themeSlice.name]: themeSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
