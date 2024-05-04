import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Certifications from './pages/Certifications';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (
   <div className='app-container'>
    <Header/>
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
