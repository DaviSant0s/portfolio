import { useEffect } from "react";

export default function useEventListenerElement(event, handle, element_Ref, array_dependence=[]) {

  useEffect(() => {

    const component = element_Ref.current;

    if(!component) return;

    component.addEventListener(event, handle);



    return () => {
      component.removeEventListener(event, handle);
    };

  }, array_dependence);
}
