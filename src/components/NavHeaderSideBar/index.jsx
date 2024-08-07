import { Link } from 'react-scroll';
import './styles.css';
import { useSideBar } from '../../context/SideBarContext';
import useScrollAnimationSideBar from '../../hooks/header/useScrollAnimationSideBar';


export default function NavHeaderSideBar() {

  const { setMenuEnabled } = useSideBar();

  const handleClickCloseSideBar = () => {
    setMenuEnabled(false)
  }

  useScrollAnimationSideBar();

  return (
    <nav className='nav-header-sideBar'>

      <Link to='id_home' smooth={true} offset={-80} className='Link'>
        <div 
          className='home_sideBar link-page default-focus-sidebar'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">home</span>
          <span>Início</span>
          </div>
      </Link>

      <Link to='id_certifications' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='certifications_sideBar link-page'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">verified</span>
          <span>Certificações</span>
          </div>
      </Link>

      <Link to='id_skills' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='skills_sideBar link-page'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">emoji_objects</span>
          <span>Habilidades</span>
        </div>
      </Link>

      <Link to='id_projects' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='projects_sideBar link-page'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">folder_open</span>
          <span>Projetos</span>
        </div>
      </Link>

      <Link to='id_experience' smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='experiences_sideBar link-page'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">badge</span>
          <span>Experiências</span>
        </div>
      </Link>

      <Link to='id_contact'  smooth={true} offset={-79} duration={700} className='Link'>
        <div 
          className='contact_sideBar link-page'
          onClick={handleClickCloseSideBar}
        >
          <span className="material-symbols-outlined">contact_page</span>
          <span>Contato</span>
        </div>
      </Link>
    </nav>
  )
}