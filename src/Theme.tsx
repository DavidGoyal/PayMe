import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const Theme = ({ children }: { children: ReactNode }) => {
	const { darkMode } = useSelector((state: RootState) => state.theme);

	const darkTheme = createTheme({
		palette: {
			mode: darkMode === true ? "dark" : "light",
		},
	});

	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default Theme;
