import { useEffect, useState } from "react";
import useResizeObserver from "./useResizeObserver";

export default function useGetHightSection(initialValue=null) {
  /* estado que armazena alturas das seções */
  const [ resizeElement, setResizeElement ] = useState(initialValue);

  /* Utilização do meu customHook para calcular a altura de cada página */
  const resize_height_home = useResizeObserver('#id_home');
  const resize_height_certifications = useResizeObserver('#id_certifications');
  const resize_height_skills = useResizeObserver('#id_skills');
  const resize_height_projects = useResizeObserver('#id_projects');
  const resize_height_experience = useResizeObserver('#id_experience');
  const resize_height_contacts = useResizeObserver('#id_contact');

  /* efeito que armazena as alturas de cada pagina no estado RizeElement */
  useEffect(() => {

    if(resize_height_home && resize_height_certifications && resize_height_skills & resize_height_projects && resize_height_experience && resize_height_contacts){
      setResizeElement(s => {
        return {
          home: resize_height_home,
          certifications: resize_height_certifications,
          skills: resize_height_skills,
          projects: resize_height_projects,
          experience: resize_height_experience,
          contact: resize_height_contacts
        }
      });
    }

  }, [resize_height_home, resize_height_certifications, 
      resize_height_skills, resize_height_projects, resize_height_experience, resize_height_contacts

  ]);

  return resizeElement;
}
