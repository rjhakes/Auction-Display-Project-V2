import { createContext, useContext } from "react";
import Themer from "./themer";

interface Theme {
    themer: Themer;
}

export const theme: Theme = {
    themer: new Themer(),
}

export const ThemeContext = createContext(theme);

export function useTheme() {
    return useContext(ThemeContext);
}