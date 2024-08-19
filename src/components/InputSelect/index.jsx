import { useEffect, useRef, useState } from 'react';
import './styles.css';

export default function InputSelect({width, height, radius=10, options=[], id, handle_function}) {

  const DisplayBody_Ref = useRef();

  const [ displaySelect, setDisplaySelect ] = useState('none');
  const [ selectOption, setSelectOption ] = useState(options[0]);

  const handleChangeOption = (e) => {
    handle_function(e.target.textContent.toLowerCase( ));
    setSelectOption(e.target.textContent);
    setDisplaySelect('none')
  }

  const handleClickDisplayBody = () => {
    if(displaySelect === '') {
      setDisplaySelect('none')
    } else {
      setDisplaySelect('')
    }
    
  }

  const handleClickOut = (e) => {
    if(!DisplayBody_Ref.current.contains(e.target)){
      setDisplaySelect('none');
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOut);

    return () => {
      document.removeEventListener('click', handleClickOut);
    };

  }, []);

  return (


    <div 
      className='inputSelect-container' 
      ref={DisplayBody_Ref}
      id={id}
      style={{width: `${width}`, height: `${height}`}}>

        <div 
          onClick={handleClickDisplayBody} 
          style={{borderRadius: `${radius}px`}} 
          className='inputSelect-content'
          >


          <div 
            className='inputSelect-name-selected' 
            style={{borderRadius: `${radius}px ${radius}px ${radius}px ${radius}px`}}
          >
            {selectOption}
          </div>

          <div 
            className='inputSelect-icon-arrow-container' 
            style={{ borderRadius: `0px ${radius}px ${radius}px 0px`}}
          >
              <span 
              className="material-symbols-outlined inputSelect-arrow inputSelect-arrow-up">
                  expand_less
              </span>
              
              <span className="material-symbols-outlined inputSelect-arrow    inputSelect-arrow-down">
                  keyboard_arrow_down
              </span>

          </div>
        </div>

        <div 
        className='inputSelect-body-container' 
        style={{display: `${displaySelect}`, borderRadius: `${radius * 0.7}px`}}>

          <ul>
            {options.map((option, index) => <li key={index} onClick={handleChangeOption} >{option}</li>)}
          </ul>

        </div>
        
    </div>

)
}
