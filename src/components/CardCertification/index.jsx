import './styles.css';
/* import react from '../../assets/react.svg' */

export default function CardCertification({img, name, description, institution, conclusion, duration, style_icone={}, style_title={}}) {
  return (
    <div className='cardCertification-container'>
      <div className='image-container-certification'>
        <div className='image-content-certification'>
          <img style={style_icone} src={img} alt="" />
        </div>
      </div>
      <div className='description-certification-container'>
        <h1 style={style_title}>{name}</h1>
        <span className='description'>{description}</span>
        <div className='institution-name-container'>
          <span className='institution-title'>Instituição:</span>
          <p className='institution-name'>{institution}</p>
        </div>

        <div className='institution-name-container'>
          <span className='institution-title'>Conclusão:</span>
          <p className='institution-name'>{conclusion}</p>
        </div>

        <div className='institution-name-container'>
          <span className='institution-title'>Duração:</span>
          <p className='institution-name'>{duration}</p>
        </div>

        <div className='credential-btn'>
          <p>Exibir credencial</p>
          <span class="material-symbols-outlined">ios_share</span>
        </div>
        {/* <h1>Como criar e modificar um projeto Git</h1> */}
      </div>
    </div>
  )
}
