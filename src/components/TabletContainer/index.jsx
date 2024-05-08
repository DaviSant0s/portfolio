import { useState } from 'react';
import tablet from '../../assets/projects/tablet.png';
import ScreenTransparentBtn from '../ScreenTransparentBtn';
import './styles.css';

export default function TabletContainer({ children, link }) {

  const [ stylesScreenTransparent, setStylesScreenTransparent ] = useState({});

  const handleMouseEnterScreenTransparent = () => {
    setStylesScreenTransparent({
      height: '100%'
    });
  }
  
  const handleMouseLeaveScreenTransparent = () => {
    setStylesScreenTransparent({});
  }

  return (
    <div 
      onMouseEnter={handleMouseEnterScreenTransparent}
      onMouseLeave={handleMouseLeaveScreenTransparent}
      className='tabletContainer'
    >
      <img src={tablet} alt="" />
      <div className='screenTable'>
        {children}
        <ScreenTransparentBtn styles={stylesScreenTransparent} link={link}/>
      </div>
    </div>
  )
}
