import { Link } from 'react-scroll';
import './styles.css';

export default function NavHeader( {
  style_nav={}, 
  currentStyleHome,
  currentStyleCertification,
  currentStyleSkills,
  currentStyleProjects
} ) {
  return (
    <nav className='nav-header' style={style_nav} >
      <Link to='id_header' smooth={true} className='Link'>
        <div style={currentStyleHome} className='home link-page'>Home</div>
      </Link>
      <Link to='id-ertifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div style={currentStyleCertification} className='certifications link-page'>Certificações</div>
      </Link>
      <Link to='id_skills' smooth={true} offset={-80} duration={700} className='Link'>
        <div style={currentStyleSkills} className='skills link-page'>Habilidades</div>
      </Link>
      <Link to='id_projects' smooth={true} offset={-80} duration={700} className='Link'>
        <div style={currentStyleProjects} className='projects link-page'>Projetos</div>
      </Link>
      {/* <div className='about link-page'>Sobre mim</div> */}
      <Link to='' className='Link'>
        <div className='experiences link-page'>Experiências</div>
      </Link>
      <Link to='' className='Link'>
        <div className='contact link-page'>Contato</div>
      </Link>
    </nav>
  )
}
