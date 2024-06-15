import { useEffect, useState } from "react"

export default function screenSize() {

  const [ screen, setScreen ] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResizeScreen = () => {
    setScreen({
      height: window.innerHeight,
      width: window.innerWidth
    });

  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeScreen);

    return () => {
      window.removeEventListener('resize', handleResizeScreen);
    }
  }, [])

  return screen;
}
