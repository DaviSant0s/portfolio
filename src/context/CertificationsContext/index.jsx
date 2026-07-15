import { createContext, useContext, useMemo, useState } from "react"
import { certifications } from "./data";

export const GlobalCertificationsContext = createContext();

export default function CertificationsProvider({ children }) {
  const [ filterCards, setFilterCards ] = useState('all');

  const filteredData = useMemo(() => {
    if (filterCards === 'all') {
      return certifications;
    }

    return certifications.filter((item) => item.type === filterCards);
  }, [filterCards]);

  const value = useMemo(() => ({
    filterCards,
    setFilterCards,
    filteredData,
  }), [filterCards, filteredData]);

  return (
    <GlobalCertificationsContext.Provider value={value}>
      { children }
    </GlobalCertificationsContext.Provider>
  )
}

export const useCertification = () => useContext(GlobalCertificationsContext);
