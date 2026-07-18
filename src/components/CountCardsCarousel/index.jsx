export default function CountCardsCarousel({ views, totalViews}) {
  return (
    <div className='mt-3 flex items-center justify-center'>
      <span className='rounded-full border border-outline/70 bg-panel/82 px-3.5 py-1.5 text-[0.82rem] font-semibold tracking-[-0.01em] text-copy-strong shadow-[0_14px_28px_-22px_var(--color-shadow-md)] backdrop-blur-sm'>
      {views} de {totalViews}
      </span>
    </div>
  )
}
