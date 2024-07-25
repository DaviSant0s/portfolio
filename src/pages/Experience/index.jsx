import './styles.css';
import ExperienceContainer from '../../components/ExperienceContainer';

export default function Experience() {

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