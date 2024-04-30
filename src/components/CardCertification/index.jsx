import useEventListenerElement from "../../hooks/useEventListenerElement";
import { useRef, useState } from 'react';
import Modal from '../Modal';
import './styles.css';

export default function CardCertification({status=true, img=null, icon, name, description, institution, conclusion, duration, link_institution='', link_credential='' , style_icone={}, style_title={}, pageRef}) {

  const Ref_hover = useRef();
  const Ref_btn_credential = useRef();
  const Ref_btn_view = useRef();

  const [ underline, setUnderline ] = useState({});
  const [ styleBtnCredential, setStyleBtnCredential ] = useState({});
  const [ styleBtnView, setStyleBtnView ] = useState({});
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const handleMouseover = (e) => {

    if(Ref_hover.current.contains(e.target)) {
      setUnderline({
        textDecoration: 'underline',
      });

      setStyleBtnCredential({border: '1px solid #595554'});
      setStyleBtnView({border: '1px solid #595554'});

    } else {
      setUnderline({});

      setStyleBtnCredential({});
      setStyleBtnView({});
    }

    if(Ref_btn_credential.current.contains(e.target)){
      setStyleBtnCredential({});
    }

    if(Ref_btn_view.current.contains(e.target)){
      setStyleBtnView({});
    }
  }

  useEventListenerElement('mouseover', handleMouseover, pageRef);

  const handleClickModal = () => {
    setIsOpenModal(s => !s);
  }
  
  return (
    <div>
      <div className='for-background-status'>

        <div style={status ? {backgroundColor: '#348C34'} : {backgroundColor: '#b9b85c'}} className='background-diagonal'></div>
        
        <div ref={Ref_hover} className='cardCertification-container'>
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
                <p className='name'><a style={underline} target='_blank' href={link_institution}>{institution}</a></p>
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
                  <div ref={Ref_btn_credential} style={styleBtnCredential} className='credential-btn'>
      
                    <p>Exibir credencial</p>
                    <span className="material-symbols-outlined">ios_share</span>
                  </div>
                </a>
                <div onClick={handleClickModal} ref={Ref_btn_view} style={styleBtnView} className='view-btn'>
                  <p>View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenModal && 
        <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
      }

    </div>
  )
}
