import './styles.css';

export default function FloatingButtons() {
  return (
    <div className='floatingButtons-container'>
      <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' rel='noreferrer' aria-label='Abrir LinkedIn de Davi Santos'>
        <i className='bx bxl-linkedin' />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?" target='_blank' rel='noreferrer' aria-label='Abrir conversa no WhatsApp'>
        <i className='bx bxl-whatsapp' />
      </a>
      <a href="https://github.com/DaviSant0s" target='_blank' rel='noreferrer' aria-label='Abrir GitHub de Davi Santos'>
        <i className='bx bxl-github' />
      </a>
    </div>
  )
}
