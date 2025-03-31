import { createContext, useState } from "react";

//creating context
export const ThemeContext= createContext();

//providing context
export const ThemeProvider= ({children}) =>{
    const[theme, setTheme]= useState("light");

    const toggleTheme= ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
             {children}  {/*All child componenets will have access to theme */}
        </ThemeContext.Provider>
    )
}