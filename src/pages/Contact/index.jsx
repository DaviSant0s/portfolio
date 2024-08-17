import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

/* emailjs */
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config';

import './styles.css';
import Loading from '../../components/Loading';

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

  /* estado de loadind do emailjs */
  const [ removeLoading, setRemoveLoading ] = useState(false);
  /* fim */

  // função para reaproveitar o toast
  const toast_func = (type, msg, autoClose=null) => {
    type(msg, {
      className:  "toast-message",
      autoClose: autoClose
      
    });
  }
  /* fim */

  /* função para envio de email */
  const  handleSendEmail = async e => {
    e.preventDefault();

    if(name_sendEmails === '' || email_sendEmails === '' || message_sendEmails === '') {

      toast_func(toast.warning, "Preencha todos os campos", 2000);

      return;
      
    }

    try {

      const templateParams = {
        from_name: name_sendEmails,
        email: email_sendEmails, 
        message: message_sendEmails
      }

      setRemoveLoading(true);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      

      setName_sendEmails('');
      setEmail_sendEmails('');
      setMessage_sendEmails('');

      toast_func(toast.success, "Email enviado!", 2000);

      setRemoveLoading(false);
      
    } catch (err) {
      setRemoveLoading(false);
      toast_func(toast.error, "Falha ao enviar e-mail", 2000);
      
    }
    
  }

  /* fim */

  
  /* função que faz uma copia do comtato para area de transferência */
  const handleContactCopy = async (e) => {

    try {
      
      if(e === 'email' && !contactCopiedGmail){
        await navigator.clipboard.writeText('daviir17@gmail.com');
        
        toast_func(toast.success, "Copiado para área de transferênca!", 2000);
        
        setContactCopiedGmail(true);
        setTimeout(() => {
          setContactCopiedGmail(false);
        }, 2000);
      }
      
      if(e === 'whats' && !contactCopiedWhats){
        await navigator.clipboard.writeText('53999322366');
        
        toast_func(toast.success, "Copiado para área de transferênca!", 2000);
        
        setContactCopiedWhats(true);
        setTimeout(() => {
          setContactCopiedWhats(false);
        }, 2000);
      }



    } catch (error) {

       toast_func(toast.error, `Erro ao copiar o ${e === 'email' ? 'email ' : 'número de telefone'}`, 2000);
      
    }
    
  }
  /* fim */

  return (
    <div id='id_contact' className='contact-container defaultPages'>

      <div className='contact-content'>
        <h1 id='id_title_contact'>
          Contatos
          {/* <div style={animationTitle} className='animationTitle'></div> */}
        </h1>
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

            <button 
              className='btn-submit-form-contact' 
              type="submit" 
              form='form-contact'>{removeLoading ? <Loading/> : 'Enviar' }
            </button>

          </form>
          <div className='social-container-contact'>

            <div className='social-content-contact'>
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
        </div>
      </div>

    </div>
  )
}
