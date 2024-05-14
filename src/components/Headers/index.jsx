import { useMediaQuery } from 'react-responsive'
import { useContext, useEffect, useState } from 'react';
import useEventListener from '../../hooks/useEventListenerDocument';
import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import { styleCurrentBtnPage, MarginCurrentBtnPage } from  '../../styles/header/index.js';
import { GlobalHeaderContext } from '../../context/HeaderContext/index.jsx';

import './styles.css';

export default function Headers() {

  const isBigScreen = useMediaQuery({ query: '(height: 695.2px)' });

  
  const [ viewHight, setViewHight ] = useState(window.innerHeight);
  const [ certificationHight, setCertificationHight ] = useState(0);
  const [ skillsHight, setSkillsHight ] = useState(0);
  const [ projectsHight, setProjectsHight ] = useState(0);
  
  const headerContext = useContext(GlobalHeaderContext);
  const [ scrolbarPositionWin, setScrolbarPositionWin ] = useState(0);

  const { 
    setStyleHome, 
    setStyleCertification, 
    setStyleSkills, 
    setStyleProjects,

    height_home, /* não estou usando ainda */
    height_certifications,
    height_skills,
    height_projects,
    
  } = headerContext;
  
  useEffect(() => {

    setViewHight(window.innerHeight);
    
    if(height_certifications && height_skills && height_projects){
      setCertificationHight((viewHight - 80) + height_certifications);
      setSkillsHight(certificationHight + height_skills);
      setProjectsHight(skillsHight + height_projects);
    }

  }, [viewHight, 
      certificationHight, 
      skillsHight, 
      projectsHight, 
      isBigScreen,
      height_certifications,
      height_skills,
      height_projects
    ]);

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

  const handleOnScrollWin = () => {
    setScrolbarPositionWin(window.scrollY);
  }

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