import { useMediaQuery } from 'react-responsive';
import { useCarousel } from '../../context/CarrouselContext';
import './styles.css';
import ArrowSlide from '../ArrowSlide';

export default function CarouselChange({ views, totalViews, handleClickScrollToLeft,    handleClickScrollToRight, arrowStyleLeft, arrowStyleRight}) {

  // responsividade
  const mobile_max_690px = useMediaQuery({query: '(max-width: 690px)'});

  const { toggleCarousel, setToggleCarousel } = useCarousel();

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
    <div className='carouselChange-container'>
      <div className='optionsSlides-container'>
        <div className='optionsSlides'>

          <h1 
          className={`${toggleCarousel === 'frontend' ? 'selected' : 'notSelected'}`}
          onClick={() => handleClickToggleCarousel('frontend')}
          >
            frontend
            <div></div>
          </h1>

          <h1 
          className={`${toggleCarousel === 'backend' ? 'selected' : 'notSelected'}`}
          onClick={() => handleClickToggleCarousel('backend')}
          >
            backend
            <div></div>
          </h1>

          <h1 
          className={`${toggleCarousel === 'fullstack' ? 'selected' : 'notSelected'}`}
          onClick={() => handleClickToggleCarousel('fullstack')}
          >
            fullstack
            <div></div>
          </h1>

        </div>
      </div>
      <div className='btns-carouselChange-container'>
        <span className='count-cards'>{views} de {totalViews}</span>
        <div className='btns-carouselChange'>

          <ArrowSlide direction='left' func_handle={handleClickScrollToLeft} style={arrowStyleLeft}/>
          <ArrowSlide direction='right' func_handle={handleClickScrollToRight} style={arrowStyleRight}/>

        </div>
      </div>
    </div>
  )
}
