import { Link } from 'react-scroll';
import useScrollAnimationHeader from '../../hooks/header/useScrollAnimationHeader';
import './styles.css';


export default function NavHeader({ styles={} }) {
  useScrollAnimationHeader()

  return (
    <nav style={styles} className='nav-header'>

      <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          className='home link-page default-focus-header'
        >Início</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='certifications link-page'
        >Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='skills link-page'
        >Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='projects link-page'
        >Projetos</div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='experiences link-page'
        >Experiências</div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='contact link-page'
        >Contato</div>
      </Link>
    </nav>
  )
}