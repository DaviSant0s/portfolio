import { useEffect } from "react";

export default function useEventListener(element_Ref, event, handle, array_dependence=[]) {

  useEffect(() => {
    const component = element_Ref.current;

    if(!component) return;

    component.addEventListener(event, handle);

    return () => {
      component.removeEventListener(event, handle);
    };

  }, array_dependence);
}


/* import { useEffect } from "react";

export default function useEventListener(element, event, handle, array_dependence=[]) {

  useEffect(() => {
    document.addEventListener(event, handle);

    return () => {
      document.removeEventListener(event, handle);
    };

  }, array_dependence);
} */
