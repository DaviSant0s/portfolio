import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import NavHeaderSideBar from '../NavHeaderSideBar';
import Logo from '../Logo';

export default function SideBar({ menuEnabled, setMenuEnabled }) {

  const sideBar_Ref = useRef();
  const [ animacao, setAnimacao ] = useState({});

  useEffect(() => {
    if(menuEnabled){
      setAnimacao({
        transform: 'translate(100%)', 
        boxShadow: '0px 0px 20px #6b7a89',
      })
    }else {
      setAnimacao({})
    }

  }, [menuEnabled])

  const handeClickSideBarOut = (e) => {
    console.log(menuEnabled)
    if(!sideBar_Ref.current.contains(e.target)) {
      setMenuEnabled(false)
      console.log(menuEnabled)
    }
  }

  return (
    <div style={{width: `${menuEnabled ? '100vh' : '0'}`}} onClick={handeClickSideBarOut} className='background-sidebar'>

      <div ref={sideBar_Ref} style={animacao} className='sideBar-container'>
        <div className='title-sideBar'>
          
          <Logo sideBar={true}/>

        </div>

        <NavHeaderSideBar/>

      </div>

    </div>
  )
}
