import './App.css'
import Header from './components/Header'
import Experiences from './pages/Experiences'
import Home from './pages/Home'

function App() {

  return (
   <div className='app-container'>
    <Header/>
    <div className='body-container'>
      <Home/>
      <Experiences/>
      <Home/>
      <Experiences/>
    </div>

   </div>
  )
}

export default App
