import { LazyMotion, domAnimation } from 'motion/react';
import { useLocation } from 'react-router-dom';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import HeaderProvider from './context/HeaderContext';
import { useTheme } from './context/ThemeContext';
import AppRoutes from './routes';

/* toastfy */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBarProvider from './context/SideBarContext';
import { useMediaQuery } from 'react-responsive';

function App() {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <LazyMotion features={domAnimation}>
      <div className='relative bg-app text-copy'>
        <HeaderProvider>

          <SideBarProvider>
            <Headers/>
          </SideBarProvider>

          {!isTabletOrMobile && isHomePage &&
          
            <FloatingButtons/>
          
          }
          <div className='mx-auto w-full bg-app'>
            <ToastContainer
              theme={theme}
              className='[--toastify-toast-top:calc(var(--heightHeaderScroll)+var(--noticeHeight)+8px)]'
            />

            <AppRoutes/>
          </div>

          <Footer/>
        </HeaderProvider>

      </div>
    </LazyMotion>

  )
}

export default App
