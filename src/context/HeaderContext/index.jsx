import { createContext, useContext, useState } from "react";

export const GlobalHeaderContext = createContext();

export default function HeaderProvider({ children }) {
  const [ activeSection, setActiveSection ] = useState('home');

  return (
    <GlobalHeaderContext.Provider 
      value={{
        activeSection,
        setActiveSection,
      }}>
      {children}
    </GlobalHeaderContext.Provider>
  );
}

export const useHeader = () => useContext(GlobalHeaderContext);
