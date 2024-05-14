import { Link } from 'react-scroll';
import './styles.css';
import { useContext } from 'react';
import { GlobalHeaderContext } from '../../context/HeaderContext';

export default function NavHeader( { style_nav={} } ) {
  const headerContext = useContext(GlobalHeaderContext);
  const { styleHome, styleCertification, styleSkills, styleProjects } = headerContext;

  
  return (
    <nav className='nav-header' style={style_nav} >

      <Link to='id_header' smooth={true} className='Link'>
        <div style={styleHome} className='home link-page'>Home</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div style={styleCertification} className='certifications link-page'>Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-80} duration={700} className='Link'>
        <div style={styleSkills} className='skills link-page'>Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-80} duration={700} className='Link'>
        <div style={styleProjects} className='projects link-page'>Projetos</div>
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