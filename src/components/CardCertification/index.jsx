import './styles.css';
import { useModal } from '../../context/ModalContext';
import ModalCertification from '../ModalCertification';

export default function CardCertification(
  {
    status=true, 
    img=null, 
    icon, 
    name, 
    description, 
    institution, 
    conclusion, 
    duration, 
    link_institution='', 
    link_credential='' , 
    style_icone={}, 
    style_title={}
  }) {

  const { setIsOpen } = useModal();

  
  return (
    <>
      <div className='for-background-status'>

        <div style={status ? {backgroundColor: '#348C34'} : {backgroundColor: '#b9b85c'}} className='background-diagonal'></div>
        
        <div className='cardCertification-container'>
          <div className='status-container-cardCertification'>
            <div style={status ? {backgroundColor: '#5cb85c'} : {backgroundColor: '#b9b85c'}} className='status-cardCertification'>
              <span>{status ? 'Concluído': 'Fazendo'}</span>
            </div>
          </div>
          <div className='cardCertification-content'>
            <div className='image-container-cardCertification'>
              <div className='image-content-cardCertification'>
                {img &&
                  <img style={style_icone} src={img} alt="" />
                }
                {!img &&
                  <i style={style_icone} className={icon} />
                }
              </div>
            </div>
            <div className='description-cardCertification-container'>
              <h1 style={style_title}>{name}</h1>
              <div className='description'>{description}</div>
      
              <div className='data-cardCertification-container'>
                <span className='title'>Instituição:</span>
                <p className='name institution-name'><a target='_blank' href={link_institution}>{institution}</a></p>
              </div>
              <div className='data-cardCertification-container'>
                <span className='title'>Duração:</span>
                <p className='name'>{duration}</p>
              </div>
              <div className='data-cardCertification-container'>
                <span className='title'>Conclusão:</span>
                <p className='name'>{conclusion}</p>
              </div>
              <div className='container-credential-btns'>
                <a className='link-credential-btn' target='_blank' href={link_credential}>
                  <div className='credential-btn'>
                    <p>Exibir credencial</p>
                    <span className="material-symbols-outlined">ios_share</span>
                  </div>
                </a>
                <div onClick={() => setIsOpen(true)} className='view-btn'>
                  <p>Ementa</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalCertification status={status}/>
    </>
  )
}