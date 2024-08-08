import { Link } from 'react-scroll';
import './styles.css';

export default function SocialsGroup() {
  return (
    <div className='socialsGroup-container'>
        <a href="https://www.linkedin.com/in/davisantoss/" target='_blank'>
          <i className='bx bxl-linkedin'/>
        </a>

        <a href="https://github.com/DaviSant0s" target='_blank'>
          <i className='bx bxl-github'/>
        </a>

        <a href="https://api.whatsapp.com/send/?phone=53999322366&text=Ol%C3%A1%2C%20tudo%20bem%20?" target='_blank'>
          <i className='bx bxl-whatsapp'/>
        </a>

        <Link to='id_contact'  smooth={true} offset={-79} duration={700} >
          <i className='bx bxl-gmail'></i>
        </Link>

    </div>
  )
}
