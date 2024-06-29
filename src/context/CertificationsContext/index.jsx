import { createContext, useContext, useEffect, useState } from "react"
import { certifications } from "./data";

export const GlobalCertificationsContext = createContext();

export default function CertificationsProvider({ children }) {
   const [ filterCards, setFilterCards ] = useState('all');
   const [ filteredData, setFilteredData ] = useState([]);
   const [ dataCertifications, setDataCertifications ] = useState(certifications);

   useEffect(() => {

    setFilteredData(dataCertifications.filter(item => item.type === filterCards || filterCards === 'all'));

   }, [filterCards]);

  return (
    <GlobalCertificationsContext.Provider value={{
      filterCards, setFilterCards,
      dataCertifications, setDataCertifications,
      filteredData, setFilteredData,
    }}>
      { children }
    </GlobalCertificationsContext.Provider>
  )
}

export const useCertification = () => useContext(GlobalCertificationsContext);
