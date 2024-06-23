import { createContext, useContext, useState } from "react";


export const GlobalCarouselContext = createContext();

export default function CarouselProvider({ children }) {

  const [ toggleCarousel, setToggleCarousel ] = useState('frontend');

  return (
    <GlobalCarouselContext.Provider value={{toggleCarousel, setToggleCarousel}}>
      {children}
    </GlobalCarouselContext.Provider>
  )
}


export const useCarousel = () => useContext(GlobalCarouselContext);
