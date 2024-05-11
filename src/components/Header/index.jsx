import { useEffect, useState } from 'react';
import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';

export default function Header() {
  
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

  return (

    <header className='header-container'>
      <div className='header-content'>
        <div className='logo-and-buttons-header'>
          <Logo/>
          <div className='btns-header'>

            <div className='contact-btn'>

                <a className='curriculum-btn' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
                  <Button name={'Currículo'} icon={'file_download'}/>
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
        
        <NavHeader/>
      </div>
    </header>

  );
}