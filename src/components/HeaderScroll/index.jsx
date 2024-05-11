import { useEffect, useState } from 'react';
import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';

export default function HeaderScroll() {
  
  /* estados para a animação do darkmode */
  const [ darkMode_scroll, setDarkMode_scroll ] = useState(false);
  const [ animacaoDarkModeRotate_scroll, setAnimacaoDarkModeRotate_scroll ] = useState({});
  const [ animacaoDarkModeTranslate_scroll, setAnimacaoDarkModeTranslate_scroll ] = useState({});
  
  /* efeito para o darkmode */
  useEffect(() => {
    if(darkMode_scroll) {
      setAnimacaoDarkModeRotate_scroll({transform: 'rotate(360deg)'});
      setAnimacaoDarkModeTranslate_scroll({transform: 'translate(25px)'});
      
    } else{
      setAnimacaoDarkModeRotate_scroll({});
      setAnimacaoDarkModeTranslate_scroll({});
    }
  }, [darkMode_scroll]);

  return (
    <header className='header-container-scroll'>
      <div className='header-content-scroll'>
        <div className='logo-and-buttons-header-scroll'>
          <Logo headerScroll={true} />
          <div className='navHeaderAnimationBug-container-scroll'>
            <NavHeader style_nav={{height: '41px' }}/>
          </div>
          <div className='btns-header-scroll'>

            <div className='contact-btn-scroll'>

                <a className='curriculum-btn-scroll' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
                  <Button name={'Currículo'} icon={'file_download'}/>
                </a>
              
            </div>

            <div className='dark-mode-container-scroll'>
              <div onClick={() => setDarkMode_scroll(s => !s)} className='dark-mode-content-scroll'>
                <div style={animacaoDarkModeTranslate_scroll} className='circle-mode-scroll'>

                    
                    {darkMode_scroll && 
                      <span style={animacaoDarkModeRotate_scroll} className="material-icons darkMode-scroll mode-scroll">dark_mode</span>
                    }

                    {!darkMode_scroll && 
                      <span style={animacaoDarkModeRotate_scroll} className="material-icons lightMode-scroll mode-scroll">light_mode</span>
                    }
                </div>
              </div>

            </div>


          </div>
          
        </div>
        
      </div>
    </header>
  );
}