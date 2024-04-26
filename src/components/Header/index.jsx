import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './styles.css';

export default function Header() {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ animacaoDarkModeRotate, setAnimacaoDarkModeRotate ] = useState({});
  const [ animacaoDarkModeTranslate, setAnimacaoDarkModeTranslate ] = useState({});

  useEffect(() => {
    if(darkMode) {
      setAnimacaoDarkModeRotate({transform: 'rotate(360deg)'});
      setAnimacaoDarkModeTranslate({transform: 'translate(25px)'});
      
    } else{
      setAnimacaoDarkModeRotate({});
      setAnimacaoDarkModeTranslate({});
    }
  }, [darkMode]);

  return (
    <header className='header-container'>
      <div className='header-content'>
        <div className='logo-and-buttons-header'>
          <Logo/>
          <div className='btns-header'>

            <div className='contact-btn'>
              <a href="https://github.com/DaviSant0s" target='_blank' className='link-github'>
                <div className='github social-contact'>
                  <img src={github} alt="github-icon" />
                  <span>GitHub</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' className='link-linkedin'>
                <div className='linkedin social-contact'>
                  <img src={linkedin} alt="linkedin-icon" />
                  <span>LinkedIn</span>
                </div>
              </a>
            </div>

            <div className='dark-mode-container'>
              <div onClick={() => setDarkMode(s => !s)} className='dark-mode-content'>
                <div style={animacaoDarkModeTranslate} className='circle-mode'>

                    
                    {darkMode && 
                      <span style={animacaoDarkModeRotate} className="material-icons darkMode mode">dark_mode</span>
                    }

                    {!darkMode && 
                      <span style={animacaoDarkModeRotate} className="material-icons lightMode mode">light_mode</span>
                    }
                </div>
              </div>

            </div>


          </div>
          
        </div>
        
        <nav className='nav-header'>
          <Link className='Link'>
            <div className='home link-page'>Início</div>
          </Link>
          <Link to='id-ertifications' smooth={true} offset={0} duration={700} className='Link'>
            <div className='certifications link-page'>Certificações</div>
          </Link>
          {/* <div className='about link-page'>Sobre mim</div> */}
          <Link className='Link'>
            <div className='experiences link-page'>Experiências</div>
          </Link>
          <Link className='Link'>
            <div className='projects link-page'>Projetos</div>
          </Link>
          <Link className='Link'>
            <div className='skills link-page'>Habilidades</div>
          </Link>
          <Link className='Link'>
            <div className='contact link-page'>Contato</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
    
    