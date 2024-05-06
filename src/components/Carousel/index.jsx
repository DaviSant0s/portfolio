import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';
import { CardStyles, carouselStyles, numCardsWidth } from '../../styles/carousel/styles';
import './styles.css';

const styleWrapperCarousel = {
  width: `${carouselStyles.width}px`,
  gap: `${carouselStyles.gap}px`
}

const stepDistance = carouselStyles.width - CardStyles.width - (carouselStyles.gap * 2);
const stepDistanceOne = carouselStyles.width - carouselStyles.gap;
const visibleCardsNoRepeat = numCardsWidth - 1;

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

      if(cardNumbers > numCardsWidth){

        if(numCardsWidth > 2) {
          const verifyDecimalNum = (cardNumbers - visibleCardsNoRepeat)/visibleCardsNoRepeat;
  
          if (verifyDecimalNum % 2 === 0){
            numberOfSteps = verifyDecimalNum;
          } else {
            const VerifyDecimalNumSide = verifyDecimalNum - Math.floor(verifyDecimalNum);
  
            if(VerifyDecimalNumSide < 0.5) {
              numberOfSteps = Math.floor(verifyDecimalNum);
            } else {
              numberOfSteps = Math.floor(verifyDecimalNum) + 1;
            }
          }
        } else {
          if(numCardsWidth === 2) {
            const verifyDecimalNum = (cardNumbers - 1) / 1;
            numberOfSteps = verifyDecimalNum - 1;
          } else {
            numberOfSteps = cardNumbers - 1;
          }
        }
  
        setTotalCardCarousel(numberOfSteps + 1);

      } else {
        setTotalCardCarousel(1);
      }
    }
    
  }, [Ref_wrapperCarousel] )
  
  const scrollToLeft = () => {
    if(numCardsWidth > 1) {
      Ref_wrapperCarousel.current.scrollLeft -= stepDistance;
    } else {
      Ref_wrapperCarousel.current.scrollLeft -= stepDistanceOne;
    }

    if(numberCardCarousel > 1){
      setNumberCardCarousel( s => numberCardCarousel - 1);
    }
  }

  const scrollToRight = () => {

    if(numCardsWidth > 1) {
      Ref_wrapperCarousel.current.scrollLeft += stepDistance;
    } else {
      Ref_wrapperCarousel.current.scrollLeft += stepDistanceOne;
    }

    if(numberCardCarousel < totalCardCarousel){
      setNumberCardCarousel( s => numberCardCarousel + 1);
    }
  }
  
  useEffect(() => {
    if(numberCardCarousel === 1){
      setArrowStyleLeft({
        opacity: '0.5'
      });
    } else {
      setArrowStyleLeft({});
    }

    if((numberCardCarousel === totalCardCarousel)){
      setArrowStyleRight({
        opacity: '0.5'
      });

    } else {
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
      <div 
        ref={Ref_wrapperCarousel} 
        style={styleWrapperCarousel} 
        className='wrapper-carousel'
      >
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
          {/*<CarouselCard name={'card17'}/> */}
          {/*<CarouselCard name={'card18'}/> */}


          {/* <CarouselCard name={'card17'}/>
          <CarouselCard name={'card18'}/>
          <CarouselCard name={'card19'}/>

          <CarouselCard name={'card20'}/>
          <CarouselCard name={'card21'}/>
          <CarouselCard name={'card22'}/>
          <CarouselCard name={'card23'}/> */}
      </div>
    </div>
  )
}
