import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHeader } from '../../context/HeaderContext';

const defaultOptions = {
  threshold: 0,
  rootMargin: '-90px 0px -55% 0px',
};

export default function useTrackActiveSection(sectionName, options = {}) {
  const { setActiveSection } = useHeader();
  const { ref, inView } = useInView({
    ...defaultOptions,
    ...options,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return { ref, inView };
}
