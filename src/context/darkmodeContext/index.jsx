import { createContext, useContext, useState } from "react"

export const GlobalDarkmodeContext = createContext ();

export default function DarkmodeProvider({ children }) {
  const [ darkMode, setDarkMode ] = useState(false);


  return (
    <GlobalDarkmodeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </GlobalDarkmodeContext.Provider>
  )
}


export const useDarkmode = () => useContext(GlobalDarkmodeContext);
