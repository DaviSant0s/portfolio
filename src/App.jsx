import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
   <div className='app-container'>
    <Header/>
    <div className='body-container'>
      <Home/>
    </div>

   </div>
  )
}

export default App
