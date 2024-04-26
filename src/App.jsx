import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Certifications from './pages/Certifications';
import Home from './pages/Home';

function App() {

  return (
   <div className='app-container'>
    <Header/>
    <div className='body-container'>
      <Home/>
      <Certifications/>
    </div>
    <Footer/>
   </div>
  )
}

export default App
