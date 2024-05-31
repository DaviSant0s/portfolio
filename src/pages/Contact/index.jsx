import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { GlobalHeaderContext } from '../../context/HeaderContext';
import emailjs from '@emailjs/browser';

/* emailjs */
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config';

import './styles.css';

export default function Contact() {
  
  /* estados para a copia de contatos */
  const [ contactCopiedGmail, setContactCopiedGmail ] = useState(false);
  const [ contactCopiedWhats, setContactCopiedWhats ] = useState(false);
  /* fim */

  /* estados para envio de email pelo formulario */
  const [ name_sendEmails, setName_sendEmails ] = useState('');
  const [ email_sendEmails, setEmail_sendEmails ] = useState('');
  const [ message_sendEmails, setMessage_sendEmails ] = useState('');
  /* fim */


  /* retorna a posição do scroll do estado global */
  const headerContext = useContext(GlobalHeaderContext);
  const { scrolbarPositionWin } = headerContext;
  /* fim */

  /* função para envio de email */
  const  handleSendEmail = async e => {
    e.preventDefault();

    if(name_sendEmails === '' || email_sendEmails === '' || message_sendEmails === '') {
      toast.warning("Preencha todos os campos", {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })

      return;
      
    }

    try {

      const templateParams = {
        from_name: name_sendEmails,
        email: email_sendEmails, 
        message: message_sendEmails
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      

      setName_sendEmails('');
      setEmail_sendEmails('');
      setMessage_sendEmails('');
      
      toast.success("Email enviado!", {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })
      
    } catch (err) {

      toast.error("Email enviado!", {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })
      
    }
    
  }

  /* fim */

  
  /* função que faz uma copia do comtato para area de transferência */
  const handleContactCopy = async (e) => {

    try {
      
      if(e === 'email' && !contactCopiedGmail){
        await navigator.clipboard.writeText('daviir17@gmail.com');
        
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
        await navigator.clipboard.writeText('53999322366');
        
        toast.success("Copiado para área de transferênca!", {
          className: scrolbarPositionWin > 180 ? "toast-message" : '',
          autoClose: 2000
          
        })
        
        setContactCopiedWhats(true);
        setTimeout(() => {
          setContactCopiedWhats(false);
        }, 2000);
      }



    } catch (error) {

      toast.error( `Erro ao copiar o ${e === 'email' ? 'email ' : 'número de telefone'}`, {
        className: scrolbarPositionWin > 180 ? "toast-message" : '',
        autoClose: 2000
        
      })
      
    }
    
  }
  /* fim */

  return (
    <div className='contact-container defaultPages'>

      <div className='contact-content'>
        <h1>Contato</h1>
        <div className='input-and-social-container-contact'>
          <form id='form-contact' method="post" onSubmit={handleSendEmail}>

            <div className='name-input-contact-container input-contact'>

              <input 
              value={name_sendEmails} 
              onChange={e => setName_sendEmails(e.target.value)}
              type="text" 
              name="name-input-contact" 
              placeholder='Digite seu nome e sobrenome'/>

            </div>

            <div className='email-input-contact-container input-contact'>

              <input 
              value={email_sendEmails} 
              onChange={e => setEmail_sendEmails(e.target.value)}
              type="email" 
              name="email-input-contact" 
              placeholder='Digite seu e-mail'/>

            </div>

            <div className='message-input-contact-container input-contact'>
              <textarea 
              value={message_sendEmails} 
              onChange={e => setMessage_sendEmails(e.target.value)}
              name="message-input-contact" 
              placeholder='Sua mensagem...'/>
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
