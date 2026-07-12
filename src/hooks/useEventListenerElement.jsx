import { useEffect } from "react";

export default function useEventListenerElement(event, handle, element_Ref) {
  useEffect(() => {

    const component = element_Ref.current;

    if(!component) return;

    component.addEventListener(event, handle);



    return () => {
      component.removeEventListener(event, handle);
    };

  }, [event, handle, element_Ref]);
}
