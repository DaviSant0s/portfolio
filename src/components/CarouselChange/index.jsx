import './styles.css';
import ArrowSlide from '../ArrowSlide';

export default function CarouselChange({ views, totalViews, handleClickScrollToLeft,    handleClickScrollToRight, arrowStyleLeft, arrowStyleRight}) {
  return (
    <div className='carouselChange-container'>
      <div className='optionsSlides-container'>
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
