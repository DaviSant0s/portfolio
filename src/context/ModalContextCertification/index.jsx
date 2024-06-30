import { createContext, useContext } from "react"
import ModalProvider from "../ModalContext";

const GlobalModalCertificationContext = createContext();


export default function ModalCertificationProvider({ children }) {

  return (
    <GlobalModalCertificationContext.Provider value={{}}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </GlobalModalCertificationContext.Provider>
  )
}


export const useModalCertifications = () => useContext(GlobalModalCertificationContext);
