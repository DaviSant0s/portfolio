import { Link } from 'react-scroll';
import { useHeader } from '../../context/HeaderContext';
import './styles.css';


export default function NavHeader({ styles={} }) {
  const { activeSection, setActiveSection } = useHeader();

  return (
    <nav style={styles} className='nav-header'>

      <Link to='id_home' smooth={true} offset={-80} className='Link' onClick={() => setActiveSection('home')}>
        <div 
          className={`home link-page ${activeSection === 'home' ? 'is-active' : ''}`}
        >Início</div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link' onClick={() => setActiveSection('certifications')}>
        <div 
          className={`certifications link-page ${activeSection === 'certifications' ? 'is-active' : ''}`}
        >Certificações</div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link' onClick={() => setActiveSection('skills')}>
        <div 
          className={`skills link-page ${activeSection === 'skills' ? 'is-active' : ''}`}
        >Habilidades</div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link' onClick={() => setActiveSection('projects')}>
        <div 
          className={`projects link-page ${activeSection === 'projects' ? 'is-active' : ''}`}
        >Projetos</div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link' onClick={() => setActiveSection('experience')}>
        <div 
          className={`experiences link-page ${activeSection === 'experience' ? 'is-active' : ''}`}
        >Experiências</div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link' onClick={() => setActiveSection('contact')}>
        <div 
          className={`contact link-page ${activeSection === 'contact' ? 'is-active' : ''}`}
        >Contato</div>
      </Link>
    </nav>
  )
}
