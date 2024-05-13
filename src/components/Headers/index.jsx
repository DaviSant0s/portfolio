import { useContext, useEffect, useState } from 'react';
import useEventListener from '../../hooks/useEventListenerDocument';
import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import {  viewHight, 
          certificationHight, 
          skillsHight, 
          projectsHight, 
          styleCurrentBtnPage, 
          MarginCurrentBtnPage } from  '../../styles/header/index.js';
          
import './styles.css';
import { GlobalHeaderContext } from '../../context/HeaderContext/index.jsx';

export default function Headers() {

  const [ scrolbarPositionWin, setScrolbarPositionWin ] = useState(0);

  const headerContext = useContext(GlobalHeaderContext);
  console.log(headerContext);

  const { 
    setStyleHome, 
    setStyleCertification, 
    setStyleSkills, 
    setStyleProjects} = headerContext;

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