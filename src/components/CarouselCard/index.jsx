import { useCarousel } from '../../context/CarrouselContext';
import TabletContainer from '../TabletContainer';
import './styles.css';

export default function CarouselCard({ img, link, github, name, stacks }) {
  // estado global que retorna o estado da largura e altura dos cards do carrossel
  const {cardSize_width, cardSize_height} = useCarousel();

  return (
    <div style={{width: `${cardSize_width}px`, height: `${cardSize_height}px`}} className='carouselCard-container'>
      <TabletContainer link={link} github={github} name={name} stacks={stacks}>
        <img className='screenImage' src={img} alt="" />
      </TabletContainer>
    </div>
  );
}