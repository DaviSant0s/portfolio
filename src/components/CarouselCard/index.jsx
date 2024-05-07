import { CardStyles } from '../../styles/carousel/styles';
/* import phone from '../../assets/projects/backgroundPhone.png' */
import query from '../../assets/projects/query.png'
import tablet from '../../assets/projects/tablet.png'

import './styles.css';

const carouselCardStyle = {
  width: `${CardStyles.width}px`,
  height: `${CardStyles.height}px`,
}

export default function CarouselCard({ name, img }) {
  return (
    <div style={carouselCardStyle} className='carouselCard-container'>
      <img src={tablet} alt="" />
      <div className='screenCarousel'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
