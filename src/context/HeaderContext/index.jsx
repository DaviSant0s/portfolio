import { useEffect, useState } from "react";
import { createContext } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";
import { dataMarginCurrentBtnPage} from "./data";

export const GlobalHeaderContext = createContext();

export default function HeaderProvider({ children }) {

  // dados dos estilos de espaçamento dos botoes de páginas selecionados
  const [ MarginCurrentBtnPage, SetMarginCurrentBtnPage ] = useState(dataMarginCurrentBtnPage);

  /* estado que armazena alturas das seções */
  const [ resizeElement, setResizeElement ] = useState({});

  /* style dos botoes dos headers conforme ele fica em foco */
  const [ styleHome, setStyleHome ] = useState({});
  const [ styleCertification, setStyleCertification ] = useState({});
  const [ styleSkills, setStyleSkills ] = useState({});
  const [ styleProjects, setStyleProjects ] = useState({});
  const [ styleExperiences, setStyleExperiences ] = useState({});
  const [ styleContact, setStyleContact ] = useState({});


  /* Utilização do meu customHook para calcular a altura de cada página */
  const resize_height_home = useResizeObserver('#id_home');
  const resize_height_certifications = useResizeObserver('#id_certifications');
  const resize_height_skills = useResizeObserver('#id_skills');
  const resize_height_projects = useResizeObserver('#id_projects');
  const resize_height_experience = useResizeObserver('#id_experience');

  /* Estado que armazena um booleano que indica se a o botão ta página está selecionada */
  const [ selectedPage, setSelectedPage ] = useState({});

  // estado para indicar qual botão de página está selecionado no momento
  const [ selectedCurrentPage, setSelectedCurrentPage ] = useState('');

  /* efeito que armazena as alturas de cada pagina no estado RizeElement */
  useEffect(() => {

    if(resize_height_home && resize_height_certifications && resize_height_skills & resize_height_projects && resize_height_experience){
      setResizeElement(s => {
        return {
          resize_height_home,
          resize_height_certifications,
          resize_height_skills,
          resize_height_projects,
          resize_height_experience
        }
      });
    }

  }, [resize_height_home, resize_height_certifications, 
      resize_height_skills, resize_height_projects, resize_height_experience

  ]);

  return (
    <GlobalHeaderContext.Provider 
      value={{
        
        // Estilos de espaçamento (margem) de cada botão de página quando for selecionado
        MarginCurrentBtnPage, SetMarginCurrentBtnPage,

        // indica qual botão de página está selecionado no momento
        selectedCurrentPage, setSelectedCurrentPage,

        // seleção do botão de cada página
        selectedPage, setSelectedPage,
        
        // altura de cada página
        height_home: resizeElement.resize_height_home,
        height_certifications: resizeElement.resize_height_certifications,
        height_skills: resizeElement.resize_height_skills,
        height_projects: resizeElement.resize_height_projects,
        height_experience: resizeElement.resize_height_experience,
        
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