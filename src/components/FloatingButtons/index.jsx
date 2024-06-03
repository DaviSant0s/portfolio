import './styles.css';

export default function FloatingButtons() {
  return (
    <div className='floatingButtons-container'>
      <a href="https://www.linkedin.com/in/davisantoss/" target='_blank'>
        <i className='bx bxl-linkedin' />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?" target='_blank'>
        <i className='bx bxl-whatsapp' />
      </a>
      <a href="https://github.com/DaviSant0s" target='_blank'>
        <i className='bx bxl-github' />
      </a>
    </div>
  )
}
