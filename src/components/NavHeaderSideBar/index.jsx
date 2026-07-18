import { Link } from 'react-scroll';
import * as m from 'motion/react-m';
import { useSideBar } from '../../context/SideBarContext';
import { useHeader } from '../../context/HeaderContext';
import { navigationSections } from '../../data/navigationSections.js';


export default function NavHeaderSideBar() {

  const { setMenuEnabled } = useSideBar();
  const { activeSection, setActiveSection } = useHeader();
  const indicatorTransition = {
    type: 'spring',
    stiffness: 420,
    damping: 34,
  };
  const itemVariants = {
    rest: { x: 0 },
    hovered: { x: 2 },
    active: { x: 0 },
  };
  const iconVariants = {
    rest: { color: 'var(--color-text-muted)' },
    hovered: { color: 'var(--color-accent)' },
    active: { color: 'var(--color-accent)' },
  };
  const labelVariants = {
    rest: { color: 'var(--color-text)' },
    hovered: { color: 'var(--color-accent)' },
    active: { color: 'var(--color-accent)' },
  };

  const handleClickCloseSideBar = (sectionName) => {
    setActiveSection(sectionName);
    setMenuEnabled(false)
  }

  return (
    <nav className='flex w-full shrink-0 flex-col gap-2 px-[14px] pt-[18px] pb-2'>
      {navigationSections.map((item) => {
        const isActive = activeSection === item.section;
        const itemState = isActive ? 'active' : 'rest';
        const linkProps = item.duration ? { duration: item.duration } : {};
        const itemClassName = 'relative z-0 flex min-h-14 w-full cursor-pointer select-none items-center gap-[14px] overflow-hidden rounded-2xl border border-transparent px-4 text-[1.05rem] font-semibold transition-colors duration-[180ms] ease-out hover:border-primary-soft hover:bg-primary-surface-strong';

        return (
          <Link
            key={item.section}
            to={item.to}
            smooth={true}
            offset={item.offset}
            className='block w-full outline-none'
            {...linkProps}
          >
            <m.div
              className={itemClassName}
              variants={itemVariants}
              initial={false}
              animate={itemState}
              whileHover='hovered'
              whileTap={{ x: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => handleClickCloseSideBar(item.section)}
            >
              {isActive &&
                <m.span
                  layoutId='sidebar-nav-indicator'
                  className='absolute inset-0 -z-10 rounded-2xl border border-primary-soft shadow-[inset_0_1px_0_var(--color-surface-glint)] [background:linear-gradient(180deg,var(--color-accent-surface-strong)_0%,var(--color-accent-surface)_100%)]'
                  transition={indicatorTransition}
                />
              }
              <m.span
                className="material-symbols-outlined relative z-[1] text-[1.45rem]"
                variants={iconVariants}
                initial={false}
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
          </Link>
        );
      })}
    </nav>
  )
}
