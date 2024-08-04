import { Link } from 'react-scroll';
import './styles.css';
import useScrollAnimationSideBar from '../../hooks/header/useScrollAnimationSideBar';


export default function NavHeaderSideBar() {

  useScrollAnimationSideBar();

  return (
    <nav className='nav-header-sideBar'>

      <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          className='home_sideBar link-page'
        >Início</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='certifications_sideBar link-page'
        >Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='skills_sideBar link-page'
        >Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='projects_sideBar link-page'
        >Projetos</div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='experiences_sideBar link-page'
        >Experiências</div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='contact_sideBar link-page'
        >Contato</div>
      </Link>
    </nav>
  )
}