import * as Dialog from '@radix-ui/react-dialog';
import { useMediaQuery } from 'react-responsive'
import photo from '../../assets/img-perfil.jpeg'
import './styles.css';

export default function Logo({ sideBar=false }) {

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  

  return (
    <div className={`logo-container ${sideBar ? 'logo-container_sidebar' : ''}`}>

        {/* se não couber o nav vai desaparecer a foto e aparecer as barras */}
      
        {
          (isTabletOrMobile && !sideBar) && 
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Abrir menu de navegacao"
              className="menuHeader"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </Dialog.Trigger>
        }

        {
          (isTabletOrMobile && sideBar) && 
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Fechar menu de navegacao"
              className="menuHeader menuHeader_sidebar"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </Dialog.Close>
        }

        {!isTabletOrMobile && 
          <div className='container-photo-logo' style={{width: '40px', height: '40px'}}>
            <img src={photo} alt="Foto de perfil de Davi Santos"/>
          </div>
        }

      <div  className={`container-title-logo ${sideBar ? 'container-title-logo_sidebar' : ''}`}>
        <h1>Portfólio</h1>
        <span>Davi Santos</span>
      </div>
    </div>
  )
}
