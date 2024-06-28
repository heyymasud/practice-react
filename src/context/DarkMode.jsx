/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
};

export const DarkMode = DarkModeContext;
