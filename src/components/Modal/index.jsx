import { useEffect } from 'react';
import './styles.css';

export default function Modal({ setIsOpen }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div className='modal-container'> 
      <button onClick={() => setIsOpen(s => !s)}>fechar a modal</button>
    </div>
  );
  
}

/* 
  useEffect(() => {
    if(!isOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]); */

/*   useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
    console.log('passei aqui')
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]); */