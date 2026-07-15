import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

/* emailjs */
import { EMAILJS_CONFIGURED, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config';

import './styles.css';
import Loading from '../../components/Loading';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Contact() {
  const { ref } = useTrackActiveSection('contact');
  
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
  const [ isSendingEmail, setIsSendingEmail ] = useState(false);
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

    if (!EMAILJS_CONFIGURED) {
      toast_func(toast.error, "Formulário temporariamente indisponível", 2500);
      return;
    }

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

      setIsSendingEmail(true);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      

      setName_sendEmails('');
      setEmail_sendEmails('');
      setMessage_sendEmails('');

      toast_func(toast.success, "Email enviado!", 2000);

      setIsSendingEmail(false);
      
    } catch (err) {
      setIsSendingEmail(false);
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
    <div ref={ref} id='id_contact' className='contact-container defaultPages'>

      <div className='contact-content'>
        <div className='title-input-social-container'>
          <h1 id='id_title_contact'>
            Contatos
          </h1>
          <div className='input-and-social-container-contact'>
            <form id='form-contact' method="post" onSubmit={handleSendEmail}>
              <div className='name-input-contact-container input-contact'>
                <label className='sr-only' htmlFor='contact-name'>Nome completo</label>
                <input
                id='contact-name'
                value={name_sendEmails}
                onChange={e => setName_sendEmails(e.target.value)}
                type="text"
                name="name-input-contact"
                autoComplete='name'
                required
                placeholder='Digite seu nome e sobrenome'/>
              </div>
              <div className='email-input-contact-container input-contact'>
                <label className='sr-only' htmlFor='contact-email'>Seu e-mail</label>
                <input
                id='contact-email'
                value={email_sendEmails}
                onChange={e => setEmail_sendEmails(e.target.value)}
                type="email"
                name="email-input-contact"
                autoComplete='email'
                required
                placeholder='Digite seu e-mail'/>
              </div>
              <div className='message-input-contact-container input-contact'>
                <label className='sr-only' htmlFor='contact-message'>Mensagem</label>
                <textarea
                id='contact-message'
                value={message_sendEmails}
                onChange={e => setMessage_sendEmails(e.target.value)}
                name="message-input-contact"
                required
                placeholder='Sua mensagem...'/>
              </div>
              <button
                className='btn-submit-form-contact'
                type="submit"
                form='form-contact'
                disabled={isSendingEmail}
              >
                {isSendingEmail ? <Loading/> : 'Enviar' }
              </button>
            </form>
            <div className='social-container-contact'>
              <div className='social-content-contact'>
                <div className='email-social-contact social-contact'>
                  <img src={gmail} alt="Ícone do Gmail" />
                  <span>E-mail</span>
                  <p>
                    daviir17@gmail.com
                    <button
                      type='button'
                      aria-label='Copiar e-mail'
                      onClick={() => handleContactCopy('email')}
                      className='copy-icon-contact'
                    >
                      {!contactCopiedGmail &&
                        <span className="material-symbols-outlined">content_copy</span>
                      }
                      {contactCopiedGmail &&
                        <span className="material-symbols-outlined">check</span>
                      }
                    </button>
                  </p>
                </div>
                <div className='whatsapp-social-contact social-contact'>
                  <img src={whatsapp} alt="Ícone do WhatsApp" />
                  <span>Whatsapp</span>
                  <p>
                    (53) 99932-2366
                    <button
                      type='button'
                      aria-label='Copiar número de WhatsApp'
                      onClick={() => handleContactCopy('whats')}
                      className='copy-icon-contact'
                    >
                      {!contactCopiedWhats &&
                        <span className="material-symbols-outlined">content_copy</span>
                      }
                      {contactCopiedWhats &&
                        <span className="material-symbols-outlined">check</span>
                      }
                    </button>
                  </p>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
