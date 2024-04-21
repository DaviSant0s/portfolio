import { useEffect } from "react";

export default function useEventListener(event, handle, array_dependence=[]) {

  useEffect(() => {
    document.addEventListener(event, handle);

    return () => {
      document.removeEventListener(event, handle);
    };

  }, array_dependence);

}
