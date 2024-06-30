import { useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext/index';
import './styles.css';

export default function Modal({children}) {
  const Ref_modal_content = useRef();

  const { isOpen, setIsOpen } = useModal();

  useEffect(() => {

    if(isOpen){
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handeClickModalOut = (e) => {
    if(!Ref_modal_content.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {isOpen &&
        <div onClick={handeClickModalOut} className='modal-container'> 
          <div ref={Ref_modal_content} className='modal-content'>
            {children}
          </div>
        </div>
      }
    </>
  );
  
}