import ArrowSlide from '../ArrowSlide';

export default function CarouselChange({
  views,
  totalViews,
  handleClickScrollToLeft,
  handleClickScrollToRight,
  canScrollPrev,
  canScrollNext,
}) {
  return (
    <div className='mb-4 flex items-center justify-end gap-3 min-[920px]:mb-3.5'>
      <span className='rounded-full border border-outline/70 bg-panel/82 px-3 py-1.5 text-[0.8rem] font-semibold tracking-[-0.01em] text-copy-strong shadow-[0_14px_30px_-24px_var(--color-shadow-md)] backdrop-blur-sm min-[790px]:text-[0.84rem]'>
        {views} de {totalViews}
      </span>
      <div className='flex gap-2'>
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
  )
}
