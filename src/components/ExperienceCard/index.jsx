import './styles.css';

export default function ExperienceCard({ logo, institution, description, position }) {
  return (
    <div className='experienceCard-container'>
      <span class="material-symbols-outlined icon-card-experience">apartment</span>
      {/* <span class="material-symbols-outlined icon-card-experience">construction</span> */}
      <div className='experienceCard-card'>
        <div className='experience-details'>
          <div className='experience-details-description'>
            <span className='experience-duration'>Out de 2022 - Jan de 2023</span>
            <span className='experience-name-institution'>{institution}</span>
            <p className='experience-description'>{description}</p>
          </div>
          <div className='experience-details-logo'>
            <img src={logo} alt="" />
          </div>

        </div>
        <div className='profession-name'>
          <span>{position}</span>
        </div>
      </div>
    </div>
  )
}
