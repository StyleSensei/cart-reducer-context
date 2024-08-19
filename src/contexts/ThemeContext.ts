import { createContext, useContext } from "react";

export interface ITheme {
    name: string
    color:string
    fontSize:string
    fontfamily: string
    backgroundcolor: string
    

}

export interface IThemes {
    happy:ITheme;
    sad: ITheme;
}
 
export const themes: IThemes = {
    happy:  {
        name: 'Happy',
        color: 'red',
        fontSize: '2.3rem',
        fontfamily:'papyrus',
        backgroundcolor: "lightblue"
    },
    sad:  {
        name:"Sad",
        color: "Olive",
        fontSize: "1rem",
        fontfamily: "arial",
        backgroundcolor: "grey"
        
    }

}

export const ThemeContext = createContext<ITheme>(themes.sad)

export const useTheme = () => useContext(ThemeContext)