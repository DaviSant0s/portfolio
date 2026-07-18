import * as Dialog from '@radix-ui/react-dialog';
import Logo from '../Logo';
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
      <header className='fixed inset-x-0 top-0 z-[999999999999999999] flex h-[var(--heightHeaderScroll)] w-full items-center justify-center border-b border-outline bg-panel shadow-soft'>

        <div className='content-shell flex h-full w-full overflow-x-hidden'>
          <div className='flex h-full w-full items-center justify-between gap-3 min-[1200px]:gap-5'>
            <div className='shrink-0'>
              <Logo/>
            </div>

            {!isTabletOrMobile &&
            
              <div className='flex h-full min-w-0 flex-1 items-center justify-center px-4 min-[1280px]:px-8'>

                <NavHeader/>

              </div>
            }

            <div className='flex h-full shrink-0 items-center justify-end'>

              {!miniMobile &&
              
                <div className='flex items-center justify-center gap-1 border-r border-outline pr-2 max-[500px]:border-r-0'>

                    <a
                      className='inline-flex'
                      href="https://drive.google.com/file/d/186QiKzScSw8rHyrKlm4UMyCKWL9a_5mh/view?usp=sharing"
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Button as='span' name={'Currículo'} icon={'file_download'}/>
                    </a>
                  
                </div>
              
              }

              {!isTabletOrMobile &&
                <div className='ml-2 flex items-center justify-center min-[1280px]:ml-2.5'>
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
