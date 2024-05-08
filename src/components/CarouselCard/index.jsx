import { CardStyles } from '../../styles/carousel/styles';
import TabletContainer from '../TabletContainer';
import './styles.css';

const carouselCardStyle = {
  width: `${CardStyles.width}px`,
  height: `${CardStyles.height}px`,
}

export default function CarouselCard({ img, link }) {

  return (
    <div style={carouselCardStyle} className='carouselCard-container'>
      <TabletContainer link={link}>
        <img className='screenImage' src={img} alt="" />
      </TabletContainer>
    </div>
  );
}