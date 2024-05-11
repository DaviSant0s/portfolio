import './App.css';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Certifications from './pages/Certifications';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (
    <div className='app-container'>
      <Headers/>
      <FloatingButtons/>
      <div className='body-container'>
        <Home/>
        <Certifications/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
