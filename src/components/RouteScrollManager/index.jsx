import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { navigationSections } from '../../data/navigationSections';

export default function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const section = navigationSections.find((item) => item.hash === hash.slice(1));
      const animationFrame = window.requestAnimationFrame(() => {
        document.getElementById(section?.to)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [hash, pathname]);

  return null;
}
