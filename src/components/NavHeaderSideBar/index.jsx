import { Link } from 'react-scroll';
import './styles.css';
import { useSideBar } from '../../context/SideBarContext';
import { useHeader } from '../../context/HeaderContext';


export default function NavHeaderSideBar() {

  const { setMenuEnabled } = useSideBar();
  const { activeSection, setActiveSection } = useHeader();

  const handleClickCloseSideBar = (sectionName) => {
    setActiveSection(sectionName);
    setMenuEnabled(false)
  }

  return (
    <nav className='nav-header-sideBar'>

      <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          className={`home_sideBar link-page ${activeSection === 'home' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('home')}
        >
          <span className="material-symbols-outlined">home</span>
          <span>Início</span>
          </div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className={`certifications_sideBar link-page ${activeSection === 'certifications' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('certifications')}
        >
          <span className="material-symbols-outlined">verified</span>
          <span>Certificações</span>
          </div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className={`skills_sideBar link-page ${activeSection === 'skills' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('skills')}
        >
          <span className="material-symbols-outlined">emoji_objects</span>
          <span>Habilidades</span>
        </div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className={`projects_sideBar link-page ${activeSection === 'projects' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('projects')}
        >
          <span className="material-symbols-outlined">folder_open</span>
          <span>Projetos</span>
        </div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className={`experiences_sideBar link-page ${activeSection === 'experience' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('experience')}
        >
          <span className="material-symbols-outlined">badge</span>
          <span>Experiências</span>
        </div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className={`contact_sideBar link-page ${activeSection === 'contact' ? 'is-active' : ''}`}
          onClick={() => handleClickCloseSideBar('contact')}
        >
          <span className="material-symbols-outlined">contact_page</span>
          <span>Contato</span>
        </div>
      </Link>
    </nav>
  )
}
