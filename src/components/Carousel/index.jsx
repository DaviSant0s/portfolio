import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';

import CarouselChange from '../CarouselChange/index.jsx';
import { useCarousel } from '../../context/CarrouselContext/index.jsx';

import './styles.css';


// gap entre os cards
const gap = 10;

export default function Carousel() {

  /* contexto global */
  
  const {toggleData} = useCarousel();
  
  /* fim */

  // referencia ao carrossel
  const Ref_wrapperCarousel = useRef(null);

  // estado que armazena o numero de cards visíveis
  const [ numberVisibleCards, setNumberVisibleCards ] = useState(3);

  // estado da da largura do carrossel
  const [ carouselWidth, setCarouselWidth ] = useState(0); // 950

  // estado da largura do card
  const [ cardWidth, setCardWidth ] = useState(300);

  // numero de cards
  const [ numberOfCards, setNumberOfCards ] = useState(toggleData.length);

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
  const func_visibleWidth = (a=1) => {
    let b = a;

    // controla quando o numero de cards visiveis for 1, daí muda de 1 em 1
    if(numberVisibleCards === 1){
      b = 0;
    }

    return (cardWidth * (numberVisibleCards - b)) + (gap * (numberVisibleCards - b));
  }

  // função que calcula o numero de vezes que eu tenho que clicar para ver todos os slides
  const func_totalViews = () => {
    const total = Math.floor((hiddenWidth/visibleWidth) + 1);
    return total + 1;
  }

  const defineNumbercardsVisible = () => {
   const width = 20 + (numberVisibleCards * cardWidth) + (numberVisibleCards * gap);
   return width;
  }

  // efeito que define a largura escondida, largura visivel e total de partes visiveis
  useEffect(() => {

    setCarouselWidth(defineNumbercardsVisible());
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


  // passar slide para esquerda
  const handleClickScrollToLeft = () => {
    Ref_wrapperCarousel.current.scrollLeft -= visibleWidth;
    if(views > 1) setViews(s => s - 1);
    
  }
  
  // passar slide para direita
  const handleClickScrollToRight = () => {

    Ref_wrapperCarousel.current.scrollLeft += visibleWidth;
    if(views < totalViews) setViews(s => s + 1);

  }

  /* *************** RESET **************** */

  // vai recalcular os valores quando os dados mudarem
  useEffect(() => {
    // recalcula a quantidade de cards
    setNumberOfCards(toggleData.length);
    // recalcula a largura do conteudo escondido
    setHiddenWidth(func_hiddenWidth());
    // recalcula a quantidade de partes visiveis para passar
    seTotalViews(func_totalViews);
    // zera a contagem de visualizações passadas
    setViews(1);
    
    Ref_wrapperCarousel.current.classList.add('noSmooth');
    Ref_wrapperCarousel.current.scrollLeft = 0;
    Ref_wrapperCarousel.current.classList.remove('noSmooth');

  }, [toggleData]);

  
  return (
    <div className='carousel-conteiner' style={{width: `${carouselWidth}px`}}>
      <CarouselChange 
        views={views} 
        totalViews={totalViews} 
        handleClickScrollToLeft={handleClickScrollToLeft}
        handleClickScrollToRight={handleClickScrollToRight}
        arrowStyleLeft={arrowStyleLeft}
        arrowStyleRight={arrowStyleRight}
      />

      <div ref={Ref_wrapperCarousel} className='wrapper-carousel' style={{width: `${carouselWidth}px`}}>

        {toggleData.map((project, index) => (
          <div key={index}>
            <CarouselCard
              img={project.img}
              stacks={project.stacks}
              link={project.link}
              github={project.github}
              name={project.name}
            />
          </div>
        ))}
          
      </div>
    </div>
  )
}
