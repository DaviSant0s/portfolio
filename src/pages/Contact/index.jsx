import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './styles.css';
import { GlobalHeaderContext } from '../../context/HeaderContext';

export default function Contact() {
  /* retorna a posição do scroll do estado global */
  const headerContext = useContext(GlobalHeaderContext);
  const { scrolbarPositionWin } = headerContext;
  /* fim */

  const [ contactCopiedGmail, setContactCopiedGmail ] = useState(false);
  const [ contactCopiedWhats, setContactCopiedWhats ] = useState(false);

  const handleContactCopy = (e) => {
    
    if(e === 'email' && !contactCopiedGmail){

      toast.success("Copiado para área de transferênca!", {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })
      
      setContactCopiedGmail(true);
      setTimeout(() => {
        setContactCopiedGmail(false);
      }, 2000);
    }
    
    if(e === 'whats' && !contactCopiedWhats){

      toast.success("Copiado para área de transferênca!", {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })

      setContactCopiedWhats(true);
      setTimeout(() => {
        setContactCopiedWhats(false);
      }, 2000);
    }
  }


  return (
    <div className='contact-container defaultPages'>

      <div className='contact-content'>
        <h1>Contato</h1>
        <div className='input-and-social-container-contact'>
          <form id='form-contact' method="post" onSubmit={() => {alert('Clicado!')}}>
            <div className='name-input-contact-container input-contact'>
              <input type="text" name="name-input-contact" placeholder='Nome e Sobrenome'/>
            </div>
            <div className='email-input-contact-container input-contact'>
              <input type="email" name="email-input-contact" placeholder='E-mail'/>
            </div>
            <div className='message-input-contact-container input-contact'>
              <textarea name="message-input-contact" placeholder='O que tem em mente?'></textarea>
            </div>
          </form>
          <div className='social-container-contact'>
            <div className='email-social-contact social-contact'>
              <img src={gmail} alt="" />
              <span>E-mail</span>
              <p>
                daviir17@gmail.com
                <span 
                  
                  onClick={() => handleContactCopy('email')} 
                  className="material-symbols-outlined copy-icon-contact"
                >
                  {!contactCopiedGmail &&
                    'content_copy' 
                  }

                  {contactCopiedGmail &&
                    'check'
                  }
                </span>
              </p>

            </div>

            <div className='whatsapp-social-contact social-contact'>
              <img src={whatsapp} alt="" />
              <span>Whatsapp</span>

              <p>
                (53) 99932-2366 
                <span
                  onClick={() => handleContactCopy('whats')} 
                  className="material-symbols-outlined copy-icon-contact"
                 >
                  {!contactCopiedWhats &&
                    'content_copy'
                  }

                  {contactCopiedWhats &&
                    'check'
                  }
                </span>
              </p>

            </div>

            
          </div>
        </div>
        <button className='btn-submit-form-contact' type="submit" form='form-contact'>Enviar</button>
      </div>

    </div>
  )
}
