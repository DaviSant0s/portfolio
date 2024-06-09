import './styles.css';

export default function MiniCardExp({ logo, institution, description, position }) {
  return (
    <div className='miniCardExp-container'>
      <div className='exp-details-container'>
        <div className='exp-details-description'>
          <span className='exp-duration'>Out de 2022 - Jan de 2023</span>
          <span className='exp-name-institution'>{institution}</span>
          <p className='exp-description'>{description}</p>
        </div>
        <div className='exp-details-logo'>
          <img src={logo} alt="" />
        </div>

      </div>
      <div className='profession-name'>
        <span>{position}</span>
      </div>
    </div>
  )
}
