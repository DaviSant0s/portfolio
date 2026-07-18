export default function CountCardsCarousel({ views, totalViews}) {
  return (
    <div className='mt-3 flex items-center justify-center text-sm font-bold text-copy-strong'>
      {views} de {totalViews}
    </div>
  )
}
