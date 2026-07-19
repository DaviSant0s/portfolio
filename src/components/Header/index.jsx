import * as Dialog from '@radix-ui/react-dialog';
import Logo from '../Logo';
import NavHeader from '../NavHeader';
import { useMediaQuery } from 'react-responsive';
import { useSideBar } from '../../context/SideBarContext';
import { useTheme } from '../../context/ThemeContext';
import { resumeFileUrl } from '../../data/resumeFileUrl';
import SideBar from '../SideBar';
import { useEffect } from 'react';

export default function Header() {
  // responsividade
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const miniMobile = useMediaQuery({query: '(max-width: 410px)'});

  // estados globais
  const { menuEnabled, setMenuEnabled } = useSideBar();
  const { isDarkMode, toggleTheme } = useTheme();

  // faz com que o side bar feche uando mudar a mediaquery
  useEffect(() => {
    setMenuEnabled(false)
  }, [isTabletOrMobile, setMenuEnabled])
  
  
  return (
    <Dialog.Root open={menuEnabled} onOpenChange={setMenuEnabled}>
      <header className='fixed inset-x-0 top-0 z-[999999999999999999] flex h-[var(--heightHeaderScroll)] w-full items-center justify-center border-b border-outline/70 bg-panel/88 backdrop-blur-xl shadow-[0_10px_30px_-24px_var(--color-shadow-md)]'>

        <div className='content-shell flex h-full w-full overflow-x-hidden'>
          <div className='flex h-full w-full items-center justify-between gap-4 min-[1200px]:gap-8'>
            <div className='shrink-0'>
              <Logo/>
            </div>

            {!isTabletOrMobile &&
            
              <div className='flex h-full min-w-0 flex-1 items-center justify-center px-6 min-[1280px]:px-10'>

                <NavHeader/>

              </div>
            }

            <div className='flex h-full shrink-0 items-center justify-end gap-2.5 min-[1200px]:gap-3'>

              {!isTabletOrMobile &&
                <button
                  type='button'
                  aria-label='Alternar tema visual'
                  aria-pressed={isDarkMode}
                  onClick={toggleTheme}
                  className='inline-flex size-10 items-center justify-center rounded-full border border-outline/70 bg-panel/86 text-copy shadow-[0_10px_24px_-20px_var(--color-shadow-md)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-copy-soft hover:text-copy-strong focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft min-[1200px]:size-11'
                >
                  <span className='material-symbols-outlined text-[1.1rem] leading-none'>
                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>
              }

              {!miniMobile &&
              
                <a
                  className='inline-flex h-10 items-center gap-2 rounded-full bg-[#15181d] px-4 text-[0.92rem] font-semibold tracking-[-0.02em] text-white shadow-[0_14px_30px_-20px_rgba(21,24,29,0.45)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0f1115] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft dark:bg-white dark:text-[#12161d] dark:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.34)] dark:hover:bg-[#f4f7fa] min-[1200px]:h-11 min-[1200px]:px-5'
                  href={resumeFileUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Currículo</span>
                  <span className='material-symbols-outlined text-[1.05rem] leading-none'>
                    south_east
                  </span>
                </a>
              
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
