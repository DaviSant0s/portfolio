import { Link as ScrollLink } from 'react-scroll';
import * as m from 'motion/react-m';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeader() {
  const { activeSection, setActiveSection } = useHeader();
  const { pathname } = useLocation();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 460,
    damping: 38,
  };

  return (
    <nav className='flex shrink-0 items-center gap-5 min-[1280px]:gap-7'>
      {navigationSections.map((item) => {
        const isRouteLink = Boolean(item.path);
        const isActive = isRouteLink
          ? pathname.startsWith(item.path)
          : pathname === '/' && activeSection === item.section;
        const linkProps = item.duration ? { duration: item.duration } : {};
        const linkPageClassName = [
          'group/header-link relative inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap py-2 text-[0.98rem] font-medium tracking-[-0.02em] transition-colors duration-200 ease-out',
          isActive ? 'text-copy-strong' : 'text-copy-muted hover:text-copy-strong',
        ].join(' ').trim();

        const content = (
          <m.div
            className={linkPageClassName}
            initial={false}
            whileHover={{ y: -1.5 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {isActive &&
              <m.span
                layoutId='header-nav-indicator'
                className='absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))]'
                transition={indicatorTransition}
              />
            }
            <m.span className='relative z-[1]'>
              {item.label}
            </m.span>
          </m.div>
        );

        if (isRouteLink || pathname !== '/') {
          const destination = isRouteLink ? item.path : `/#${item.hash}`;

          return (
            <RouterLink
              key={item.section}
              to={destination}
              className='inline-flex'
              onClick={() => setActiveSection(item.section)}
            >
              {content}
            </RouterLink>
          );
        }

        return (
          <ScrollLink
            key={item.section}
            to={item.to}
            smooth={true}
            offset={item.offset}
            className='inline-flex'
            onClick={() => setActiveSection(item.section)}
            {...linkProps}
          >
            {content}
          </ScrollLink>
        );
      })}
    </nav>
  )
}
