import './styles.css';
import photo from '../../assets/img-perfil.jpeg'

export default function Logo() {

  return (
    <div className='logo-container'>
      <div className='container-photo-logo' style={{width: '40px', height: '40px'}}>
        <img src={photo} alt=""/>
      </div>

      <div  className='container-title-logo'>
        <h1 style={{fontSize: '2em'}}>Portfólio</h1>
        <span style={{fontSize: '1em'}}>Davi Santos</span>
      </div>
    </div>
  )
}