export default function CountCardsCarousel({ views, totalViews}) {
  return (
    <div className='mt-3 flex items-center justify-center'>
      <span className='rounded-full border border-outline bg-panel px-3 py-1 text-[0.82rem] font-semibold tracking-[-0.01em] text-copy-strong shadow-[0_8px_20px_-18px_var(--color-shadow-lg)]'>
      {views} de {totalViews}
      </span>
    </div>
  )
}
