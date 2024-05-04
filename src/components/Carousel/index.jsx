import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';
import './styles.css';

export default function Carousel({title}) {
  const Ref_wrapperCarousel = useRef(null);
  const [ totalCardCarousel, setTotalCardCarousel ] = useState(null);
  const [ numberCardCarousel, setNumberCardCarousel ] = useState(1);
  const [ arrowStyleLeft, setArrowStyleLeft] = useState({});
  const [ arrowStyleRight, setArrowStyleRight ] = useState({});

  
  useEffect(() => {
    if(Ref_wrapperCarousel) {
      const cardNumbers = Ref_wrapperCarousel.current.querySelectorAll('*').length;
      let numberOfSteps = 0;

      if(cardNumbers > 3){

        if (cardNumbers % 2 == 0){
          numberOfSteps = (cardNumbers - 2)/2
        } else {
          numberOfSteps = Math.floor((cardNumbers - 2)/2)
        }
  
        setTotalCardCarousel(numberOfSteps + 1);

      } else {
        setTotalCardCarousel(1);
      }
    }
    
  }, [Ref_wrapperCarousel] )
  
  const scrollToLeft = () => {
    Ref_wrapperCarousel.current.scrollLeft -= 540;

    if(numberCardCarousel > 1){
      setNumberCardCarousel( s => numberCardCarousel - 1);
    }
  }

  const scrollToRight = () => {
    Ref_wrapperCarousel.current.scrollLeft += 540;

    if(numberCardCarousel < totalCardCarousel){
      setNumberCardCarousel( s => numberCardCarousel + 1);
    }
  }
  
  useEffect(() => {
    if(numberCardCarousel === 1){
      console.log('left desativa')
      setArrowStyleLeft({
        opacity: '0.5'
      });
    } else {
      console.log('left ativa')
      setArrowStyleLeft({});
    }

    if((numberCardCarousel === totalCardCarousel)){
      console.log('right desativa')
      setArrowStyleRight({
        opacity: '0.5'
      });

    } else {
      console.log('right ativa')
      setArrowStyleRight({});
    }

  }, [numberCardCarousel, totalCardCarousel]);
  
  return (
    <div className='carousel-conteiner'>
      <div className='title-and-btns-carousel-container'>
        <div className='title-carousel-container'>
          <h1>{title}</h1>
        </div>
        <div className='btns-carousel-container'>
          <span className='count-cards'>{numberCardCarousel} de {totalCardCarousel ? totalCardCarousel : '1'}</span>
          <div className='btns-carousel'>

            <span onClick={scrollToLeft} className="material-symbols-outlined arrow_right_carousel arrow_carousel" style={arrowStyleLeft}>chevron_left</span>
            
            <span onClick={scrollToRight} className="material-symbols-outlined arrow_left_carousel arrow_carousel" style={arrowStyleRight}>chevron_right</span>

          </div>
        </div>
      </div>
      <div ref={Ref_wrapperCarousel} className='wrapper-carousel'>
          <CarouselCard name={'card1'}/>
          <CarouselCard name={'card2'}/>
          <CarouselCard name={'card3'}/>
          <CarouselCard name={'card4'}/>
          <CarouselCard name={'card5'}/>
          <CarouselCard name={'card6'}/>
          <CarouselCard name={'card7'}/>
          <CarouselCard name={'card8'}/>
          <CarouselCard name={'card9'}/>
          <CarouselCard name={'card10'}/>
          <CarouselCard name={'card11'}/>
          <CarouselCard name={'card12'}/>
          <CarouselCard name={'card13'}/>
          <CarouselCard name={'card14'}/>
          <CarouselCard name={'card15'}/>
          <CarouselCard name={'card16'}/>
          <CarouselCard name={'card17'}/>
          <CarouselCard name={'card18'}/>
          <CarouselCard name={'card19'}/>
          <CarouselCard name={'card20'}/>
      </div>
    </div>
  )
}
