import { useContext, useEffect, useState } from 'react';
import HeaderScroll from '../HeaderScroll';
import { styleCurrentBtnPage } from  '../../styles/header/index.js';
import { GlobalHeaderContext } from '../../context/HeaderContext/index.jsx';
import useGetScrollPosition from '../../hooks/useGetScrollPosition.jsx';
import useGetHightSection from '../../hooks/useGetHightSection.jsx';
import screenSize from '../../hooks/screenSize.jsx';

import './styles.css';

export default function Headers() {

  // estado Global do header
  const headerContext = useContext(GlobalHeaderContext);

  // desestruturação de estilo do botão da pagina que estiver em foco pelo scroll, do estado global.
  const { setStyleHome, setStyleCertification, setStyleSkills, 
          setStyleProjects, setStyleExperiences, setStyleContact} = headerContext;

  // desestruturação da variável do estado global de seleção do botão de página
  const { selectedPage, setSelectedPage } = headerContext;

  // estado para indicar qual botão de página está selecionado no momento
  const { setSelectedCurrentPage } = headerContext;

  // desestruturação variável do estado global do estilo de espaçamento do botão de página selecionado
  const { MarginCurrentBtnPage } = headerContext;
  
  // estados para controlar a posição de mudança de estilo nos botões do header
  const [ viewHight, setViewHight ] = useState(window.innerHeight);
  const [ certificationHight, setCertificationHight ] = useState(0);
  const [ skillsHight, setSkillsHight ] = useState(0);
  const [ projectsHight, setProjectsHight ] = useState(0);
  const [ experienceHight, setExperienceHight ] = useState(0);
  const [ contactHight, setContactHight ] = useState(0);

  // alturas das seções
  const height = useGetHightSection();

  // retorna a posição do scroll
  const scrollPosition = useGetScrollPosition();
  /* const scrollPosition = 20; */

  // responsavel por atualizar o estado quando a tela mudar
  const screenUpdate = screenSize();

  useEffect(() => {

    if(selectedPage.bool){
      if(selectedPage.to === 'home') {
        if(scrollPosition <= height.home + 80 ){
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'certifications') {
        if(height.home + 80 < scrollPosition && scrollPosition <= certificationHight ) {
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'skills') {
        if(certificationHight < scrollPosition && scrollPosition <= skillsHight) {
          setSelectedPage(false);
        }
      }
  
      if(selectedPage.to === 'projects') {
        if(skillsHight < scrollPosition && scrollPosition <= projectsHight){
          setSelectedPage(false);
        }
      }

      if(selectedPage.to === 'experience') {
        if(projectsHight < scrollPosition && scrollPosition <= experienceHight){
          setSelectedPage(false);
        }
      }

      if(selectedPage.to === 'contact') {
        if(experienceHight < scrollPosition && scrollPosition <= contactHight){
          setSelectedPage(false);
        }
      }
    }

  }, [selectedPage, scrollPosition, viewHight, certificationHight, 
      skillsHight, projectsHight, experienceHight, contactHight, height]);


  // Efeito que calcula em qual posição se inicia cada seção do site, para mudar o estilo do header
  useEffect(() => {

    setViewHight(window.innerHeight);

    if(height.certifications && height.skills && height.projects && height.experience && height.home){
      setCertificationHight(height.home + height.certifications);
      setSkillsHight(certificationHight + height.skills);
      setProjectsHight(skillsHight + height.projects);
      setExperienceHight(projectsHight + height.experience);
      setContactHight(experienceHight + height.contact);
    }

  }, [screenUpdate, certificationHight, skillsHight, projectsHight,        
      height.home, height.certifications, height.skills, height.projects, height.experience]);
  
  // Efeito que decide dinamicamente quando o scroll estiver dentro de um intervalo de cada seção
  useEffect(() => {

    if(!selectedPage.bool){

      if(scrollPosition <= (viewHight - 80) ){
        setStyleHome({...styleCurrentBtnPage, ...MarginCurrentBtnPage.home});
        setSelectedCurrentPage('home');
      } else {
        setStyleHome({});
      }
  
      if(viewHight - 80 < scrollPosition && scrollPosition <= certificationHight ){
        setStyleCertification({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.certifications });
        setSelectedCurrentPage('certifications');
      } else {
        setStyleCertification({});
      }
  
      if(certificationHight < scrollPosition && scrollPosition <= skillsHight){
        setStyleSkills({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.skills });
        setSelectedCurrentPage('skills');
      } else {
        setStyleSkills({});
      }
  
      if(skillsHight < scrollPosition && scrollPosition <= projectsHight){
        setStyleProjects({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.projects });
        setSelectedCurrentPage('projects');
      } else {
        setStyleProjects({});
      }

      if(projectsHight < scrollPosition && scrollPosition <= experienceHight){
        setStyleExperiences({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.experience });
        setSelectedCurrentPage('experience');
      } else {
        setStyleExperiences({});
      }

      if(experienceHight < scrollPosition){
        setStyleContact({ ...styleCurrentBtnPage, ...MarginCurrentBtnPage.contact });
        setSelectedCurrentPage('contact');
      } else {
        setStyleContact({});
      }
    }

  }, [scrollPosition, selectedPage, viewHight, styleCurrentBtnPage, MarginCurrentBtnPage,
      certificationHight, skillsHight, projectsHight, experienceHight, contactHight]);

  return (
    <HeaderScroll/>
  )
}