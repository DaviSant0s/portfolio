import { Link } from 'react-scroll';
import * as m from 'motion/react-m';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeader() {
  const { activeSection, setActiveSection } = useHeader();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 460,
    damping: 38,
  };

  return (
    <nav className='flex shrink-0 items-center gap-7 min-[1200px]:gap-8'>
      {navigationSections.map((item) => {
        const isActive = activeSection === item.section;
        const linkProps = item.duration ? { duration: item.duration } : {};
        const linkPageClassName = [
          'group/header-link relative inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap py-2 text-[0.98rem] font-medium tracking-[-0.02em] transition-colors duration-200 ease-out',
          isActive ? 'text-copy-strong' : 'text-copy-muted hover:text-copy-strong',
        ].join(' ').trim();

        return (
          <Link
            key={item.section}
            to={item.to}
            smooth={true}
            offset={item.offset}
            className='inline-flex'
            onClick={() => setActiveSection(item.section)}
            {...linkProps}
          >
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
          </Link>
        );
      })}
    </nav>
  )
}
