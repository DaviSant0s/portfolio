import BtnFilterSlide from '../BtnFilterSlide';

export default function CarouselChangeMobile({ filters, selectedFilter, onSelectFilter }) {
  return (
    <div className='mb-3.5 flex flex-wrap items-center justify-center gap-2'>
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
