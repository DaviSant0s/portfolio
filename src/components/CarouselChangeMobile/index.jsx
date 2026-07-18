import BtnFilterSlide from '../BtnFilterSlide';

export default function CarouselChangeMobile({ filters, selectedFilter, onSelectFilter }) {
  return (
    <div className='mb-3 flex flex-wrap items-center justify-start gap-2'>
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
