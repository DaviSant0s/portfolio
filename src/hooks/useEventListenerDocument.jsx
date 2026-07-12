import { useEffect } from "react";

export default function useEventListener(event, handle) {
  useEffect(() => {
    document.addEventListener(event, handle);

    return () => {
      document.removeEventListener(event, handle);
    };

  }, [event, handle]);
}
