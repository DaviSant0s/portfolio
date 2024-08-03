import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalSideBarContext = createContext();

export default function SideBarProvider({ children }) {
  const [ menuEnabled, setMenuEnabled ] = useState(false);


  return (
    <GlobalSideBarContext.Provider value={{menuEnabled, setMenuEnabled}}>

      {children}
      
    </GlobalSideBarContext.Provider>
  );
}

export const useSideBar = () => useContext(GlobalSideBarContext);