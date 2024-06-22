import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';
import './styles.css';

import {dataSlider} from './data.js';
import CarouselChange from '../CarouselChange/index.jsx';

// gap entre os cards
const gap = 10;

export default function Carousel() {

  // referencia ao carrossel
  const Ref_wrapperCarousel = useRef(null);

  // estado que armazena o numero de cards visíveis
  const [ numberVisibleCards, setNumberVisibleCards ] = useState(3);

  // estado da da largura do carrossel
  const [ carouselWidth, setCarouselWidth ] = useState(950);

  // estado da largura do card
  const [ cardWidth, setCardWidth ] = useState(300);

  // numero de cards
  const [ numberOfCards, setNumberOfCards ] = useState(dataSlider.length);

  // estado da largura escondida
  const [ hiddenWidth, setHiddenWidth ] = useState(0);

  // estado da largura visivel
  const [ visibleWidth, setVisibleWidth ] = useState(0);

  // numero total de partes visiveis do carrossel
  const [ totalViews, seTotalViews ] = useState(0);

  // numero de partes visiveis já passadas
  const [ views, setViews ] = useState(1);

  //Funçao calcula o quanto o scroll vai ter que percorrer na barra de rolage (tamanho total menos o que ta visivel)
  const func_hiddenWidth = () => {
    return (numberOfCards * cardWidth) + ((numberOfCards - 1) * gap) - carouselWidth
  }

  // calculo da largura visível
  const func_visibleWidth = () => {
    return (cardWidth * numberVisibleCards) + (gap * numberVisibleCards);
  }

  // função que calcula o numero de vezes que eu tenho que clicar para ver todos os slides
  const func_totalViews = () => {
    const total = Math.floor((hiddenWidth/visibleWidth) + 1);
    return total + 1;
  }

  // efeito que define a largura escondida, largura visivel e total de partes visiveis
  useEffect(() => {
    setHiddenWidth(func_hiddenWidth());
    setVisibleWidth(func_visibleWidth());
    seTotalViews(func_totalViews);

  }, [numberOfCards, cardWidth, carouselWidth, numberVisibleCards, hiddenWidth, visibleWidth ]);


  // controlam o sestido das setas qunado estano inicio ou no limite da barra de rolagem
  const [ arrowStyleLeft, setArrowStyleLeft] = useState({});
  const [ arrowStyleRight, setArrowStyleRight ] = useState({});


  useEffect(() => {
    if(views > 1){
      setArrowStyleLeft({});
    } else {
      setArrowStyleLeft({
        opacity: '0.5',
        transform: 'scale(1)'
      });
    }

    if(views < totalViews){
      setArrowStyleRight({});
    } else {
      setArrowStyleRight({
        opacity: '0.5',
        transform: 'scale(1)'
      });
    }

  }, [views, totalViews]);


  const handleClickScrollToLeft = () => {
    Ref_wrapperCarousel.current.scrollLeft -= visibleWidth;
    if(views > 1) setViews(s => s - 1);

  }

  const handleClickScrollToRight = () => {

    Ref_wrapperCarousel.current.scrollLeft += visibleWidth;
    if(views < totalViews) setViews(s => s + 1);

  }
  
  return (
    <div className='carousel-conteiner'>
      <CarouselChange 
        views={views} 
        totalViews={totalViews} 
        handleClickScrollToLeft={handleClickScrollToLeft}
        handleClickScrollToRight={handleClickScrollToRight}
        arrowStyleLeft={arrowStyleLeft}
        arrowStyleRight={arrowStyleRight}
      />
      <div className='title-and-btns-carousel-container'>
        <div className='title-carousel-container'>
          <h1>
            
          </h1>
        </div>
        <div className='btns-carousel-container'>
          <span className='count-cards'>{views} de {totalViews}</span>
          <div className='btns-carousel'>

            <span onClick={handleClickScrollToLeft} className="material-symbols-outlined arrow_right_carousel arrow_carousel" style={arrowStyleLeft}>chevron_left</span>
            
            <span onClick={handleClickScrollToRight} className="material-symbols-outlined arrow_left_carousel arrow_carousel" style={arrowStyleRight}>chevron_right</span>

          </div>
        </div>
      </div>



      <div ref={Ref_wrapperCarousel} className='wrapper-carousel'>

        {dataSlider.map((project, index) => (
            <div key={index}>
              <CarouselCard
                key={index}
                img={project.img}
              />
            </div>
            
          ))}
          
      </div>
    </div>
  )
}
