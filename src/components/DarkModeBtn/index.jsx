import { useEffect, useState } from 'react';
import './styles.css';
import { useDarkmode } from '../../context/darkmodeContext';

export default function DarkModeBtn({ styles_container={} }) {

    /* estados para a animação do darkmode */
    const { darkMode, setDarkMode } = useDarkmode();

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


    // Atualiza a classe do body sempre que o tema mudar
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);

  return (

    <div style={styles_container} className='DarkModeBtn-container'>
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

  )
}

{/* <div className='darkModeBtn-container'>
  
</div> */}
