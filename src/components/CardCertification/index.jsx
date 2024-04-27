import './styles.css';
import useEventListener from "../../hooks/useEventListener";
import { useRef, useState } from 'react';

export default function CardCertification({img=null, icon, name, description, institution, conclusion, duration, link_institution='', link_view='', link_credential='' , style_icone={}, style_title={}}) {
  const Ref_hover = useRef();
  const Ref_btn_credential = useRef();
  const Ref_btn_view = useRef();

  const [ underline, setUnderline ] = useState({});
  const [ styleBtns, setStyleBtns ] = useState({});

  const handleMouseover = (e) => {

    if(Ref_hover.current.contains(e.target)) {
      setUnderline({
        textDecoration: 'underline',
      });

      setStyleBtns({border: '1px solid #595554'});

    } else {
      setUnderline({});
      setStyleBtns({});
    }

    if(Ref_btn_credential.current.contains(e.target)){
      setStyleBtns({})
    }

    if(Ref_btn_view.current.contains(e.target)){
      setStyleBtns({})
    }
  }

  useEventListener('mouseover', handleMouseover);
  
  return (
    <div ref={Ref_hover} className='cardCertification-container'>

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
            <div ref={Ref_btn_credential} style={styleBtns} className='credential-btn'>
        
              <p>Exibir credencial</p>
              <span className="material-symbols-outlined">ios_share</span>
            </div>
          </a>

          <a className='link-view-btn' target='_blank' href={link_view}>
            <div ref={Ref_btn_view} style={styleBtns} className='view-btn'>
              <p>View</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
