import * as Dialog from '@radix-ui/react-dialog';
import Logo from '../Logo';
import './styles.css';
import Button from '../Button';
import NavHeader from '../NavHeader';
import DarkModeBtn from '../DarkModeBtn'
import { useMediaQuery } from 'react-responsive';
import { useSideBar } from '../../context/SideBarContext';
import SideBar from '../SideBar';
import { useEffect } from 'react';

export default function Header() {
  // responsividade
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const miniMobile = useMediaQuery({query: '(max-width: 410px)'});

  // estados globais
  const { menuEnabled, setMenuEnabled } = useSideBar();

  // faz com que o side bar feche uando mudar a mediaquery
  useEffect(() => {
    setMenuEnabled(false)
  }, [isTabletOrMobile, setMenuEnabled])
  
  
  return (
    <Dialog.Root open={menuEnabled} onOpenChange={setMenuEnabled}>
      <header className='header-container-scroll'>

        <div className='header-content-scroll'>
          <div className='logo-and-buttons-header-scroll'>
            <Logo/>

            {!isTabletOrMobile &&
            
              <div className='navHeaderAnimationBug-container-scroll'>

                <NavHeader/>

              </div>
            }

            <div className='btns-header-scroll'>

              {!miniMobile &&
              
                <div className='contact-btn-scroll'>

                    <a
                      className='curriculum-btn-scroll'
                      href="https://drive.google.com/file/d/186QiKzScSw8rHyrKlm4UMyCKWL9a_5mh/view?usp=sharing"
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button as='span' name={'Currículo'} icon={'file_download'}/>
                    </a>
                  
                </div>
              
              }

              {!isTabletOrMobile &&
                <div className='theme-toggle-header'>
                  <DarkModeBtn/>
                </div>
              }


            </div>
            
          </div>
          
        </div>
        
        {isTabletOrMobile &&
          <SideBar/>
        }

      </header>
    </Dialog.Root>
  );
}
