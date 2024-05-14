import { useEffect, useState } from 'react';

export default function useResizeObserver(id_or_class) {

  const [ heightElement, setHeightElement ] = useState();

  useEffect(() => {
    const element = document.querySelector(id_or_class);
  
    const obs = new ResizeObserver(e => {
      const height = e[0].target.offsetHeight;
      
      setHeightElement(s => height);

    });
  
    obs.observe(element);

    return () => {
      obs.unobserve(element);
    }
  
  }, [id_or_class]);


  return heightElement;
}
