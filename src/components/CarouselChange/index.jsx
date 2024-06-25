import { useCarousel } from '../../context/CarrouselContext';
import './styles.css';

export default function CarouselChange({ views, totalViews, handleClickScrollToLeft,    handleClickScrollToRight, arrowStyleLeft, arrowStyleRight}) {

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
            Frontend
            <div></div>
          </h1>

          <h1 
          className={`${toggleCarousel === 'backend' ? 'selected' : 'notSelected'}`}
          onClick={() => handleClickToggleCarousel('backend')}
          >
            Backend
            <div></div>
          </h1>

          <h1 
          className={`${toggleCarousel === 'fullstack' ? 'selected' : 'notSelected'}`}
          onClick={() => handleClickToggleCarousel('fullstack')}
          >
            Fullstack
            <div></div>
          </h1>

        </div>
      </div>
      <div className='btns-carouselChange-container'>
        <span className='count-cards'>{views} de {totalViews}</span>
        <div className='btns-carouselChange'>

          <span onClick={handleClickScrollToLeft} className="material-symbols-outlined arrow_carouselChange" style={arrowStyleLeft}>chevron_left</span>
          
          <span onClick={handleClickScrollToRight} className="material-symbols-outlined arrow_carouselChange" style={arrowStyleRight}>chevron_right</span>

        </div>
      </div>
    </div>
  )
}
