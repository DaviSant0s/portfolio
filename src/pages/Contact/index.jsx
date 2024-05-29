import './styles.css';
import gmail from '../../assets/social/gmail.webp';
import whatsapp from '../../assets/social/whatsapp.png';

export default function Contact() {
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
              <p>daviir17@gmail.com</p>
            </div>

            <div className='whatsapp-social-contact social-contact'>
              <img src={whatsapp} alt="" />
              <span>Whatsapp</span>
              <p>(53) 99932-2366</p>
            </div>
          </div>
        </div>
        <button className='btn-submit-form-contact' type="submit" form='form-contact'>Enviar</button>
      </div>

    </div>
  )
}
