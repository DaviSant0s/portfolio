import { createContext, useContext, useState } from "react"

export const GlobalModalContext = createContext();


export default function ModalProvider({ children }) {
  const [ isOpen, setIsOpen ] = useState(false);


  return (
    <GlobalModalContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </GlobalModalContext.Provider>
  )
}

export const useModal = () => useContext(GlobalModalContext);
