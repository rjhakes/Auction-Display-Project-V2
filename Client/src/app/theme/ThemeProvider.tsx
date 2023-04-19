import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from './theme';


interface Props {
    children: any,
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
    const {themer} = useTheme();
    const {theme} = themer;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};