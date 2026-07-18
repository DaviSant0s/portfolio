import { LazyMotion, domAnimation } from 'motion/react';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import HeaderProvider from './context/HeaderContext';
import { useTheme } from './context/ThemeContext';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

/* toastfy */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CertificationsProvider from './context/CertificationsContext';
import SideBarProvider from './context/SideBarContext';
import { useMediaQuery } from 'react-responsive';

function App() {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const { theme } = useTheme();

  return (
    <LazyMotion features={domAnimation}>
      <div className='relative bg-app text-copy'>

        <HeaderProvider>

          <SideBarProvider>
            <Headers/>
          </SideBarProvider>

          {!isTabletOrMobile &&
          
            <FloatingButtons/>
          
          }
          <div className='mx-auto w-full bg-app'>
            <ToastContainer theme={theme} />

            <Home/>

            <CertificationsProvider>
              <Certifications/>
            </CertificationsProvider>
            

            <Skills/>

            <Projects/>
            
            <Experience/>
            <Contact/>
          </div>

          <Footer/>
        </HeaderProvider>

      </div>
    </LazyMotion>

  )
}

export default App
