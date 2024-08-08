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
          <span onClick={() => setMenuEnabled(true)} className="material-symbols-outlined menuHeader">menu</span>
        }

        {
          (isTabletOrMobile && sideBar) && 
          <span onClick={() => setMenuEnabled(false)} className="material-symbols-outlined menuHeader">close</span>
        }

        {!isTabletOrMobile && 
          <div className='container-photo-logo' style={{width: '40px', height: '40px'}}>
            <img src={photo} alt=""/>
          </div>
        }

      <div  className='container-title-logo'>
        <h1>Portfólio</h1>
        <span>Davi Santos</span>
      </div>
    </div>
  )
}