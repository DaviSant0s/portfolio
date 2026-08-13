import { Link as ScrollLink } from 'react-scroll';
import * as m from 'motion/react-m';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useSideBar } from '../../context/SideBarContext';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeaderSideBar() {

  const { setMenuEnabled } = useSideBar();
  const { activeSection, setActiveSection } = useHeader();
  const { pathname } = useLocation();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 34,
  };
  const itemVariants = {
    rest: { x: 0 },
    featured: { x: 0 },
    featuredActive: { x: 0 },
    hovered: { x: 2 },
    active: { x: 0 },
  };
  const iconVariants = {
    rest: { color: 'var(--color-text-muted)' },
    featured: { color: 'var(--color-text-muted)' },
    featuredActive: { color: 'var(--color-text-strong)' },
    hovered: { color: 'var(--color-accent)' },
    active: { color: 'var(--color-accent)' },
  };
  const labelVariants = {
    rest: { color: 'var(--color-text)' },
    featured: { color: 'var(--color-text)' },
    featuredActive: { color: 'var(--color-text-strong)' },
    hovered: { color: 'var(--color-accent)' },
    active: { color: 'var(--color-accent)' },
  };

  const handleClickCloseSideBar = (sectionName) => {
    setActiveSection(sectionName);
    setMenuEnabled(false)
  }

  return (
    <nav aria-label='Navegação do menu' className='flex w-full shrink-0 flex-col gap-2 px-[14px] pt-[18px] pb-2'>
      {navigationSections.map((item) => {
        const isRouteLink = Boolean(item.path);
        const isArticlesLink = item.section === 'articles';
        const isActive = isRouteLink
          ? pathname.startsWith(item.path)
          : pathname === '/' && activeSection === item.section;
        const itemState = isArticlesLink
          ? (isActive ? 'featuredActive' : 'featured')
          : (isActive ? 'active' : 'rest');
        const linkProps = item.duration ? { duration: item.duration } : {};
        const itemClassName = [
          'relative z-0 flex min-h-[52px] w-full cursor-pointer select-none items-center gap-3 overflow-hidden rounded-[20px] border px-4 text-[0.98rem] font-semibold transition-colors duration-[180ms] ease-out min-[500px]:min-h-14 min-[500px]:gap-[14px] min-[500px]:rounded-2xl min-[500px]:text-[1.05rem]',
          isArticlesLink && !isActive
            ? 'border-outline bg-panel-soft hover:border-copy-soft hover:bg-panel-strong'
            : 'border-transparent hover:border-primary-soft hover:bg-primary-surface-strong',
        ].join(' ');

        const content = (
          <m.div
            className={itemClassName}
            variants={itemVariants}
            initial={false}
            animate={itemState}
            whileHover={isArticlesLink ? 'featuredActive' : 'hovered'}
            whileTap={{ x: 0 }}
            transition={{ duration: 0.18 }}
          >
            {isActive &&
              <m.span
                layoutId='sidebar-nav-indicator'
                aria-hidden='true'
                className={`shadow-surface-glint absolute inset-0 -z-10 rounded-2xl border ${
                  isArticlesLink
                    ? 'border-outline bg-panel-strong'
                    : 'bg-accent-surface-gradient border-primary-soft'
                }`}
                transition={indicatorTransition}
              />
            }
            <m.span
              className="material-symbols-outlined relative z-[1] text-[1.32rem] min-[500px]:text-[1.45rem]"
              variants={iconVariants}
              initial={false}
              aria-hidden='true'
            >
              {item.icon}
            </m.span>
            <m.span
              className='relative z-[1] tracking-[-0.01em]'
              variants={labelVariants}
              initial={false}
            >
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
              className='block w-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-primary-soft'
              aria-current={isActive ? (isRouteLink ? 'page' : 'location') : undefined}
              onClick={() => handleClickCloseSideBar(item.section)}
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
            href={`/#${item.hash}`}
            className='block w-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-primary-soft'
            aria-current={isActive ? 'location' : undefined}
            onClick={() => handleClickCloseSideBar(item.section)}
            {...linkProps}
          >
            {content}
          </ScrollLink>
        );
      })}
    </nav>
  )
}
