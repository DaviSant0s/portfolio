import { CardStyles } from '../../styles/carousel/styles';
import tablet from '../../assets/projects/tablet.png'

import './styles.css';
import { useState } from 'react';

const carouselCardStyle = {
  width: `${CardStyles.width}px`,
  height: `${CardStyles.height}px`,
}

export default function CarouselCard({ img, link='' }) {
  const [ styleScreenBtnTablet, setStyleScreenBtnTablet ] = useState({});

  const handleMouseEnterScreenBtnTablet = () => {
    /* console.log('davi')
    setStyleScreenBtnTablet({
      animationName: 'translateScreenEnter'
    }); */
  }
  
  const handleMouseLeaveScreenBtnTablet = () => {
    /* setStyleScreenBtnTablet({
      animationName: 'translateScreenOut'
    }); */
  }

  return (
    <div 
      onMouseEnter={handleMouseEnterScreenBtnTablet}
      onMouseLeave={handleMouseLeaveScreenBtnTablet}
      className='carouselCard-and-transparentScreen'>
      <div
        style={carouselCardStyle} className='carouselCard-container'
      >
        <img src={tablet} alt="" />
        <div className='screenCarousel'>
          <div className='screenCarousel-content'>
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <div className='transparentScreen-btn-container'>
        <div style={styleScreenBtnTablet} className='transparentScreen-btn-content'>
          <a href={link} target='_blank'><button>Visualizar</button></a>
        </div>
      </div>
    </div>
  )
}