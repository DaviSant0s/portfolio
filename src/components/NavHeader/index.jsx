import { Link } from 'react-scroll';
import './styles.css';

export default function NavHeader( {style_nav={}} ) {
  return (
    <nav style={style_nav} className='nav-header'>
      <Link to='' className='Link'>
        <div className='home link-page'>Início</div>
      </Link>
      <Link to='id-ertifications' smooth={true} offset={0} duration={700} className='Link'>
        <div className='certifications link-page'>Certificações</div>
      </Link>
      <Link to='id_skills' smooth={true} offset={0} duration={700} className='Link'>
        <div className='skills link-page'>Habilidades</div>
      </Link>
      <Link to='id_projects' smooth={true} offset={0} duration={700} className='Link'>
        <div className='projects link-page'>Projetos</div>
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
