import './styles.css';

export default function CountCardsCarousel({ views, totalViews}) {
  return (
    <div className='countCardsCarousel-container'>
      {views} de {totalViews}
    </div>
  )
}
