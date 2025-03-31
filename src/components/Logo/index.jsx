import { useMediaQuery } from 'react-responsive'
import logoDark from '../../assets/logos/ds-dark.png';
import logoLight from '../../assets/logos/ds.png';
import './styles.css';
import { useSideBar } from '../../context/SideBarContext';
import { useDarkmode } from '../../context/darkmodeContext'

export default function Logo({ sideBar=false }) {

  const { darkMode, setDarkMode } = useDarkmode();

  const { setMenuEnabled } = useSideBar();

  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1100px)'});
  

  return (
    <div className='logo-container'>
      
        {
          (isTabletOrMobile && !sideBar) && 
          <span onClick={() => setMenuEnabled(true)} className="material-symbols-outlined menuHeader">menu</span>
        }

        {
          (isTabletOrMobile && sideBar) && 
          <span onClick={() => setMenuEnabled(false)} className="material-symbols-outlined menuHeader">close</span>
        }

        {!isTabletOrMobile && darkMode && 
          <div className='container-photo-logo'>
            <img src={logoDark} alt=""/>
          </div>
        }

        {!isTabletOrMobile && !darkMode && 
          <div className='container-photo-logo'>
            <img src={logoLight} alt=""/>
          </div>
        }
    </div>
  )
}