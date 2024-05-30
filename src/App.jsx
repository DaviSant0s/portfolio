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

function App() {

  return (
    <div className='app-container'>
      
      <HeaderProvider>
        <Headers/>
        <FloatingButtons/>
        <div className='body-container'>
          <ToastContainer />
          <Home/>
          <Certifications/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>

        <Footer/>
      </HeaderProvider>
    </div>

  )
}

export default App
