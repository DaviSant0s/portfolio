import { useCarousel } from '../../context/CarrouselContext';
import './styles.css';
import BtnFilterSlide from '../BtnFilterSlide';

export default function CarouselChangeMobile() {

  const { toggleCarousel, setToggleCarousel } = useCarousel();

  const {cardSize_width} = useCarousel();

  const handleClickToggleCarousel = (carouselName) => {
    if(carouselName === 'frontend'){
      setToggleCarousel('frontend');
      return;
    }

    if(carouselName === 'backend'){
      setToggleCarousel('backend');
      return;
    }

    if(carouselName === 'fullstack'){
      setToggleCarousel('fullstack');
      return;
    }

  }

  return (
    <div className='carouselChangeMobile-container'>
      <BtnFilterSlide 
        fontSize={11.2 * cardSize_width/300}
        handleClick={handleClickToggleCarousel}
        filterName='frontend'
        selected={toggleCarousel === 'frontend' ? true : false}>
        Frontend
      </BtnFilterSlide>

      <BtnFilterSlide
        fontSize={11.2 * cardSize_width/300}
        handleClick={handleClickToggleCarousel}
        filterName='backend'
        selected={toggleCarousel === 'backend' ? true : false}>
        Backend
      </BtnFilterSlide>
      
      <BtnFilterSlide
        fontSize={11.2 * cardSize_width/300}
        handleClick={handleClickToggleCarousel}
        filterName='fullstack'
        selected={toggleCarousel === 'fullstack' ? true : false}>
        Fullstack
      </BtnFilterSlide>
    </div>
  )
}