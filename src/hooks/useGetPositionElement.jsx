import { useEffect, useState } from "react";
import useGetScrollPosition from "./useGetScrollPosition";

export default function useGetPositionElement(id_or_class) {
  const [ position, setPosition ] = useState(null);
  const scrollPosition = useGetScrollPosition();

  useEffect(() => {
    const element = document.querySelector(id_or_class);
    const positinElement = element.getBoundingClientRect();

    setPosition(positinElement.y);

  }, [id_or_class, position, scrollPosition]);

  return position;
}
