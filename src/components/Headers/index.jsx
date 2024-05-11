import { useState } from 'react';
import useEventListener from '../../hooks/useEventListenerDocument';
import Header from '../Header';
import HeaderScroll from '../HeaderScroll';
import './styles.css';


const viewHight = window.innerHeight

export default function Headers() {

  const [ scrolbarPositionWin, setScrolbarPositionWin ] = useState(0);

  const handleOnScrollWin = () => {
    setScrolbarPositionWin(window.scrollY);
  }

  useEventListener('scroll', handleOnScrollWin);

  return (
    <>
      <Header/>

      {scrolbarPositionWin > (viewHight - 80) &&
        <HeaderScroll/>
      }
      
    </>
  )
}
