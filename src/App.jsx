import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import HeaderProvider from './context/HeaderContext';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

/* toastfy */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import AnimationProvider from './context/AnimationContext';
import CarouselProvider from './context/CarrouselContext';
import CertificationsProvider from './context/CertificationsContext';
import ModalCertificationProvider from './context/ModalContextCertification';

function App() {

  return (
    <div className='app-container'>
      <AnimationProvider>
        <HeaderProvider>
          <Headers/>
          <FloatingButtons/>
          <div className='body-container'>
            <ToastContainer />
            <Home/>

            <CertificationsProvider>
              <ModalCertificationProvider>
                  <Certifications/>
              </ModalCertificationProvider> 
            </CertificationsProvider>
            

            <Skills/>

            <CarouselProvider>
              <Projects/>
            </CarouselProvider>
            
            <Experience/>
            <Contact/>
          </div>

          <Footer/>
        </HeaderProvider>
      </AnimationProvider>
    </div>

  )
}

export default App
