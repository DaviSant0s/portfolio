import './styles.css';

export default function CardExperience({date, logo, companiesName, position, description='', stacks, styles_logo={}}) {
  return (
    <div className='cardExperience-container'>

      <div className='date-container-cardExperience'> 
        <span>{date}</span>
      </div>

      <div className='logo-container-cardExperience'>
        <img style={styles_logo} src={logo} alt="bytejr" />
        <span>{companiesName}</span>
      </div>

      <div className='position-container-cardExperience'>
        {position}
      </div>
      <div className='description-container-cardExperience'>
        {description}
      </div>

      <div className='stacks-container-cardExperience'>
        <strong>Stacks: </strong>{stacks}
      </div>

    </div>
  )
}
