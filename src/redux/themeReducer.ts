import { createSlice } from "@reduxjs/toolkit";

type Props = {
	darkMode: boolean;
};

const initialState: Props = {
	darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
			localStorage.setItem("darkMode", state.darkMode.toString());
		},
	},
});

export const { toggleDarkMode } = themeSlice.actions;
