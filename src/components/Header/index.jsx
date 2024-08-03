import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';
import DarkModeBtn from '../DarkModeBtn'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

export default function Header() {
  // responsividade
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const Mobile = useMediaQuery({query: '(max-width: 500px)'});
  const miniMobile = useMediaQuery({query: '(max-width: 410px)'});

  // estados
  const [ menuEnabled, setMenuEnabled ] = useState(false);
  
  return (
    <header className='header-container-scroll'>
      <div className='header-content-scroll'>
        <div className='logo-and-buttons-header-scroll'>
          <Logo  menuEnabled={menuEnabled} setMenuEnabled={setMenuEnabled}/>

          {!isTabletOrMobile &&
          
            <div className='navHeaderAnimationBug-container-scroll'>

              <NavHeader/>

            </div>
          }

          <div className='btns-header-scroll'>

            {!miniMobile &&
            
              <div className='contact-btn-scroll'>

                  <a className='curriculum-btn-scroll' href="https://drive.google.com/file/d/1hHtHCqwOIouLySi8dBQeAUHaJB8wdku1/view?usp=sharing" target='_blank'>
                    <Button name={'Currículo'} icon={'file_download'}/>
                  </a>
                
              </div>
            
            }

            {(!Mobile || miniMobile) &&
              <DarkModeBtn styles_container={{marginTop: '0px'}}/>
            }


          </div>
          
        </div>
        
      </div>
    </header>
  );
}