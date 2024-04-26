import './App.css';
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

   </div>
  )
}

export default App
