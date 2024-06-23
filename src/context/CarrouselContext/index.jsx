import { createContext, useContext, useEffect, useState } from "react";
import data from './data';


export const GlobalCarouselContext = createContext();

export default function CarouselProvider({ children }) {

  const [ toggleCarousel, setToggleCarousel ] = useState('frontend');
  const [ toggleData, setToggleData ] = useState(data.dataFrontend);

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


  return (
    <GlobalCarouselContext.Provider value={
      {
        toggleCarousel, setToggleCarousel,
        toggleData
      }}>
      {children}
    </GlobalCarouselContext.Provider>
  )
}


export const useCarousel = () => useContext(GlobalCarouselContext);
