import MiniCardExp from '../MiniCardExp';
import './styles.css';

export default function ExperienceCard({ date, logo, institution, description, position }) {
  return (
    <div className='experienceCard-container'>
      <span className="material-symbols-outlined icon-card-experience">apartment</span>
      <MiniCardExp 
        date={date}
        logo={logo} 
        institution={institution} 
        description={description}
        position={position}
      />
    </div>
  )
}
