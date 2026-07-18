import { Link } from 'react-scroll';
import * as m from 'motion/react-m';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeader() {
  const { activeSection, setActiveSection } = useHeader();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 34,
  };
  const itemVariants = {
    rest: { y: 0 },
    hovered: { y: -2 },
    active: { y: 0 },
  };
  const labelVariants = {
    rest: { color: 'var(--color-text)' },
    hovered: { color: 'var(--color-accent)' },
    active: { color: 'var(--color-accent)' },
  };

  return (
    <nav className='flex h-[41px] shrink-0 items-end gap-0'>
      {navigationSections.map((item) => {
        const isActive = activeSection === item.section;
        const itemState = isActive ? 'active' : 'rest';
        const linkProps = item.duration ? { duration: item.duration } : {};
        const linkPageClassName = [
          'relative z-0 flex h-full cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded-t-[12px] border-x border-t-[3px] border-outline-strong bg-panel px-[18px] transition-colors duration-[180ms] ease-out hover:z-[2] hover:border-primary-soft hover:bg-primary-surface',
          isActive ? 'z-[3] border-primary-soft bg-transparent' : '',
        ].join(' ').trim();

        return (
          <Link
            key={item.section}
            to={item.to}
            smooth={true}
            offset={item.offset}
            className='-ml-px flex h-full first:ml-0'
            onClick={() => setActiveSection(item.section)}
            {...linkProps}
          >
            <m.div
              className={linkPageClassName}
              variants={itemVariants}
              initial={false}
              animate={itemState}
              whileHover='hovered'
              whileTap={{ y: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isActive &&
                <m.span
                  layoutId='header-nav-indicator'
                  className='shadow-surface-glint absolute inset-0 -z-10 rounded-[inherit] bg-primary-surface'
                  transition={indicatorTransition}
                />
              }
              <m.span
                className='relative z-[1]'
                variants={labelVariants}
                initial={false}
              >
                {item.label}
              </m.span>
            </m.div>
          </Link>
        );
      })}
    </nav>
  )
}
