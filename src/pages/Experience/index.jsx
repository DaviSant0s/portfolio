import CardExperience from '../../components/CardExperience';
import './styles.css';

export default function Experience() {
  return (
    <div className='experience-container defaultPages'>
      <h1>Experiências</h1>
      <div className='experience-content'>
        <CardExperience/>
        <CardExperience/>
      </div>
    </div>
  );
}
