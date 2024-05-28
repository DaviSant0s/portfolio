import { useMediaQuery } from 'react-responsive'
import { useContext, useEffect, useState } from 'react';
import useEventListener from '../../hooks/useEventListenerDocument';
import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import { styleCurrentBtnPage } from  '../../styles/header/index.js';
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

  // desestruturaçãovariável do estado global de seleção do botão de página
  const { selectedPage, setSelectedPage } = headerContext;

  // estado para indicar qual botão de página está selecionado no momento
  const { selectedCurrentPage, setSelectedCurrentPage } = headerContext;

  // desestruturação variável do estado global do estilo de espaçamento do botão de página selecionado
  const { MarginCurrentBtnPage, SetMarginCurrentBtnPage } = headerContext;

  useEffect(() => {

    if(selectedPage.bool){
      if(selectedPage.to === 'home') {
        if(scrolbarPositionWin <= (viewHight - 80) ){
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'certifications') {
        if(viewHight - 80 < scrolbarPositionWin && scrolbarPositionWin <= certificationHight ) {
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'skills') {
        if(certificationHight < scrolbarPositionWin && scrolbarPositionWin <= skillsHight) {
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'projects') {
        if(skillsHight < scrolbarPositionWin && scrolbarPositionWin <= projectsHight){
          setSelectedPage(false);
        }
      }

    }

  }, [selectedPage.bool, scrolbarPositionWin]);


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

    if(!selectedPage.bool){

      if(scrolbarPositionWin <= (viewHight - 80) ){
        setStyleHome({...styleCurrentBtnPage, ...MarginCurrentBtnPage.home});
        setSelectedCurrentPage('home');
      } else {
        setStyleHome({});
      }
  
      if(viewHight - 80 < scrolbarPositionWin && scrolbarPositionWin <= certificationHight ){
        setStyleCertification({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.certifications });
        setSelectedCurrentPage('certifications');
      } else {
        setStyleCertification({});
      }
  
      if(certificationHight < scrolbarPositionWin && scrolbarPositionWin <= skillsHight){
        setStyleSkills({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.skills });
        setSelectedCurrentPage('skills');
      } else {
        setStyleSkills({});
      }
  
      if(skillsHight < scrolbarPositionWin && scrolbarPositionWin <= projectsHight){
        setStyleProjects({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.projects });
        setSelectedCurrentPage('projects');
      } else {
        setStyleProjects({});
      }
    }

  }, [scrolbarPositionWin]);

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