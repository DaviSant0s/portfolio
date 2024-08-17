import './styles.css';
import ExperienceContainer from '../../components/ExperienceContainer';

export default function Experience() {

  return (
    <div id='id_experience' className='experience-container defaultPages'>
      <div className='experience-content'>
        <h1 id='id_title_experience'>
          Experiências
        </h1>
        <div className='experiences'>
          <ExperienceContainer/>
        
        </div>
      </div>
    </div>
  );
}