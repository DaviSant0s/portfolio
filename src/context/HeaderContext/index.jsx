import { useState } from "react";
import { createContext } from "react";

export const GlobalHeaderContext = createContext();

export default function HeaderProvider({ children }) {

  /* style dos botoes dos headers conforme ele fica em foco */
  const [ styleHome, setStyleHome ] = useState({});
  const [ styleCertification, setStyleCertification ] = useState({});
  const [ styleSkills, setStyleSkills ] = useState({});
  const [ styleProjects, setStyleProjects ] = useState({});


  return (
    <GlobalHeaderContext.Provider 
      value={{
        styleHome, setStyleHome,
        styleCertification, setStyleCertification,
        styleSkills, setStyleSkills, 
        styleProjects, setStyleProjects
      }}>

      {children}
      
    </GlobalHeaderContext.Provider>
  );
}