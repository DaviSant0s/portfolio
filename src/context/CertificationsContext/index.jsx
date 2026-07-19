import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { certificationFilters, certifications, normalizeCertificationFilter } from "./data";

export const GlobalCertificationsContext = createContext();

export default function CertificationsProvider({ children }) {
  const [ filterCards, setFilterCardsState ] = useState('all');

  const sortHighlightedFirst = useCallback((items) => (
    [...items].sort((firstItem, secondItem) => {
      const firstIsHighlighted = Number(Boolean(firstItem.featuredIcon));
      const secondIsHighlighted = Number(Boolean(secondItem.featuredIcon));

      return secondIsHighlighted - firstIsHighlighted;
    })
  ), []);

  const setFilterCards = useCallback((nextFilter) => {
    setFilterCardsState(normalizeCertificationFilter(nextFilter));
  }, []);

  const filteredData = useMemo(() => {
    if (filterCards === 'all') {
      return sortHighlightedFirst(certifications);
    }

    return sortHighlightedFirst(certifications.filter((item) => item.type === filterCards));
  }, [filterCards, sortHighlightedFirst]);

  const value = useMemo(() => ({
    filterCards,
    setFilterCards,
    certificationFilters,
    filteredData,
  }), [filterCards, setFilterCards, filteredData]);

  return (
    <GlobalCertificationsContext.Provider value={value}>
      { children }
    </GlobalCertificationsContext.Provider>
  )
}

export const useCertification = () => useContext(GlobalCertificationsContext);
