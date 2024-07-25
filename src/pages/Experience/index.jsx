import './styles.css';
import ExperienceContainer from '../../components/ExperienceContainer';
import { useContext } from 'react';
import { GlobalAnimationContext } from '../../context/AnimationContext';

export default function Experience() {

  // estado global para animação do titulo

  /* const titleContext = useContext(GlobalAnimationContext);
  const animationTitle = titleContext.animationExperience; */

  // fim
  return (
    <div id='id_experience' className='experience-container defaultPages'>
      <h1 id='id_title_experience'>
        Experiências
        {/* <div style={animationTitle} className='animationTitle'></div> */}
      </h1>
      <div className='experience-content'>

        <ExperienceContainer/>
        
      </div>
    </div>
  );
}