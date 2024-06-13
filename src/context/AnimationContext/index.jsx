import { createContext, useEffect, useState } from "react"
import useGetPositionElement from "../../hooks/useGetPositionElement";

export const GlobalAnimationContext = createContext ();


const viewd = (positionElement, dayOff=300) => {
  return positionElement + dayOff <= window.innerHeight;
}

const animation = {animationName: 'animationTitle'};

export default function AnimationProvider({ children }) {

  // esados que armazena o styles da animação do title das sections
  const [ animationCertification, setAnimationCertification ] = useState({});
  const [ animationSkills, setAnimationSkills ] = useState({});
  const [ animationProjects, setAnimationProjects ] = useState({});
  const [ animationExperience, setAnimationExperience ] = useState({});
  const [ animationContact, setAnimationContact ] = useState({});

  // customHook que retorna a posição do elemento na tela em relação a viewport
  const positionHome = useGetPositionElement('#id_home'); // não usando no momento
  const positionCertifications = useGetPositionElement('#id_title_certifications');
  const positionSkills = useGetPositionElement('#id_title_skills');
  const positionProjects = useGetPositionElement('#id_title_projects');
  const positionExperience = useGetPositionElement('#id_title_experience');
  const positionContact = useGetPositionElement('#id_title_contact');

  useEffect(() => {

    if(positionCertifications){

      if(viewd(positionCertifications)) {
        setAnimationCertification(s => animation);
      } else {
        setAnimationCertification(s => ({}));
      }

      if(viewd(positionSkills)) {
        setAnimationSkills(s => animation);
      } else {
        setAnimationSkills(s => ({}));
      }

      if(viewd(positionProjects)) {
        setAnimationProjects(s => animation);
      } else {
        setAnimationProjects(s => ({}))
      }

      if(viewd(positionExperience)) {
        setAnimationExperience(s => animation);
      } else {
        setAnimationExperience(s => ({}));
      }

      if(viewd(positionContact)) {
        setAnimationContact(s => animation);
      } else {
        setAnimationContact(s => ({}));
      }

    }

  }, [positionCertifications, positionSkills, positionProjects, positionExperience, positionContact]);

  return (
    <GlobalAnimationContext.Provider value={{
      animationCertification,
      animationSkills,
      animationProjects,
      animationExperience,
      animationContact
    }}>
      {children}
    </GlobalAnimationContext.Provider>
  )
}
