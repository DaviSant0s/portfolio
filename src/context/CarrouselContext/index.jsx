import { createContext, useContext, useEffect, useState } from "react";
import data from './data';


export const GlobalCarouselContext = createContext();

// calculo dos valores iniciais da largura e a altura dos cards do carrossel
const calcHeight = (width) => {
  return (373.5*width)/300
}

const width = 300;
const height = calcHeight(width);
// fim

export default function CarouselProvider({ children }) {

  const [ toggleCarousel, setToggleCarousel ] = useState('frontend');
  const [ toggleData, setToggleData ] = useState(data.dataFrontend);

  const [ cardSize_width, setCardSize_width ] = useState(width)
  const [ cardSize_height, setCardSize_height ] = useState(height)

  useEffect(() => {
    if(toggleCarousel === 'frontend'){
      setToggleData(s => data.dataFrontend)
    }

    if(toggleCarousel === 'backend'){
      setToggleData(s => data.dataBackend)
    }

    if(toggleCarousel === 'fullstack'){
      setToggleData(s => data.dataFullstack)
    }

  }, [toggleCarousel])

  useEffect(() => {
    setCardSize_height(s => calcHeight(cardSize_width));
  }, [cardSize_width])


  return (
    <GlobalCarouselContext.Provider value={
      {
        toggleCarousel, setToggleCarousel,
        toggleData,
        cardSize_width, setCardSize_width,
        cardSize_height, setCardSize_height
      }}>
      {children}
    </GlobalCarouselContext.Provider>
  )
}


export const useCarousel = () => useContext(GlobalCarouselContext);
