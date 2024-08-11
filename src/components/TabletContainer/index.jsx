import { useState } from 'react';
import tablet from '../../assets/projects/tablet.png';
import ScreenTransparentBtn from '../ScreenTransparentBtn';
import './styles.css';
import { useCarousel } from '../../context/CarrouselContext';

export default function TabletContainer({ children, link, github, name, stacks}) {

  const [ stylesScreenTransparent, setStylesScreenTransparent ] = useState({});
  const {cardSize_width, setCardSize_width, cardSize_height} = useCarousel();

  const handleMouseEnterScreenTransparent = () => {
    setStylesScreenTransparent({
      height: '100%',
      opacity: '1'
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
      <div 

      style={{
        top: `${(8*cardSize_width)/287}px`,
        bottom: `${(8*cardSize_width)/287}px`,
        left: `${(6*cardSize_width)/287}px`,
        right: `${(7*cardSize_width)/287}px`
      }} 

      className='screenTable'>
        {children}
        <ScreenTransparentBtn styles={stylesScreenTransparent} link={link} github={github} name={name} stacks={stacks}/>
      </div>
      <div 
        style={{
          top: `${(6.5*cardSize_width)/287}px`,
          bottom: `${(6.5*cardSize_width)/287}px`,
          left: `${(5.5*cardSize_width)/287}px`,
          right: `${(6.5*cardSize_width)/287}px`
        }}
      className='borderBug'/>
    </div>
  )
}
