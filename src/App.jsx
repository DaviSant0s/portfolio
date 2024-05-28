import './App.css';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import HeaderProvider from './context/HeaderContext';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (

    <div className='app-container'>
      <HeaderProvider>
        <Headers/>
      </HeaderProvider>
      
      <FloatingButtons/>
      <div className='body-container'>
        <Home/>
        <Certifications/>
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
      <Footer/>
    </div>

  )
}

export default App
