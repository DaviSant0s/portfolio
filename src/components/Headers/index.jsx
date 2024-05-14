import { useMediaQuery } from 'react-responsive'
import { useContext, useEffect, useState } from 'react';
import useEventListener from '../../hooks/useEventListenerDocument';
import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import { styleCurrentBtnPage, MarginCurrentBtnPage } from  '../../styles/header/index.js';
import { GlobalHeaderContext } from '../../context/HeaderContext/index.jsx';

import './styles.css';

export default function Headers() {

  // Gambiarra para saber se eu medei de tela
  const isBigScreen = useMediaQuery({ query: '(height: 695.2px)' });

  
  // estados para controlar a posição de mudança de estilo nos botões do header
  const [ viewHight, setViewHight ] = useState(window.innerHeight);
  const [ certificationHight, setCertificationHight ] = useState(0);
  const [ skillsHight, setSkillsHight ] = useState(0);
  const [ projectsHight, setProjectsHight ] = useState(0);
  
  // estado que armazena a posição atual do scroll
  const [ scrolbarPositionWin, setScrolbarPositionWin ] = useState(0);

  // estado Global do header
  const headerContext = useContext(GlobalHeaderContext);

  // desestruturação do estado global
  const { setStyleHome, setStyleCertification, setStyleSkills, setStyleProjects,
          height_certifications, height_skills, height_projects} = headerContext;
  

  // Efeito que calcula em qual posição se inicia cada seção do site, para mudar o estilo do header
  useEffect(() => {

    setViewHight(window.innerHeight);
    
    if(height_certifications && height_skills && height_projects){
      setCertificationHight((viewHight - 80) + height_certifications);
      setSkillsHight(certificationHight + height_skills);
      setProjectsHight(skillsHight + height_projects);
    }

  }, [viewHight, certificationHight, skillsHight, projectsHight, 
      isBigScreen, height_certifications,height_skills,height_projects]);

  
  // Efeito que decide dinamicamente quando o scroll estiver dentro de um intervalo de cada seção
  useEffect(() => {
    if(scrolbarPositionWin <= (viewHight - 80) ){
      setStyleHome({...styleCurrentBtnPage, ...MarginCurrentBtnPage.home});
    } else {
      setStyleHome({});
    }

    if(viewHight - 80 < scrolbarPositionWin && scrolbarPositionWin <= certificationHight ){
      setStyleCertification({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.certifications });
    } else {
      setStyleCertification({});
    }

    if(certificationHight < scrolbarPositionWin && scrolbarPositionWin <= skillsHight){
      setStyleSkills({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.skills });
    } else {
      setStyleSkills({});
    }

    if(skillsHight < scrolbarPositionWin && scrolbarPositionWin <= projectsHight){
      setStyleProjects({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.projects });
    } else {
      setStyleProjects({});
    }

  }, [scrolbarPositionWin])

  // função que retorna a posição atual do scroll na vertical
  const handleOnScrollWin = () => {
    setScrolbarPositionWin(window.scrollY);
  }

  // evento que monitora a posição do scroll
  useEventListener('scroll', handleOnScrollWin);

  return (
      <>
        <Header/>

        {scrolbarPositionWin > 180 &&
          <HeaderScroll/>
        }
        
      </>
  )
}