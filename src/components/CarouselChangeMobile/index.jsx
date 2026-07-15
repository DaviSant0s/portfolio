import './styles.css';
import BtnFilterSlide from '../BtnFilterSlide';

export default function CarouselChangeMobile({ filters, selectedFilter, onSelectFilter }) {
  return (
    <div className='carouselChangeMobile-container'>
      {filters.map((filter) => (
        <BtnFilterSlide
          key={filter.key}
          handleClick={onSelectFilter}
          filterName={filter.key}
          selected={selectedFilter === filter.key}
        >
          {filter.label}
        </BtnFilterSlide>
      ))}
    </div>
  )
}
