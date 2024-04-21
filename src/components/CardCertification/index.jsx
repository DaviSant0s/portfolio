import './styles.css';
import useEventListener from "../../hooks/useEventListener";
import { useRef, useState } from 'react';

export default function CardCertification({img, name, description, institution, conclusion, duration, link_institution='', link_credential='' , style_icone={}, style_title={}}) {
  const Ref_hover = useRef();
  const [ underline, setUnderline ] = useState({});

  const handleMouseover = (e) => {

    if(Ref_hover.current.contains(e.target)) {
      setUnderline({
        textDecoration: 'underline'
      });

    } else {
      setUnderline({});
    }
  }

  useEventListener('mouseover', handleMouseover);
  
  return (
    <div ref={Ref_hover} className='cardCertification-container'>
      <div className='image-container-certification'>
        <div className='image-content-certification'>
          <img style={style_icone} src={img} alt="" />
        </div>
      </div>
      <div className='description-certification-container'>
        <h1 style={style_title}>{name}</h1>
        <div className='description'>{description}</div>
        <div className='institution-name-container'>
          <span className='institution-title'>Instituição:</span>
          <p className='institution-name'><a style={underline} target='_blank' href={link_institution}>{institution}</a></p>
        </div>
        <div className='institution-name-container'>
          <span className='institution-title'>Conclusão:</span>
          <p className='institution-name'>{conclusion}</p>
        </div>

        <div className='institution-name-container'>
          <span className='institution-title'>Duração:</span>
          <p className='institution-name'>{duration}</p>
        </div>

        <a className='link-credential-btn' target='_blank' href={link_credential}>
          <div className='credential-btn'>
          
            <p>Exibir credencial</p>
            <span className="material-symbols-outlined">ios_share</span>
          </div>
        </a>
      </div>
    </div>
  )
}
