import { Link } from 'react-scroll';
import Logo from '../Logo';
import './styles.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>

        <div className='social-btns-footer'>
        <i class='bx bxl-linkedin' ></i>
        <i class='bx bxl-github' ></i>
        <i class='bx bxl-whatsapp' ></i>
        </div>

        <nav className='navigation-footer' >

          <Link to='id_header' smooth={true} className='Link-footer'>
            <span>Início</span>
          </Link>

          <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link-footer'>
            <span>Certificações</span>
          </Link>

          <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link-footer'>
            <span>Habilidades</span>
          </Link>

          <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link-footer'>
            <span>Projetos</span>
          </Link>

          <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link-footer'>
            <span>Experiências</span>
          </Link>

          <Link to=''  className='Link-footer'>
            <span>Contato</span>
          </Link>

        </nav>

        <span className='author-footer'>
          Criado por Davi Santos
        </span>
      </div>
    </footer>
  )
}
