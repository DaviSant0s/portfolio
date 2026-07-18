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
      <header className='fixed inset-x-0 top-[25px] z-[999999999999999999] flex h-[var(--heightHeaderScroll)] w-full items-center justify-center border-b border-outline bg-panel shadow-soft'>

        <div className='flex h-full w-[min(95%,var(--sectionWidth))] flex-col overflow-x-hidden'>
          <div className='flex h-full items-center justify-between gap-3'>
            <Logo/>

            {!isTabletOrMobile &&
            
              <div className='flex h-full min-w-[600px] w-[600px] items-center justify-start'>

                <NavHeader/>

              </div>
            }

            <div className='flex h-full w-fit items-center justify-end'>

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
                <div className='ml-2.5 flex items-center justify-center'>
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
