import { useState } from "react";
import { createContext } from "react";
import { dataMarginCurrentBtnPage} from "./data";

export const GlobalHeaderContext = createContext();

export default function HeaderProvider({ children }) {

  // dados dos estilos de espaçamento dos botoes de páginas selecionados
  const [ MarginCurrentBtnPage, SetMarginCurrentBtnPage ] = useState(dataMarginCurrentBtnPage);

  /* style dos botoes dos headers conforme ele fica em foco */
  const [ styleHome, setStyleHome ] = useState({});
  const [ styleCertification, setStyleCertification ] = useState({});
  const [ styleSkills, setStyleSkills ] = useState({});
  const [ styleProjects, setStyleProjects ] = useState({});
  const [ styleExperiences, setStyleExperiences ] = useState({});
  const [ styleContact, setStyleContact ] = useState({});

  /* Estado que armazena um booleano que indica se a o botão ta página está selecionada */
  const [ selectedPage, setSelectedPage ] = useState({});

  // estado para indicar qual botão de página está selecionado no momento
  const [ selectedCurrentPage, setSelectedCurrentPage ] = useState('');

  return (
    <GlobalHeaderContext.Provider 
      value={{
        
        // Estilos de espaçamento (margem) de cada botão de página quando for selecionado
        MarginCurrentBtnPage, SetMarginCurrentBtnPage,

        // indica qual botão de página está selecionado no momento
        selectedCurrentPage, setSelectedCurrentPage,

        // seleção do botão de cada página
        selectedPage, setSelectedPage,
        
        // estilo do botão da pagina que estiver em foco pelo scroll
        styleHome, setStyleHome,
        styleCertification, setStyleCertification,
        styleSkills, setStyleSkills, 
        styleProjects, setStyleProjects,
        styleExperiences, setStyleExperiences,
        styleContact, setStyleContact

      }}>

      {children}
      
    </GlobalHeaderContext.Provider>
  );
}