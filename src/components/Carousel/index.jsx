import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';
import { CardStyles, carouselStyles, numCardsWidth } from '../../styles/carousel/styles';

import project1 from '../../assets/projects/curiosity_and_technology_screen.png'
import project2 from '../../assets/projects/resposividadescreen.png'
import project3 from '../../assets/projects/cordelscreen.png'
import project4 from '../../assets/projects/socialscreen.png'
import project5 from '../../assets/projects/mediascreen.png'
import project6 from '../../assets/projects/meusitescreen.png'
import project7 from '../../assets/projects/loginscreen.png'
import project8 from '../../assets/projects/siteCscreen.png'

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
    const cardNumbers = 8;
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
    
  }, [totalCardCarousel] )
  
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
        opacity: '0.5',
        transform: 'scale(1)'
      });
    } else {
      setArrowStyleLeft({});
    }

    if((numberCardCarousel === totalCardCarousel)){
      setArrowStyleRight({
        opacity: '0.5',
        transform: 'scale(1)'
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
          <CarouselCard 
            img={project1} 
            name={'card1'} 
            link='https://davisant0s.github.io/projeto-android/'/>

          <CarouselCard 
            img={project2} 
            name={'card2'}
            link='https://davisant0s.github.io/html-css/exercicios/ex026/mq002/'/>

          <CarouselCard 
            img={project3} 
            name={'card3'}
            link='https://davisant0s.github.io/projeto-cordel/'/>

          <CarouselCard 
            img={project4} 
            name={'card4'}
            link='https://davisant0s.github.io/projeto-social/'/>

          <CarouselCard 
            img={project5} 
            name={'card5'}
            link='https://davisant0s.github.io/html-css/exercicios/ex026/mq004/'/>

          <CarouselCard 
            img={project6} 
            name={'card6'}
            link='https://davisant0s.github.io/html-css/exercicios/ex026/mq005/'/>

          <CarouselCard 
            img={project7} 
            name={'card7'}
            link='https://davisant0s.github.io/projeto-login/'/>

          <CarouselCard 
            img={project8} 
            name={'card8'}
            link='https://davisant0s.github.io/Clipboard-landing-page/'/>
          
      </div>
      <div style={{width: `${carouselStyles.width}px`}} className='description-carousel-projects'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At error ex nisi repudiandae impedit itaque ab et vero beatae sequi, placeat consequuntur aliquid rerum, quia expedita corporis possimus corrupti porro.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ea ut velit facilis omnis enim minus dolores molestiae magnam soluta non consequatur odio impedit voluptates, ad sed exercitationem suscipit obcaecati.</p>
      </div>
    </div>
  )
}
