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
    <div className='mb-5 flex flex-col items-start gap-4 min-[920px]:flex-row min-[920px]:items-center min-[920px]:justify-between'>
      <div className='flex min-h-12 w-full items-center min-[920px]:w-auto min-[920px]:flex-1'>
        <div className='flex flex-wrap select-none items-center gap-2.5'>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type='button'
              className={[
                'inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-[0.88rem] font-medium leading-none tracking-[-0.01em] shadow-[0_14px_30px_-24px_var(--color-shadow-md)] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-soft',
                selectedFilter === filter.key
                  ? 'border-[#15181d] bg-[#15181d] text-white hover:bg-[#0f1115] dark:border-white dark:bg-white dark:text-[#12161d] dark:hover:bg-[#f4f7fa]'
                  : 'border-outline/70 bg-panel/82 text-copy-muted backdrop-blur-sm hover:border-copy-soft hover:bg-panel hover:text-copy-strong',
              ].join(' ')}
              onClick={() => onSelectFilter(filter.key)}
              aria-pressed={selectedFilter === filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex w-full shrink-0 items-center justify-between gap-5 min-[920px]:w-auto min-[920px]:justify-end'>
        <span className='rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-copy-strong shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm min-[790px]:text-[0.86rem]'>
          {views} de {totalViews}
        </span>
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
