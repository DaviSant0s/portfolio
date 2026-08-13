import { LazyMotion, domAnimation } from 'motion/react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import RouteScrollManager from './components/RouteScrollManager';
import Bio from './pages/Bio';
import HeaderProvider from './context/HeaderContext';
import { useTheme } from './context/ThemeContext';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Articles from './pages/Articles';
import Article from './pages/Article';

/* toastfy */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CertificationsProvider from './context/CertificationsContext';
import SideBarProvider from './context/SideBarContext';
import { useMediaQuery } from 'react-responsive';

function PortfolioHome() {
  return (
    <>
      <Home/>

      <Bio/>
      <Skills/>

      <Projects/>
      <Experience/>

      <CertificationsProvider>
        <Certifications/>
      </CertificationsProvider>

      <Contact/>
    </>
  );
}

function App() {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <LazyMotion features={domAnimation}>
      <div className='relative bg-app text-copy'>
        <RouteScrollManager/>

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

            <Routes>
              <Route path='/' element={<PortfolioHome/>}/>
              <Route path='/artigos' element={<Articles/>}/>
              <Route path='/artigos/:slug' element={<Article/>}/>
              <Route path='*' element={<Navigate to='/' replace/>}/>
            </Routes>
          </div>

          <Footer/>
        </HeaderProvider>

      </div>
    </LazyMotion>

  )
}

export default App
