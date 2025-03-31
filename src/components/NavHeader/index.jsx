import { Link } from 'react-scroll';
import useScrollAnimationHeader from '../../hooks/header/useScrollAnimationHeader';
import './styles.css';


export default function NavHeader() {
  
  useScrollAnimationHeader()

  return (
    <nav className='nav-header'>

      <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          className='home link-page default-focus-header'
        >HOME</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='certifications link-page'
        >CERTIFICAÇÕES</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='skills link-page'
        >HABILIDADES</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='projects link-page'
        >PROJETOS</div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='experiences link-page'
        >EXPERIÊNCIAS</div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='contact link-page'
        >CONTATO</div>
      </Link>
    </nav>
  )
}