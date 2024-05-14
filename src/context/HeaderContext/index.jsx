import { useEffect, useState } from "react";
import { createContext } from "react";
import useResizeObserver from "../../hooks/useResizeObserver";

export const GlobalHeaderContext = createContext();

export default function HeaderProvider({ children }) {

  /* style dos botoes dos headers conforme ele fica em foco */
  const [ styleHome, setStyleHome ] = useState({});
  const [ styleCertification, setStyleCertification ] = useState({});
  const [ styleSkills, setStyleSkills ] = useState({});
  const [ styleProjects, setStyleProjects ] = useState({});

  /* alturas das seções */

  const [ resizeElement, setResizeElement ] = useState({});

  const resize_height_home = useResizeObserver('#id_home');
  const resize_height_certifications = useResizeObserver('#id_certifications');
  const resize_height_skills = useResizeObserver('#id_skills');
  const resize_height_projects = useResizeObserver('#id_projects');

  useEffect(() => {

    if(resize_height_home && resize_height_certifications && resize_height_skills & resize_height_projects){
      setResizeElement(s => {
        return {
          resize_height_home,
          resize_height_certifications,
          resize_height_skills,
          resize_height_projects
        }
      });

  /*     console.log('home', resize_height_home);
      console.log('certifications', resize_height_certifications);
      console.log('skills', resize_height_skills);
      console.log('projects', resize_height_projects); */
    }

  }, [resize_height_home, resize_height_certifications, resize_height_skills, resize_height_projects,

  ]);

  return (
    <GlobalHeaderContext.Provider 
      value={{
        height_home: resizeElement.resize_height_home,
        height_certifications: resizeElement.resize_height_certifications,
        height_skills: resizeElement.resize_height_skills,
        height_projects: resizeElement.resize_height_projects,
        
        styleHome, setStyleHome,
        styleCertification, setStyleCertification,
        styleSkills, setStyleSkills, 
        styleProjects, setStyleProjects
      }}>

      {children}
      
    </GlobalHeaderContext.Provider>
  );
}