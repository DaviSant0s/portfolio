import { useState } from "react";
import useEventListener from "./useEventListenerDocument";

export default function useGetScrollPosition() {
  // estado que armazena a posição atual do scroll
  const [ scrollPosition, setScrollPosition ] = useState(0);

  //função que retorna a posição atual do scroll na vertical
  const getScrollPosition = () => {
    setScrollPosition(window.scrollY);
  }

  // evento que monitora a posição do scroll
  useEventListener('scroll', getScrollPosition);

  return scrollPosition;
}
