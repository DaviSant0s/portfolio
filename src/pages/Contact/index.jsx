import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

/* emailjs */
import { EMAILJS_CONFIGURED, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../config';
import { contactFormSchema } from '../../schemas/contactFormSchema';

import './styles.css';
import Loading from '../../components/Loading';
import useTrackActiveSection from '../../hooks/header/useTrackActiveSection';

export default function Contact() {
  const { ref } = useTrackActiveSection('contact');
  
  /* estados para a copia de contatos */
  const [ contactCopiedGmail, setContactCopiedGmail ] = useState(false);
  const [ contactCopiedWhats, setContactCopiedWhats ] = useState(false);
  /* fim */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  // função para reaproveitar o toast
  const toast_func = (type, msg, autoClose=null) => {
    type(msg, {
      className:  "toast-message",
      autoClose: autoClose
      
    });
  }
  /* fim */

  /* função para envio de email */
  const handleSendEmail = async (formData) => {
    if (!EMAILJS_CONFIGURED) {
      toast_func(toast.error, "Formulário temporariamente indisponível", 2500);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        email: formData.email, 
        message: formData.message
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      reset();

      toast_func(toast.success, "Email enviado!", 2000);
      
    } catch {
      toast_func(toast.error, "Falha ao enviar e-mail", 2000);
    }
  };

  const handleInvalidSubmit = () => {
    toast_func(toast.warning, "Revise os campos destacados", 2200);
  };

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
            <form
              id='form-contact'
              method="post"
              noValidate
              onSubmit={handleSubmit(handleSendEmail, handleInvalidSubmit)}
            >
              <div className={`name-input-contact-container input-contact ${errors.name ? 'has-error' : ''}`}>
                <label className='sr-only' htmlFor='contact-name'>Nome completo</label>
                <input
                  id='contact-name'
                  type="text"
                  autoComplete='name'
                  placeholder='Digite seu nome e sobrenome'
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  {...register('name')}
                />
                {errors.name &&
                  <span id='contact-name-error' className='field-error-message' role='alert'>
                    {errors.name.message}
                  </span>
                }
              </div>
              <div className={`email-input-contact-container input-contact ${errors.email ? 'has-error' : ''}`}>
                <label className='sr-only' htmlFor='contact-email'>Seu e-mail</label>
                <input
                  id='contact-email'
                  type="email"
                  autoComplete='email'
                  placeholder='Digite seu e-mail'
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  {...register('email')}
                />
                {errors.email &&
                  <span id='contact-email-error' className='field-error-message' role='alert'>
                    {errors.email.message}
                  </span>
                }
              </div>
              <div className={`message-input-contact-container input-contact ${errors.message ? 'has-error' : ''}`}>
                <label className='sr-only' htmlFor='contact-message'>Mensagem</label>
                <textarea
                  id='contact-message'
                  placeholder='Sua mensagem...'
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  {...register('message')}
                />
                {errors.message &&
                  <span id='contact-message-error' className='field-error-message' role='alert'>
                    {errors.message.message}
                  </span>
                }
              </div>
              <button
                className='btn-submit-form-contact'
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loading/> : 'Enviar' }
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
