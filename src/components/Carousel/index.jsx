import { useEffect, useRef, useState } from 'react';
import CarouselCard from '../CarouselCard';

import CarouselChange from '../CarouselChange/index.jsx';
import { useCarousel } from '../../context/CarrouselContext/index.jsx';

import './styles.css';
import { useMediaQuery } from 'react-responsive';
import CarouselChangeMobile from '../CarouselChangeMobile/index.jsx';
import ArrowSlide from '../ArrowSlide/index.jsx';
import CountCardsCarousel from '../CountCardsCarousel/index.jsx';


// gap entre os cards
const gap = 10;

export default function Carousel() {
  /* responsividade */
  const computer_max_1340px = useMediaQuery({query: '(max-width: 1339px)'});
  const computer_min_1340px = useMediaQuery({query: '(min-width: 1340px)'});
  const mobileOrTablet_max_1020px = useMediaQuery({query: '(max-width: 1020px)'});
  const mobile_max_690px = useMediaQuery({query: '(max-width: 690px)'});
  const miniMobile_min_450px = useMediaQuery({query: '(min-width: 450px)'});
  const miniMobile_max_450px = useMediaQuery({query: '(max-width: 450px)'});
  const miniMobile_max_440px = useMediaQuery({query: '(max-width: 440px)'});
  const miniMobile_max_430px = useMediaQuery({query: '(max-width: 430px)'});
  const miniMobile_max_420px = useMediaQuery({query: '(max-width: 420px)'});
  const miniMobile_max_410px = useMediaQuery({query: '(max-width: 410px)'});
  const miniMobile_max_400px = useMediaQuery({query: '(max-width: 400px)'});
  const miniMobile_max_390px = useMediaQuery({query: '(max-width: 390px)'});
  const miniMobile_max_380px = useMediaQuery({query: '(max-width: 380px)'});
  const miniMobile_max_370px = useMediaQuery({query: '(max-width: 370px)'});
  const miniMobile_max_360px = useMediaQuery({query: '(max-width: 360px)'});
  const miniMobile_max_350px = useMediaQuery({query: '(max-width: 350px)'});
  const miniMobile_max_340px = useMediaQuery({query: '(max-width: 340px)'});

  /* fim */

  /* contexto global */
  
  const {
    toggleData,
    cardSize_width,
    setCardSize_width,
    cardSize_height,
    setWidthCarrouselGlobal,
  } = useCarousel();
  
  /* fim */

  // referencia ao carrossel
  const Ref_wrapperCarousel = useRef(null);

  // estado que armazena o numero de cards visíveis
  const [ numberVisibleCards, setNumberVisibleCards ] = useState(4);

  // estado da largura do carrossel
  const [ carouselWidth, setCarouselWidth ] = useState(0); // 950

  const cardWidth = cardSize_width;
  const numberOfCards = toggleData.length;

  // estado da largura visivel
  const [ visibleWidth, setVisibleWidth ] = useState(0);

  // numero total de partes visiveis do carrossel
  const [ totalViews, seTotalViews ] = useState(0);

  // numero de partes visiveis já passadas
  const [ views, setViews ] = useState(1);

  // efeito que define a largura escondida, largura visivel e total de partes visiveis
  useEffect(() => {
    let visibleCardsDiscount = 1;
    if (numberVisibleCards === 1) {
      visibleCardsDiscount = 0;
    }

    const nextCarouselWidth = 20 + (numberVisibleCards * cardWidth) + (numberVisibleCards * gap);
    const nextHiddenWidth = Math.max(
      (numberOfCards * cardWidth) + ((numberOfCards - 1) * gap) - nextCarouselWidth,
      0,
    );
    const nextVisibleWidth =
      (cardWidth * (numberVisibleCards - visibleCardsDiscount)) +
      (gap * (numberVisibleCards - visibleCardsDiscount));
    const nextTotalViews =
      nextVisibleWidth > 0 ? Math.floor(nextHiddenWidth / nextVisibleWidth) + 2 : 1;

    setWidthCarrouselGlobal(nextCarouselWidth);
    setCarouselWidth(nextCarouselWidth);
    setVisibleWidth(nextVisibleWidth);
    seTotalViews(nextTotalViews);
  }, [numberOfCards, cardWidth, numberVisibleCards, setWidthCarrouselGlobal]);

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
    // zera a contagem de visualizações passadas
    setViews(1);
    
    Ref_wrapperCarousel.current.classList.add('noSmooth');
    Ref_wrapperCarousel.current.scrollLeft = 0;
    Ref_wrapperCarousel.current.classList.remove('noSmooth');

  }, [toggleData]);

  /* responsividade */
  useEffect(() => {

    // 4 cards visiveis
    if(computer_min_1340px){
      setNumberVisibleCards(4)
    }

    // 3 cards visiveis
    if(computer_max_1340px){
      setNumberVisibleCards(3)
    }

    // 2 cards visiveis
    if(mobileOrTablet_max_1020px){
      setNumberVisibleCards(2)
    }

    // 1 cards visiveis
    if(mobile_max_690px){
      setNumberVisibleCards(1)
    }

    // diminui a largura para 290px
    if(miniMobile_max_450px){
      setCardSize_width(290)
    }
    
    // diminui a largura para 280px
    if(miniMobile_max_440px){
      setCardSize_width(280)
    }

    // diminui a largura para 270px
    if(miniMobile_max_430px){
      setCardSize_width(270)
    }

    // diminui a largura para 260px
    if(miniMobile_max_420px){
      setCardSize_width(260)
    }

    // diminui a largura para 250px
    if(miniMobile_max_410px){
      setCardSize_width(250)
    }

    // diminui a largura para 240px
    if(miniMobile_max_400px){
      setCardSize_width(240)
    }

    // diminui a largura para 230px
    if(miniMobile_max_390px){
      setCardSize_width(230)
    }
    // diminui a largura para 220px
    if(miniMobile_max_380px){
      setCardSize_width(220)
    }

    // diminui a largura para 210px
    if(miniMobile_max_370px){
      setCardSize_width(210)
    }

    // diminui a largura para 200px
    if(miniMobile_max_360px){
      setCardSize_width(200)
    }

    // diminui a largura para 190px
    if(miniMobile_max_350px){
      setCardSize_width(190)
    }
    // diminui a largura para 180px
    if(miniMobile_max_340px){
      setCardSize_width(180)
    }

    
    
    // volta a largura para para a largura original
    if(miniMobile_min_450px) {
      setCardSize_width(300)
    }

  }, [computer_max_1340px, computer_min_1340px, mobileOrTablet_max_1020px, mobile_max_690px, miniMobile_max_450px, miniMobile_min_450px, miniMobile_max_440px, miniMobile_max_430px, miniMobile_max_420px, miniMobile_max_410px, miniMobile_max_400px, miniMobile_max_390px, miniMobile_max_380px, miniMobile_max_370px, miniMobile_max_360px, miniMobile_max_350px, miniMobile_max_340px, setCardSize_width])

  
  return (
    <div className='carousel-conteiner' style={{width: `${carouselWidth}px`}}>

      {mobile_max_690px && 
        <CarouselChangeMobile 
          views={views} 
          totalViews={totalViews} 
          handleClickScrollToLeft={handleClickScrollToLeft}
          handleClickScrollToRight={handleClickScrollToRight}
          arrowStyleLeft={arrowStyleLeft}
          arrowStyleRight={arrowStyleRight}
        />
      }

      {!mobile_max_690px &&
        <CarouselChange 
          views={views} 
          totalViews={totalViews} 
          handleClickScrollToLeft={handleClickScrollToLeft}
          handleClickScrollToRight={handleClickScrollToRight}
          arrowStyleLeft={arrowStyleLeft}
          arrowStyleRight={arrowStyleRight}
        />
      }

      <div className='carousel-content'>

        {mobile_max_690px &&
          <>
            <div className='left_arrow_change'>
              <ArrowSlide direction='left' func_handle={handleClickScrollToLeft} style={arrowStyleLeft}/>
            </div>

            <div className='right_arrow_change'>
              <ArrowSlide direction='right' func_handle={handleClickScrollToRight} style={arrowStyleRight}/>
            </div>
          </>
        }

        <div ref={Ref_wrapperCarousel} className='wrapper-carousel' style={{width: `${carouselWidth}px`, height: `${cardSize_height}px`}}>
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
      {mobile_max_690px &&
        <CountCardsCarousel views={views} totalViews={totalViews}/>
      }
    </div>
  )
}
