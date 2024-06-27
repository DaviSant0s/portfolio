import { createContext, useContext } from "react"

export const GlobalCertificationsContext = createContext();

export default function CertificationsProvider({ children }) {


  return (
    <GlobalCertificationsContext.Provider>
      { children }
    </GlobalCertificationsContext.Provider>
  )
}

export const useCertification = () => useContext(GlobalCertificationsContext);
