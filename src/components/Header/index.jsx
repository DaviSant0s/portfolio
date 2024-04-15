import { useEffect, useState } from 'react';
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
                  GitHub
                </div>
              </a>
              <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' className='link-linkedin'>
                <div className='linkedin social-contact'>
                  <img src={linkedin} alt="linkedin-icon" />
                  LinkedIn
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
          <div className='home link-page'>Início</div>
          <div className='about link-page'>Sobre mim</div>
          <div className='experiences link-page'>Experiências</div>
          <div className='projects link-page'>Projetos</div>
          <div className='certifications link-page'>Certificações</div>
          <div className='skills link-page'>Habilidades</div>
          <div className='contact link-page'>Contato</div>
        </nav>
      </div>
    </header>
  );
}
    
    