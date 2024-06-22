import './styles.css';

export default function CarouselChange({ views, totalViews, handleClickScrollToLeft, handleClickScrollToRight, arrowStyleLeft, arrowStyleRight}) {

  return (
    <div className='carouselChange-container'>
      <div className='optionsSlides-container'>
        <div className='optionsSlides'>
          <h1 className='selected'>
            Frontend
            <div className='selectSlides'> </div>
          </h1>
          <h1 className='notSelected'>Backend</h1>
          <h1 className='notSelected'>Fullstack</h1>
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
