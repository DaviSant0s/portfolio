import './styles.css';
import photo from '../../assets/img-perfil.jpeg'

export default function Logo(style_portfolio={}, style_daviSantos={}) {
  return (
    <div className='logo-container'>
      <div className='container-photo-logo'>
        <img src={photo} alt="" />
      </div>

      <div  className='container-title-logo'>
        <h1 style={style_portfolio}>Portfólio</h1>
        <span style={style_daviSantos}>DaviSantos</span>
      </div>
    </div>
  )
}