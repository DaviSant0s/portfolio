import TabletContainer from '../TabletContainer';
import './styles.css';

export default function CarouselCard({ img, link, github, name, stacks }) {
  return (
    <div className='carouselCard-container'>
      <TabletContainer link={link} github={github} name={name} stacks={stacks}>
        <img className='screenImage' src={img} alt={`Prévia do projeto ${name}`} />
      </TabletContainer>
    </div>
  );
}
