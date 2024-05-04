import CarouselCard from '../CarouselCard';
import './styles.css';

export default function Carousel({title}) {
  return (
    <div className='carousel-conteiner'>
      <div className='title-and-btns-carousel-container'>
        <div className='title-carousel-container'>
          <h1>{title}</h1>
        </div>
        <div className='btns-carousel-container'>
          <span className='count-cards'>1 de 2</span>
          <div className='btns-carousel'>
            <span class="material-symbols-outlined arrow_right_carousel arrow_carousel">chevron_left</span>
            <span class="material-symbols-outlined arrow_left_carousel arrow_carousel">chevron_right</span>
          </div>
        </div>
      </div>
      <div className='wrapper-carousel'>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
      </div>
    </div>
  )
}
