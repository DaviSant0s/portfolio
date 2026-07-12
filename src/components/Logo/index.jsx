import { useMediaQuery } from 'react-responsive'
import photo from '../../assets/img-perfil.jpeg'
import './styles.css';
import { useSideBar } from '../../context/SideBarContext';

export default function Logo({ sideBar=false }) {

  const { setMenuEnabled } = useSideBar();

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  

  return (
    <div className='logo-container'>

        {/* se não couber o nav vai desaparecer a foto e aparecer as barras */}
      
        {
          (isTabletOrMobile && !sideBar) && 
          <button
            type="button"
            onClick={() => setMenuEnabled(true)}
            aria-label="Abrir menu de navegação"
            className="menuHeader"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        }

        {
          (isTabletOrMobile && sideBar) && 
          <button
            type="button"
            onClick={() => setMenuEnabled(false)}
            aria-label="Fechar menu de navegação"
            className="menuHeader"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        }

        {!isTabletOrMobile && 
          <div className='container-photo-logo' style={{width: '40px', height: '40px'}}>
            <img src={photo} alt="Foto de perfil de Davi Santos"/>
          </div>
        }

      <div  className='container-title-logo'>
        <h1>Portfólio</h1>
        <span>Davi Santos</span>
      </div>
    </div>
  )
}
