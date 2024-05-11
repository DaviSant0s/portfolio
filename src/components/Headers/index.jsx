import { useEffect, useState } from 'react';
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

export default function Headers() {

  const [ scrolbarPositionWin, setScrolbarPositionWin ] = useState(0);
  const [ styleHome, setStyleHome ] = useState({});
  const [ styleCertification, setStyleCertification ] = useState({});
  const [ styleSkills, setStyleSkills ] = useState({});
  const [ styleProjects, setStyleProjects ] = useState({});

  useEffect(() => {
    console.log(scrolbarPositionWin)
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
      <Header 
        currentStyleHome={styleHome}
        currentStyleCertification={styleCertification}
        currentStyleSkills={styleSkills}
        currentStyleProjects={styleProjects}
      />

      {scrolbarPositionWin > (viewHight - 80) &&
        <HeaderScroll
          currentStyleHome={styleHome}
          currentStyleCertification={styleCertification}
          currentStyleSkills={styleSkills}
          currentStyleProjects={styleProjects}
        />
      }
      
    </>
  )
}
