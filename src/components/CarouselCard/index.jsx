import { CardStyles } from '../../styles/carousel/styles';
import './styles.css';

const carouselCardStyle = {
  width: `${CardStyles.width}px`,
  height: `${CardStyles.height}px`,
}

export default function CarouselCard({ name }) {
  return (
    <div style={carouselCardStyle} className='carouselCard-container'>
      {name}
    </div>
  )
}
