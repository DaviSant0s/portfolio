import './styles.css';
import ExperienceContainer from '../../components/ExperienceContainer';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Experience() {
  const { ref } = useTrackActiveSection('experience');

  return (
    <div ref={ref} id='id_experience' className='experience-container defaultPages'>
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
