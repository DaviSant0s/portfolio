import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo';
import useEventListener from '../../hooks/useEventListener';
import './styles.css';

export default function Header() {
  
  /* referências paa os botões */
  const Ref_hoverBtnGithub = useRef();
  const Ref_hoverBtnLinkedin = useRef();
  
  /* estados para os botoes */
  const [ styleBtnGithub, setStyleBtnGithub] = useState({});
  const [ styleBtnLinkedin, setStyleBtnLinkedin ] = useState({});
  
  /* estados para a animação do darkmode */
  const [ darkMode, setDarkMode ] = useState(false);
  const [ animacaoDarkModeRotate, setAnimacaoDarkModeRotate ] = useState({});
  const [ animacaoDarkModeTranslate, setAnimacaoDarkModeTranslate ] = useState({});
  
  /* efeito para o darkmode */
  useEffect(() => {
    if(darkMode) {
      setAnimacaoDarkModeRotate({transform: 'rotate(360deg)'});
      setAnimacaoDarkModeTranslate({transform: 'translate(25px)'});
      
    } else{
      setAnimacaoDarkModeRotate({});
      setAnimacaoDarkModeTranslate({});
    }
  }, [darkMode]);
  
  /* função para o hover dos botoes */
  const handleMouseoverBtn = (e) => {
    
    if(Ref_hoverBtnGithub.current.contains(e.target)) {
      setStyleBtnGithub({opacity: 1});
    } else {
      setStyleBtnGithub({})
    }

    if(Ref_hoverBtnLinkedin.current.contains(e.target)) {
      setStyleBtnLinkedin({opacity: 1});
    } else {
      setStyleBtnLinkedin({})
    }
  }

  /* customHook de hover */
  useEventListener('mouseover', handleMouseoverBtn);

  return (
    <header className='header-container'>
      <div className='header-content'>
        <div className='logo-and-buttons-header'>
          <Logo/>
          <div className='btns-header'>

            <div className='contact-btn'>
              <a href="https://github.com/DaviSant0s" target='_blank' className='link-github'>
                <div ref={Ref_hoverBtnGithub} className='github social-contact'>
                  <i style={styleBtnGithub} className='bx bxl-github'></i>
                  <span>GitHub</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/davisantoss/" target='_blank' className='link-linkedin'>
                <div ref={Ref_hoverBtnLinkedin} className='linkedin social-contact'>
                  <div style={styleBtnLinkedin} className='linkedin-icon-container'>
                    <i className='bx bxl-linkedin' ></i>
                  </div>
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
          <Link to='' className='Link'>
            <div className='home link-page'>Início</div>
          </Link>
          <Link to='id-ertifications' smooth={true} offset={0} duration={700} className='Link'>
            <div className='certifications link-page'>Certificações</div>
          </Link>
          {/* <div className='about link-page'>Sobre mim</div> */}
          <Link to='' className='Link'>
            <div className='experiences link-page'>Experiências</div>
          </Link>
          <Link to='' className='Link'>
            <div className='projects link-page'>Projetos</div>
          </Link>
          <Link to='' className='Link'>
            <div className='skills link-page'>Habilidades</div>
          </Link>
          <Link to='' className='Link'>
            <div className='contact link-page'>Contato</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}


{/* <img src={github} alt="github-icon" /> */}
{/* <img src={linkedin} alt="linkedin-icon" /> */}
/* import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png' */