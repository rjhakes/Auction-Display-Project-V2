import { Color } from "./themeColors";

export interface IFont {
    fontFamily: string,
    fontSize: number
}

export interface ITheme {
    palette: {
        mode: string,
        primary: {main: Color},
        secondary: {main: Color},
        neutral: {dark: Color, main: Color, light: Color},
        background: {default: Color},
    },
    typography: {
        fontFamily: string,
        fontSize: number,
        h1: {fontFamily: string, fontSize: number},
        h2: {fontFamily: string, fontSize: number},
        h3: {fontFamily: string, fontSize: number},
        h4: {fontFamily: string, fontSize: number},
        h5: {fontFamily: string, fontSize: number},
        h6: {fontFamily: string, fontSize: number},
    }
    // mode: string,
    // '--primary': Color,
    // '--secondary': Color,
    // '--background': Color,
    // '--white': Color,
}