import MiniCardExp from '../MiniCardExp';
import './styles.css';

export default function ExperienceCard({ logo, institution, description, position }) {
  return (
    <div className='experienceCard-container'>
      <span class="material-symbols-outlined icon-card-experience">apartment</span>
      <MiniCardExp 
        logo={logo} 
        institution={institution} 
        description={description}
        position={position}
      />
    </div>
  )
}
