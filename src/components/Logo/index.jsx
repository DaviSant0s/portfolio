import { useMediaQuery } from 'react-responsive'
import photo from '../../assets/img-perfil.jpeg'
import './styles.css';

export default function Logo() {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  

  return (
    <div className='logo-container'>

        {/* se não couber o nav vai desaparecer a foto e aparecer as barras */}

        {
          isTabletOrMobile && 
          <span className="material-symbols-outlined menuHeader">menu</span>
        }

        {!isTabletOrMobile && 
          <div className='container-photo-logo' style={{width: '40px', height: '40px'}}>
            <img src={photo} alt=""/>
          </div>
        }

      <div  className='container-title-logo'>
        <h1/*  style={{fontSize: '2em'}} */>Portfólio</h1>
        <span /* style={{fontSize: '1em'}} */>Davi Santos</span>
      </div>
    </div>
  )
}