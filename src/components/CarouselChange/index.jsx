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
    <div className='mb-5 flex items-center justify-between gap-6'>
      <div className='flex min-h-12 flex-1 items-center'>
        <div className='flex select-none items-center gap-[15px]'>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type='button'
              className={[
                'relative pb-2 text-[clamp(1.1rem,2vw,1.45rem)] font-semibold leading-none tracking-[-0.02em] text-copy transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary-soft',
                selectedFilter === filter.key
                  ? "text-copy-strong after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-[linear-gradient(to_right,var(--color-accent),var(--color-accent-strong),transparent_90%)]"
                  : 'opacity-50 hover:opacity-80',
              ].join(' ')}
              onClick={() => onSelectFilter(filter.key)}
              aria-pressed={selectedFilter === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex shrink-0 items-center gap-5'>
        <span className='text-sm font-bold text-copy-strong min-[790px]:text-base'>{views} de {totalViews}</span>
        <div className='flex gap-2.5'>

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
