import './styles.css';
import ArrowSlide from '../ArrowSlide';

export default function CarouselChange({
  filters,
  selectedFilter,
  onSelectFilter,
  views,
  totalViews,
  handleClickScrollToLeft,
  handleClickScrollToRight,
  canScrollPrev,
  canScrollNext,
}) {
  return (
    <div className='carouselChange-container'>
      <div className='optionsSlides-container'>
        <div className='optionsSlides'>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type='button'
              className={`optionsSlideButton ${selectedFilter === filter.key ? 'selected' : 'notSelected'}`}
              onClick={() => onSelectFilter(filter.key)}
              aria-pressed={selectedFilter === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className='btns-carouselChange-container'>
        <span className='count-cards'>{views} de {totalViews}</span>
        <div className='btns-carouselChange'>

          <ArrowSlide
            direction='left'
            func_handle={handleClickScrollToLeft}
            disabled={!canScrollPrev}
          />
          <ArrowSlide
            direction='right'
            func_handle={handleClickScrollToRight}
            disabled={!canScrollNext}
          />

        </div>
      </div>
    </div>
  )
}
